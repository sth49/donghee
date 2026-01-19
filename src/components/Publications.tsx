import {
  FileText,
  Link2,
  BookOpen,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Star,
} from "lucide-react";
import { publicationsData } from "../data/publicationsData";
import { useState } from "react";

export default function Publications() {
  const [showAll, setShowAll] = useState(false);

  // Group publications by year
  const publicationsByYear = publicationsData.reduce((acc, pub) => {
    const year = pub.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(pub);
    return acc;
  }, {} as Record<number, typeof publicationsData>);

  const sortedYears = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  const recentYears = sortedYears.slice(0, 2);
  const olderYears = sortedYears.slice(2);
  const displayedYears = showAll ? sortedYears : recentYears;

  return (
    <section className="py-8 lg:py-12 bg-base-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Publications</h2>
          </div>
          <p className="text-base-content/60 text-sm flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />{" "}
            indicates first/co-first author
          </p>
        </div>

        {/* Publications List by Year */}
        <div className="space-y-8">
          {displayedYears.map((year) => (
            <div key={year}>
              <h3 className="text-lg font-bold text-primary mb-4 border-b border-base-content/10 pb-2">
                {year}
              </h3>
              <ul className="space-y-6">
                {publicationsByYear[year].map((pub, index) => (
                  <li key={index} className="group">
                    {/* Title */}
                    <p className="font-semibold text-base-content mb-1">
                      {pub.links?.pdf || pub.links?.project ? (
                        <a
                          href={pub.links?.pdf || pub.links?.project}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </p>

                    {/* Authors */}
                    {pub.authors.length > 0 && (
                      <p className="text-sm text-base-content/70 mb-1">
                        {pub.authors.map((author, i) => (
                          <span key={i}>
                            {author === "Donghee Hong" ? (
                              <span className="font-semibold text-primary">
                                {author}
                                {pub.isFirstAuthor && (
                                  <Star className="inline-block h-3 w-3 ml-0.5 mb-0.5 fill-yellow-400 text-yellow-400" />
                                )}
                              </span>
                            ) : (
                              author
                            )}
                            {i < pub.authors.length - 1 && ", "}
                          </span>
                        ))}
                      </p>
                    )}

                    {/* Venue */}
                    <p className="text-sm text-base-content/60 italic">
                      {pub.venue}
                    </p>

                    {/* Links */}
                    {(pub.links?.pdf ||
                      pub.links?.arxiv ||
                      pub.links?.github ||
                      pub.links?.project ||
                      pub.links?.doi) && (
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
                        {pub.links?.pdf && (
                          <a
                            href={pub.links.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            <FileText className="h-3.5 w-3.5" />
                            PDF
                          </a>
                        )}
                        {pub.links?.arxiv && (
                          <a
                            href={pub.links.arxiv}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            arXiv
                          </a>
                        )}
                        {pub.links?.github && (
                          <a
                            href={pub.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            <svg
                              className="h-3.5 w-3.5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            Code
                          </a>
                        )}
                        {pub.links?.project && (
                          <a
                            href={pub.links.project}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            <Link2 className="h-3.5 w-3.5" />
                            Project
                          </a>
                        )}
                        {pub.links?.doi && (
                          <a
                            href={pub.links.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            DOI
                          </a>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        {olderYears.length > 0 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 btn btn-sm btn-outline btn-primary gap-1"
          >
            {showAll ? (
              <>
                Show less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Show all publications <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        )}
      </div>
    </section>
  );
}
