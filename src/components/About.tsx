import {
  Mail,
  FileText,
  GraduationCap,
  BookOpen,
  Hand,
} from "lucide-react";
import { profileData } from "../data/profileData";

export default function About() {
  return (
    <section className="min-h-screen py-12 lg:py-20">
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
                <p key={index} className="text-base leading-relaxed text-base-content/80 mt-3 first:mt-0">
                  {paragraph.text}
                  {paragraph.highlights.map((segment, segIndex) => {
                    const className = segment.style === "base"
                      ? "font-semibold text-base-content"
                      : segment.style === "primary"
                      ? "font-semibold text-primary"
                      : segment.style === "secondary"
                      ? "font-semibold text-secondary"
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
          <div className="mb-12 mt-12">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              Research Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {profileData.researchInterests.map((interest, index) => (
                <div
                  key={index}
                  className="group relative px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                >
                  <span className="relative z-10 font-medium">{interest}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {profileData.education.map((edu, index) => (
                <div
                  key={index}
                  className="group relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-secondary"
                >
                  <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full -translate-x-[5px] ring-4 ring-base-100"></div>

                  <div className="card bg-base-200/30 hover:bg-base-200/50 transition-all duration-300 hover:shadow-xl border border-base-content/5">
                    <div className="card-body p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-primary mb-1">
                            {edu.degree}
                          </h4>
                          <p className="text-lg font-medium text-base-content/80">
                            {edu.school}
                          </p>
                          {edu.description && (
                            <p className="text-sm text-base-content/60 mt-2">
                              {edu.description}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col items-start lg:items-end gap-2">
                          <span className="badge badge-outline">
                            {edu.duration}
                          </span>
                          {edu.gpa && (
                            <span className="badge badge-success">
                              GPA: {edu.gpa}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
