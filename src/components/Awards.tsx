import { Medal, Award } from "lucide-react";
import { profileData } from "../data/profileData";

export default function Awards() {
  return (
    <section className="py-8 lg:py-12 bg-base-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Awards & Honors</h2>
          </div>
          <p className="text-base-content/60 text-lg">
            Scholarships and recognition for academic excellence
          </p>
        </div>

        {/* Awards List */}
        <div className="space-y-3">
          {profileData.awards.map((award, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 bg-base-200/30 hover:bg-base-200/50 rounded-lg border border-base-content/5 transition-all duration-200"
            >
              <div className="flex items-center">
                {award.type === "scholarship" ? (
                  <Medal className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                ) : (
                  <Award className="h-5 w-5 text-primary flex-shrink-0" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="font-semibold text-base-content">
                      {award.title}
                    </span>
                    <span className="text-base-content/50 mx-2">·</span>
                    <span className="text-base-content/70">{award.organization}</span>
                  </div>
                  <span className="badge badge-outline badge-sm whitespace-nowrap flex-shrink-0">
                    {award.duration}
                  </span>
                </div>
                {award.description && (
                  <p className="text-sm text-base-content/50 mt-1">
                    {award.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
