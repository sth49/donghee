import { NotebookPen } from "lucide-react";
import { profileData } from "../data/profileData";

export default function Teaching() {
  const { assistant } = profileData.teaching;

  return (
    <section className="py-8 lg:py-12 bg-base-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <NotebookPen className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Teaching</h2>
          </div>
        </div>

        {/* Teaching Assistant */}
        {assistant.length > 0 && (
          <div>
            <ul className="space-y-4">
              {assistant.map((item, index) => (
                <li key={index}>
                  <p className="font-semibold text-base-content">
                    {item.course}
                    <span className="font-normal text-base-content/60 ml-2">
                      {item.school}
                    </span>
                  </p>
                  <p className="text-sm text-base-content/50 mt-0.5">
                    <span className="text-primary font-medium">{item.terms}</span>
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
