export default function TestTheme() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Theme Test</h1>

      {/* Test nord theme colors */}
      <div data-theme="nord" className="p-4 rounded-lg border">
        <h2 className="text-xl font-semibold">Nord Theme</h2>
        <div className="flex gap-2 mt-2">
          <div className="btn btn-primary">Primary</div>
          <div className="btn btn-secondary">Secondary</div>
          <div className="btn btn-accent">Accent</div>
        </div>
        <div className="bg-base-100 text-base-content p-2 mt-2 rounded">Base 100</div>
        <div className="bg-base-200 text-base-content p-2 mt-2 rounded">Base 200</div>
        <div className="bg-base-300 text-base-content p-2 mt-2 rounded">Base 300</div>
      </div>

      {/* Test business theme colors */}
      <div data-theme="business" className="p-4 rounded-lg border">
        <h2 className="text-xl font-semibold">Business Theme</h2>
        <div className="flex gap-2 mt-2">
          <div className="btn btn-primary">Primary</div>
          <div className="btn btn-secondary">Secondary</div>
          <div className="btn btn-accent">Accent</div>
        </div>
        <div className="bg-base-100 text-base-content p-2 mt-2 rounded">Base 100</div>
        <div className="bg-base-200 text-base-content p-2 mt-2 rounded">Base 200</div>
        <div className="bg-base-300 text-base-content p-2 mt-2 rounded">Base 300</div>
      </div>
    </div>
  );
}