import { Calendar, MapPin, Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Tech Company",
      location: "Seoul, Korea",
      duration: "2024.06 - 2024.08",
      description: [
        "React와 TypeScript를 사용한 웹 애플리케이션 개발",
        "RESTful API 연동 및 상태 관리 구현",
        "반응형 UI/UX 디자인 구현"
      ]
    },
    {
      title: "Web Developer",
      company: "Startup Inc.",
      location: "Remote",
      duration: "2023.09 - 2024.02",
      description: [
        "Vue.js를 활용한 SPA 개발",
        "Node.js 기반 백엔드 API 개발",
        "AWS 서비스를 활용한 배포 및 관리"
      ]
    }
  ];

  const education = [
    {
      degree: "컴퓨터공학 학사",
      school: "한국대학교",
      duration: "2021.03 - 2025.02 (예정)",
      gpa: "4.2 / 4.5"
    }
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">경력 & 학력</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              경력
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="card bg-base-100 shadow">
                  <div className="card-body">
                    <h4 className="card-title text-lg">{exp.title}</h4>
                    <p className="font-medium">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-base-content/70">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-sm">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">학력</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="card bg-base-100 shadow">
                  <div className="card-body">
                    <h4 className="card-title text-lg">{edu.degree}</h4>
                    <p className="font-medium">{edu.school}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-base-content/70">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.duration}
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="badge badge-success">GPA: {edu.gpa}</span>
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