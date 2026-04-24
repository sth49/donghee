import { Mail, FileText, BookOpen, Hand, Award, Medal, Briefcase, GraduationCap, Sparkles, ChevronDown, ChevronUp, Presentation } from "lucide-react";
import { profileData } from "../data/profileData";
import { newsData, type NewsType } from "../data/newsData";
import { useState } from "react";

export default function About() {
  const [showAllNews, setShowAllNews] = useState(false);
  const displayedNews = showAllNews ? newsData : newsData.slice(0, 3);

  const getNewsIcon = (type: NewsType) => {
    const baseClass = "h-4 w-4 text-primary";
    switch (type) {
      case 'award':
        return <Award className={baseClass} />;
      case 'paper':
        return <BookOpen className={baseClass} />;
      case 'presentation':
        return <Presentation className={baseClass} />;
      case 'conference':
        return <Presentation className={baseClass} />;
      case 'scholarship':
        return <Medal className={baseClass} />;
      case 'position':
        return <Briefcase className={baseClass} />;
      case 'graduation':
        return <GraduationCap className={baseClass} />;
      default:
        return null;
    }
  };

  const renderNewsContent = (content: string) => {
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-base-content">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ">
          {/* Mobile Only Profile Image */}
          <div className="relative group lg:hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative avatar">
              <div className="w-48 rounded-full">
                <img src={profileData.profileImage} alt={profileData.name} />
              </div>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <h1 className="text-4xl lg:text-5xl font-bold text-base-content">
                Hi, I'm {profileData.name}
              </h1>
              <Hand className="h-8 w-8 text-primary animate-wave" />
            </div>
            {/* Contact Icons */}

            <div className="flex flex-wrap gap-5">
              <a
                href={`mailto:${profileData.email}`}
                className="btn btn-ghost hover:bg-primary/10 hover:text-primary p-1"
                title="Email"
              >
                <Mail className="h-5 w-5" />
                <span className="hidden sm:inline">Email</span>
              </a>
              <a
                href={profileData.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost gap-2 hover:bg-primary/10 hover:text-primary p-1"
                title="Download CV"
              >
                <FileText className="h-5 w-5" />
                <span className="hidden sm:inline">CV</span>
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost gap-2 hover:bg-primary/10 hover:text-primary p-1"
                title="GitHub"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost gap-2 hover:bg-primary/10 hover:text-primary p-1"
                title="LinkedIn"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href={profileData.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost gap-2 hover:bg-primary/10 hover:text-primary p-1"
                title="Google Scholar"
              >
                <BookOpen className="h-5 w-5" />
                <span className="hidden sm:inline">Scholar</span>
              </a>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              {profileData.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-base-content/80 mt-3 first:mt-0"
                >
                  {paragraph.text}
                  {paragraph.highlights.map((segment, segIndex) => {
                    const className =
                      segment.style === "base"
                        ? "font-semibold text-base-content"
                        : segment.style === "primary"
                        ? "font-semibold text-primary"
                        : segment.style === "secondary"
                        ? "font-semibold text-primary"
                        : "";

                    if (segment.link) {
                      return (
                        <a
                          key={segIndex}
                          href={segment.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${className} hover:underline transition-all`}
                        >
                          {segment.text}
                        </a>
                      );
                    }

                    return className ? (
                      <span key={segIndex} className={className}>
                        {segment.text}
                      </span>
                    ) : (
                      <span key={segIndex}>{segment.text}</span>
                    );
                  })}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Contact and Additional Info */}
        <div>
          {/* Research Interests */}
          <div className="mb-12 mt-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              Research Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {profileData.researchInterests.map((interest, index) => (
                <div
                  key={index}
                  className="group relative px-3 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
                >
                  <span className="relative z-10 text-sm font-medium">{interest}</span>
                </div>
              ))}
            </div>
          </div>

          {/* News */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              News
            </h3>
            <ul className="space-y-3">
              {displayedNews.map((item, index) => {
                const currentYear = item.date.substring(0, 4);
                const prevYear = index > 0 ? displayedNews[index - 1].date.substring(0, 4) : currentYear;
                const showDivider = index > 0 && currentYear !== prevYear;

                return (
                  <li key={index}>
                    {showDivider && (
                      <div className="border-b border-base-content/10 mb-3"></div>
                    )}
                    <div className="flex items-baseline gap-3">
                      <span className="text-primary font-semibold text-sm min-w-[4.5rem]">
                        {item.date}
                      </span>
                      <span className="relative top-[3px]">
                        {getNewsIcon(item.type)}
                      </span>
                      <span className="text-base-content/80 leading-relaxed">
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-primary/30 hover:decoration-primary hover:text-primary transition-colors"
                          >
                            {renderNewsContent(item.content)}
                          </a>
                        ) : (
                          renderNewsContent(item.content)
                        )}
                        {index === 0 && (
                          <span className="ml-2 inline-flex items-center gap-1 text-xs text-amber-500 font-semibold">
                            <Sparkles className="h-3 w-3" />
                            NEW
                          </span>
                        )}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
            {newsData.length > 3 && (
              <button
                onClick={() => setShowAllNews(!showAllNews)}
                className="mt-4 btn btn-sm btn-primary gap-1"
              >
                {showAllNews ? (
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

        </div>
      </div>
    </section>
  );
}
