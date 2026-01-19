import {
  ChevronDown,
  ChevronUp,
  Award,
  Presentation,
  GraduationCap,
  Briefcase,
  Trophy,
  Sparkles,
} from "lucide-react";
import { newsData, type NewsType } from "../data/newsData";
import { useState } from "react";

export default function News() {
  const [showAll, setShowAll] = useState(false);
  const displayedNews = showAll ? newsData : newsData.slice(0, 3);

  const getIcon = (type: NewsType) => {
    const baseClass = "h-4 w-4";
    switch (type) {
      case "award":
        return <Trophy className={`${baseClass} text-amber-500`} />;
      case "conference":
        return <Presentation className={`${baseClass} text-blue-500`} />;
      case "scholarship":
        return <Award className={`${baseClass} text-emerald-500`} />;
      case "position":
        return <Briefcase className={`${baseClass} text-violet-500`} />;
      case "graduation":
        return <GraduationCap className={`${baseClass} text-rose-500`} />;
      default:
        return null;
    }
  };

  // Parse **bold** syntax in content
  const renderContent = (content: string) => {
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold text-base-content">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-6">News</h2>

        {/* News List */}
        <ul className="space-y-3">
          {displayedNews.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-primary font-semibold text-sm min-w-[4.5rem] pt-0.5">
                {item.date}
              </span>
              <span className="pt-0.5">{getIcon(item.type)}</span>
              <span className="text-base-content/80 leading-relaxed">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-primary/30 hover:decoration-primary hover:text-primary transition-colors"
                  >
                    {renderContent(item.content)}
                  </a>
                ) : (
                  renderContent(item.content)
                )}
                {index === 0 && (
                  <span className="ml-2 inline-flex items-center gap-1 text-xs text-amber-500 font-semibold">
                    <Sparkles className="h-3 w-3" />
                    NEW
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>

        {/* Toggle Button */}
        {newsData.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 text-sm text-base-content/50 hover:text-primary transition-colors flex items-center gap-1"
          >
            {showAll ? (
              <>
                Show less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Show more <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        )}
      </div>
    </section>
  );
}
