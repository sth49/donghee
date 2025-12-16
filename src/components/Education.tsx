import { GraduationCap, Trophy } from "lucide-react";
import { profileData } from "../data/profileData";

export default function Education() {
  return (
    <section className="py-8 lg:py-12 bg-base-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <p className="text-base-content/60 text-lg">
            Academic background and qualifications
          </p>
        </div>

        {/* Education Timeline */}
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
                          {edu.description.includes("Summa Cum Laude") ? (
                            <>
                              {edu.description.split("Summa Cum Laude")[0]}
                              <Trophy className="h-3.5 w-3.5 text-yellow-500 inline-block relative -top-[1.5px]" />
                              <span className="font-semibold text-yellow-600">
                                {" "}
                                Summa Cum Laude
                              </span>
                              {edu.description.split("Summa Cum Laude")[1]}
                            </>
                          ) : (
                            edu.description
                          )}
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
    </section>
  );
}
