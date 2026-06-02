import { FlaskConical, ArrowDown } from "lucide-react";
import { profileData } from "../data/profileData";

export default function Research() {
  const { researchExperience } = profileData;

  const goToPublication = (pubId: string) => {
    window.dispatchEvent(
      new CustomEvent("navigate-publication", { detail: pubId })
    );
  };

  return (
    <section className="py-8 lg:py-12 bg-base-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FlaskConical className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Research Experience</h2>
          </div>
        </div>

        <div className="space-y-8">
          {researchExperience.map((exp, index) => (
            <div key={index}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-bold text-base-content">
                  {exp.lab}
                  <span className="font-normal text-base-content/60 ml-2">
                    {exp.school}
                  </span>
                </h3>
                <span className="text-sm text-primary font-medium">
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm text-base-content/60 mt-0.5">
                {exp.role} · Adviser: {exp.adviser}
              </p>
              {exp.projects && exp.projects.length > 0 && (
                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                  <div className="flex items-center gap-1.5 text-base-content/60">
                    <div className="h-4 w-1 rounded-full bg-primary" />
                    <p className="whitespace-nowrap text-sm font-medium">
                      Related work
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.projects.map((project, i) => {
                      const linked = "pubId" in project && project.pubId;
                      const content = (
                        <>
                          <span>{project.name}</span>
                          {linked && (
                            <ArrowDown className="h-3 w-3 opacity-45 transition-all group-hover/work:translate-y-0.5 group-hover/work:opacity-100" />
                          )}
                        </>
                      );
                      const base =
                        "group/work inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-sm transition-colors";
                      return linked ? (
                        <button
                          key={i}
                          onClick={() => goToPublication(project.pubId as string)}
                          className={`${base} border-base-content/10 bg-base-content/[0.03] text-base-content/70 hover:border-primary/30 hover:bg-primary/[0.06] hover:text-primary`}
                        >
                          {content}
                        </button>
                      ) : (
                        <span
                          key={i}
                          className={`${base} border-base-content/10 bg-base-content/[0.03] text-base-content/60`}
                        >
                          {content}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
