import { GraduationCap, Star } from "lucide-react";
import { profileData } from "../data/profileData";

export default function Education() {
  return (
    <section className="py-8 lg:py-12 bg-base-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
        </div>

        {/* Education List */}
        <ul className="space-y-6">
          {profileData.education.map((edu, index) => {
            const showDivider = index < profileData.education.length - 1;
            return (
              <>
                <li key={index}>
                  {/* Degree */}
                  <p className="font-semibold text-base-content text-lg">
                    {edu.degree}
                    {edu.gpa && (
                      <span className="ml-2 text-sm font-normal text-primary">
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </p>

                  {/* School */}
                  <p className="text-base-content/70">{edu.school}</p>

                  {/* Duration & Description */}
                  <p className="text-sm text-base-content/50 mt-1">
                    <span className="text-primary font-medium">
                      {edu.duration}
                    </span>
                    {edu.description && (
                      <span>
                        {" · "}
                        {edu.description.includes("Summa Cum Laude") ? (
                          <>
                            {edu.description.split("Summa Cum Laude")[0]}
                            <Star className="inline-block h-3 w-3 fill-yellow-400 text-yellow-400 mx-0.5 mb-0.5" />
                            <span className="font-semibold text-yellow-600">
                              Summa Cum Laude
                            </span>
                            {edu.description.split("Summa Cum Laude")[1]}
                          </>
                        ) : (
                          edu.description
                        )}
                      </span>
                    )}
                  </p>
                </li>
                {showDivider && <hr className="my-6 border-base-content/10" />}{" "}
              </>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
