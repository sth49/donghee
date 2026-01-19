import { Medal, Award, Trophy } from "lucide-react";
import { profileData } from "../data/profileData";

export default function Awards() {
  // Separate scholarships and awards
  const scholarships = profileData.awards.filter((a) => a.type === "scholarship");
  const awards = profileData.awards.filter((a) => a.type === "award");

  return (
    <section className="py-8 lg:py-12 bg-base-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Awards & Honors</h2>
          </div>
        </div>

        {/* Scholarships */}
        {scholarships.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-primary mb-4 border-b border-base-content/10 pb-2 flex items-center gap-2">
              <Medal className="h-5 w-5" />
              Scholarships
            </h3>
            <ul className="space-y-4">
              {scholarships.map((award, index) => (
                <li key={index}>
                  <p className="font-semibold text-base-content">
                    {award.title}
                    <span className="font-normal text-base-content/60 ml-2">
                      {award.organization}
                    </span>
                  </p>
                  <p className="text-sm text-base-content/50 mt-0.5">
                    <span className="text-primary font-medium">{award.duration}</span>
                    {award.description && <span> · {award.description}</span>}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Awards */}
        {awards.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-primary mb-4 border-b border-base-content/10 pb-2 flex items-center gap-2">
              <Award className="h-5 w-5" />
              Awards
            </h3>
            <ul className="space-y-4">
              {awards.map((award, index) => (
                <li key={index}>
                  <p className="font-semibold text-base-content">
                    {award.title}
                    <span className="font-normal text-base-content/60 ml-2">
                      {award.organization}
                    </span>
                  </p>
                  <p className="text-sm text-base-content/50 mt-0.5">
                    <span className="text-primary font-medium">{award.duration}</span>
                    {award.description && <span> · {award.description}</span>}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
