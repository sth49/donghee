export default function Skills() {
  const skills = {
    "Languages": ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    "Frontend": ["React", "Next.js", "Vue.js", "HTML/CSS", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "Django", "Spring Boot", "PostgreSQL"],
    "Tools": ["Git", "Docker", "AWS", "VS Code", "Figma"]
  };

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">기술 스택</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {items.map((skill) => (
                    <span key={skill} className="badge badge-outline">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}