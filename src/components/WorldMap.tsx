import { MapPin, Plane, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import worldGeo from "../data/worldGeo.json";
import visitedRegions from "../data/visitedRegions.json";
import { travelData } from "../data/travelData";

// Equirectangular projection over a 800x400 canvas, cropped vertically to
// the populated latitude band so there is no empty polar space. The
// horizontal window is shifted so East Asia sits in the center; the map is
// drawn twice (0 and +VW) so the wrap-around seam is filled seamlessly.
const VW = 800;
const VH = 400;
const VB_Y = 12;
const VB_H = 328;
const ASPECT = VB_H / VW;

const CENTER_LNG = 160;
const projectX = (lng: number) => ((lng + 180) / 360) * VW;
const projectY = (lat: number) => ((90 - lat) / 180) * VH;
const VB_X = projectX(CENTER_LNG) - VW / 2;

const wrapX = (lng: number) => {
  const mx = projectX(lng);
  return mx < VB_X ? mx + VW : mx;
};

type View = { x: number; y: number; w: number; h: number };

const MIN_W = VW / 7;
const MAX_W = VW;

// Above this zoom factor the individual city pins fade in; below it (the
// overview) only the hatched territories show.
const PIN_ZOOM = 1.6;

function clampView(v: View): View {
  const w = Math.max(MIN_W, Math.min(MAX_W, v.w));
  const h = w * ASPECT;
  const y = Math.max(0, Math.min(VH - h, v.y));
  return { x: v.x, y, w, h };
}

const REGIONS: Record<string, { lng: number; lat: number; zoom: number }> = {
  World: { lng: CENTER_LNG, lat: 18, zoom: 1 },
  Asia: { lng: 110, lat: 30, zoom: 2.4 },
  Europe: { lng: 8, lat: 50, zoom: 3.4 },
  Americas: { lng: -95, lat: 22, zoom: 1.9 },
};

function viewFor(region: string): View {
  const r = REGIONS[region];
  if (r.zoom === 1) return { x: VB_X, y: VB_Y, w: VW, h: VB_H };
  const w = VW / r.zoom;
  const h = VB_H / r.zoom;
  return clampView({ x: wrapX(r.lng) - w / 2, y: projectY(r.lat) - h / 2, w, h });
}

type Ring = number[][];
type Geometry = { type: string; coordinates: unknown };

function ringToPath(ring: Ring): string {
  let path = "";
  ring.forEach((pt, i) => {
    const prev = ring[i - 1];
    const crossesDateLine = prev && Math.abs(pt[0] - prev[0]) > 180;
    const command = i === 0 || crossesDateLine ? "M" : "L";
    if (crossesDateLine) path += "Z";
    path += `${command}${projectX(pt[0]).toFixed(1)} ${projectY(pt[1]).toFixed(1)}`;
  });
  return `${path}Z`;
}

function featurePath(geometry: Geometry): string {
  if (geometry.type === "Polygon") {
    return (geometry.coordinates as Ring[]).map(ringToPath).join("");
  }
  if (geometry.type === "MultiPolygon") {
    return (geometry.coordinates as Ring[][])
      .map((poly) => poly.map(ringToPath).join(""))
      .join("");
  }
  return "";
}

function polygonBounds(poly: Ring[]): [number, number, number, number] {
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  for (const ring of poly) {
    for (const [x, y] of ring) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
  return [minX, maxX, minY, maxY];
}

function visitHighlightGeometry(name: string, geometry: Geometry): Geometry {
  if (geometry.type !== "MultiPolygon") return geometry;
  const polys = geometry.coordinates as Ring[][];

  if (name === "USA") {
    return {
      ...geometry,
      coordinates: polys.filter((poly) => {
        const [minX, maxX, minY, maxY] = polygonBounds(poly);
        return minX > -130 && maxX < -60 && minY > 20 && maxY < 52;
      }),
    };
  }

  if (name === "France") {
    return {
      ...geometry,
      coordinates: polys.filter((poly) => {
        const [minX, maxX, minY, maxY] = polygonBounds(poly);
        return minX > -6 && maxX < 10 && minY > 40 && maxY < 52;
      }),
    };
  }

  return geometry;
}

// Bounding-box center of a geometry, as [lng, lat].
function geomCenter(geometry: Geometry): [number, number] {
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  const scan = (ring: Ring) => {
    for (const [x, y] of ring) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  };
  if (geometry.type === "Polygon") (geometry.coordinates as Ring[]).forEach(scan);
  else
    (geometry.coordinates as Ring[][]).forEach((poly) => poly.forEach(scan));
  return [(minX + maxX) / 2, (minY + maxY) / 2];
}

const MERIDIANS = [-180, -150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150];
const PARALLELS = [-60, -30, 0, 30, 60];

const VISITED_COUNTRIES_FOR_STATS = new Set([
  "Spain",
  "England",
  "Austria",
  "South Korea",
  "China",
  "Japan",
  "Taiwan",
  "Malaysia",
  "France",
  "USA",
]);

// Clicked map name -> the country value used in travelData.
const NAME_TO_COUNTRY: Record<string, string> = {
  Spain: "Spain",
  England: "UK",
  Austria: "Austria",
  "South Korea": "Korea",
  China: "China",
  Japan: "Japan",
  Taiwan: "Taiwan",
  Malaysia: "Malaysia",
  France: "France",
  USA: "USA",
};

const FEATURE_CENTER_OVERRIDES: Record<string, [number, number]> = {
  France: [2.35, 46.6],
  Spain: [-3.7, 40.4],
  England: [-1.5, 52.7],
  Austria: [14.3, 47.6],
  "South Korea": [127.8, 36.4],
  Japan: [138.2, 37.8],
  Taiwan: [121, 23.8],
  Malaysia: [116.1, 5.7],
  China: [105, 35],
  USA: [-98.6, 39.8],
};

export default function WorldMap() {
  const [region, setRegion] = useState("World");
  const [selected, setSelected] = useState<string | null>(null);
  const [view, setView] = useState<View>(() => viewFor("World"));
  const [size, setSize] = useState({ w: 0, h: 0 });

  const viewRef = useRef(view);
  viewRef.current = view;

  const svgRef = useRef<SVGSVGElement | null>(null);
  const rafRef = useRef(0);
  const drag = useRef({ active: false, moved: false, px: 0, py: 0, start: view });

  const features = (
    worldGeo as {
      features: {
        geometry: Geometry;
        properties: { name: string };
      }[];
    }
  ).features;

  const regions = (
    visitedRegions as {
      features: {
        geometry: Geometry;
        properties: { name: string };
      }[];
    }
  ).features.filter((f) => f.properties.name !== "California");

  const zoom = VW / view.w;
  const showPins = zoom > PIN_ZOOM;
  const worldCopyStart = Math.floor(view.x / VW) * VW - VW;
  const worldOffsets = Array.from({ length: 5 }, (_, i) => worldCopyStart + i * VW);
  const visitedCountryCount = features.filter((f) =>
    VISITED_COUNTRIES_FOR_STATS.has(f.properties.name),
  ).length;
  const totalCountryCount = features.length;
  const visitedPercent = Math.round((visitedCountryCount / totalCountryCount) * 100);

  const animateTo = (to: View) => {
    cancelAnimationFrame(rafRef.current);
    const from = viewRef.current;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / 550);
      const e = 1 - Math.pow(1 - p, 3);
      setView({
        x: from.x + (to.x - from.x) * e,
        y: from.y + (to.y - from.y) * e,
        w: from.w + (to.w - from.w) * e,
        h: from.h + (to.h - from.h) * e,
      });
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const selectRegion = (r: string) => {
    setRegion(r);
    animateTo(viewFor(r));
  };

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      cancelAnimationFrame(rafRef.current);
      const rect = el.getBoundingClientRect();
      const fx = (e.clientX - rect.left) / rect.width;
      const fy = (e.clientY - rect.top) / rect.height;
      const v = viewRef.current;
      const factor = Math.exp(e.deltaY * 0.0015);
      const w = Math.max(MIN_W, Math.min(MAX_W, v.w * factor));
      const h = w * ASPECT;
      const cvx = v.x + fx * v.w;
      const cvy = v.y + fy * v.h;
      setView(clampView({ x: cvx - fx * w, y: cvy - fy * h, w, h }));
      setRegion("");
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Track the rendered map size so the speech bubble can be kept on-screen.
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const update = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    cancelAnimationFrame(rafRef.current);
    drag.current = {
      active: true,
      moved: false,
      px: e.clientX,
      py: e.clientY,
      start: viewRef.current,
    };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.active) return;
    if (Math.abs(e.clientX - d.px) + Math.abs(e.clientY - d.py) > 4) d.moved = true;
    if (!d.moved) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const dx = ((e.clientX - d.px) / rect.width) * d.start.w;
    const dy = ((e.clientY - d.py) / rect.height) * d.start.h;
    setView(clampView({ ...d.start, x: d.start.x - dx, y: d.start.y - dy }));
    setRegion("");
  };
  const endDrag = () => {
    drag.current.active = false;
  };

  const worldXForLng = (lng: number) => {
    const x = wrapX(lng);
    const centerX = view.x + view.w / 2;
    return x + Math.round((centerX - x) / VW) * VW;
  };
  const leftPctWrapped = (lng: number) =>
    ((worldXForLng(lng) - view.x) / view.w) * 100;
  const topPct = (lat: number) => ((projectY(lat) - view.y) / view.h) * 100;

  // Selected country -> centroid + aggregated events.
  const allClaimable = [...features, ...regions];
  const selectedFeature = selected
    ? allClaimable.find((f) => f.properties.name === selected)
    : null;
  const selectedCities = selected
    ? travelData.filter((c) => c.country === NAME_TO_COUNTRY[selected])
    : [];
  const center = selected
    ? FEATURE_CENTER_OVERRIDES[selected] ??
      (selectedFeature ? geomCenter(selectedFeature.geometry) : null)
    : null;

  const claim = (name: string) => {
    if (drag.current.moved) return; // was a pan, not a click
    setSelected((prev) => (prev === name ? null : name));
  };

  return (
    <section className="py-8 lg:py-12 bg-base-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <Plane className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">My Travel Map</h2>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-sm text-base-content/60">
            <div className="flex min-w-64 items-center gap-3">
              <div>
                <p className="font-semibold text-base-content">
                  {visitedCountryCount} / {totalCountryCount} countries
                </p>
              </div>
              <span
                className="rounded-full bg-emerald-600/10 px-2 py-1 text-xs font-semibold text-emerald-700"
                aria-label={`${visitedPercent}% of mapped countries visited`}
              >
                {visitedPercent}% explored
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5">
                <span className="cartoon-visited-swatch" />
                Visited
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="cartoon-pin-conference h-4 w-4" />
                Conference
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="cartoon-pin-program h-4 w-4" />
                Program
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="cartoon-pin-travel h-4 w-4" />
                Travel
              </span>
            </div>
          </div>
        </div>

        <div className="cartoon-map-shell relative w-full overflow-hidden rounded-2xl">
          {/* Detail-level switch */}
          <div className="cartoon-map-region-switch absolute right-3 top-3 z-10 flex gap-0.5 rounded-full p-1">
            {Object.keys(REGIONS).map((r) => (
              <button
                key={r}
                onClick={() => selectRegion(r)}
                className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  region === r
                    ? "cartoon-map-region-active"
                    : "cartoon-map-region-idle"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <div
            className="cartoon-map-stage relative cursor-grab touch-none active:cursor-grabbing"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onClick={() => {
              if (!drag.current.moved) setSelected(null);
            }}
          >
            <svg
              ref={svgRef}
              viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`}
              className="w-full h-auto select-none"
              role="img"
              aria-label="World map of places visited"
            >
              <defs>
                <pattern
                  id="hatch"
                  patternUnits="userSpaceOnUse"
                  width="7"
                  height="7"
                  patternTransform="rotate(45)"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="7"
                    className="cartoon-hatch-line"
                    strokeWidth={2.4}
                  />
                </pattern>
                <filter id="mapPaperLift" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow
                    dx="0.9"
                    dy="1.4"
                    floodColor="#0f766e"
                    floodOpacity="0.16"
                    stdDeviation="0.25"
                  />
                </filter>
              </defs>
              <rect
                x={view.x}
                y={view.y}
                width={view.w}
                height={view.h}
                className="cartoon-ocean"
              />
              {worldOffsets.map((offset) => (
                <g key={offset} transform={`translate(${offset},0)`}>
                  {/* Graticule */}
                  {MERIDIANS.map((lng) => (
                    <line
                      key={`m${lng}`}
                      x1={projectX(lng)}
                      y1={0}
                      x2={projectX(lng)}
                      y2={VH}
                      className="cartoon-grid-line"
                      strokeWidth={0.7}
                    />
                  ))}
                  {PARALLELS.map((lat) => (
                    <line
                      key={`p${lat}`}
                      x1={0}
                      y1={projectY(lat)}
                      x2={VW}
                      y2={projectY(lat)}
                      className="cartoon-grid-line"
                      strokeWidth={0.7}
                    />
                  ))}
                  {/* Land */}
                  {features.map((f, i) => {
                    const visited = VISITED_COUNTRIES_FOR_STATS.has(f.properties.name);
                    const d = featurePath(f.geometry);
                    const visitedD = visited
                      ? featurePath(
                          visitHighlightGeometry(f.properties.name, f.geometry),
                        )
                      : "";
                    return (
                      <g
                        key={i}
                        onClick={
                          visited
                            ? (e) => {
                                e.stopPropagation();
                                claim(f.properties.name);
                              }
                            : undefined
                        }
                        style={visited ? { cursor: "pointer" } : undefined}
                      >
                        <path
                          d={d}
                          className="cartoon-land"
                          filter="url(#mapPaperLift)"
                          strokeWidth={0.85}
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                        {visited && (
                          <>
                            <path
                              d={visitedD}
                              className="cartoon-land-visited"
                              filter="url(#mapPaperLift)"
                              strokeWidth={1.5}
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            />
                            <path d={visitedD} fill="url(#hatch)" stroke="none" />
                          </>
                        )}
                      </g>
                    );
                  })}
                  {/* Sub-national claims (e.g. California) */}
                  {regions.map((r, i) => {
                    const d = featurePath(r.geometry);
                    return (
                      <g
                        key={`r${i}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          claim(r.properties.name);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <path
                          d={d}
                          className="cartoon-region"
                          filter="url(#mapPaperLift)"
                          strokeWidth={1.5}
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                        <path d={d} fill="url(#hatch)" stroke="none" />
                      </g>
                    );
                  })}
                  {/* Selected: trace the outline like a lasso */}
                  {selectedFeature && (
                    <path
                      key={`trace-${selected}-${offset}`}
                      d={featurePath(
                        visitHighlightGeometry(
                          selectedFeature.properties.name,
                          selectedFeature.geometry,
                        ),
                      )}
                      pathLength={100}
                      className="map-trace cartoon-selected-outline"
                      strokeWidth={2.4}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  )}
                </g>
              ))}
            </svg>

            {/* Location pins — only when zoomed in past the overview */}
            <div className="pointer-events-none absolute inset-0">
              {travelData.map((c, i) => {
                const left = leftPctWrapped(c.lng);
                const top = topPct(c.lat);
                const onScreen =
                  left >= -5 && left <= 105 && top >= -5 && top <= 105;
                const visible = onScreen && showPins;
                const pinClass =
                  c.type === "program"
                    ? "cartoon-pin-program"
                    : c.type === "travel"
                      ? "cartoon-pin-travel"
                      : "cartoon-pin-conference";
                return (
                  <div
                    key={i}
                    className="group/pin pointer-events-auto absolute transition-opacity duration-300"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      opacity: visible ? 1 : 0,
                      transform: "translate(-50%, -100%)",
                    }}
                    aria-label={`${c.city}${c.milestone ? ", first-time visit" : ""}`}
                  >
                    <MapPin className={`h-5 w-5 ${pinClass}`} />
                    <div className="pointer-events-none absolute left-1/2 top-0 z-20 w-max max-w-44 -translate-x-1/2 -translate-y-full rounded-lg border border-sky-200 bg-white px-2 py-1 text-center text-[10px] font-semibold text-slate-700 opacity-0 shadow-md transition-opacity group-hover/pin:opacity-100">
                      <span>{c.city}</span>
                      {c.milestone && (
                        <span className="block text-amber-600">First-time</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Speech bubble for the selected country (kept on-screen) */}
            {selected &&
              center &&
              size.w > 0 &&
              (() => {
                const BW = 224; // bubble width (w-56)
                const PAD = 10;
                const ax = (leftPctWrapped(center[0]) / 100) * size.w;
                const ay = (topPct(center[1]) / 100) * size.h;
                // Flip below the country when there isn't room above.
                const below = ay < size.h * 0.45;
                // Clamp horizontally so the centered bubble stays inside.
                const left = Math.max(
                  BW / 2 + PAD,
                  Math.min(size.w - BW / 2 - PAD, ax),
                );
                // Tail points at the real country center.
                const tailDx = Math.max(
                  -BW / 2 + 16,
                  Math.min(BW / 2 - 16, ax - left),
                );
                return (
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute" style={{ left, top: ay }}>
                      <div
                        className={`bubble-pop pointer-events-auto absolute w-56 -translate-x-1/2 rounded-2xl border border-sky-300 bg-white p-3 text-slate-800 shadow-xl ${
                          below ? "top-3" : "bottom-3"
                        }`}
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelected(null);
                          }}
                          className="absolute right-2 top-2 text-slate-400 hover:text-slate-800"
                          aria-label="Close"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                        <p className="text-sm font-bold text-slate-900">
                          {selected}
                        </p>
                        <ul className="mt-2 space-y-2">
                          {selectedCities.map((c, i) => (
                            <li key={i}>
                              <p className="text-xs font-semibold text-sky-700">
                                {c.city}
                              </p>
                              <ul className="mt-0.5 space-y-0.5">
                                {c.events.map((e, j) => (
                                  <li
                                    key={j}
                                    className="flex items-start gap-1 text-[11px] text-slate-600"
                                  >
                                    <span className="text-sky-500">•</span>
                                    {e}
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                        {/* tail */}
                        <div
                          className={`absolute h-3 w-3 rotate-45 border-sky-300 bg-white ${
                            below
                              ? "-top-1.5 border-l border-t"
                              : "-bottom-1.5 border-b border-r"
                          }`}
                          style={{
                            left: `calc(50% + ${tailDx}px)`,
                            transform: "translateX(-50%) rotate(45deg)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })()}
          </div>
        </div>

      </div>
    </section>
  );
}
