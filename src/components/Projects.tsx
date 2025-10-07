import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "React와 Node.js를 사용한 풀스택 온라인 쇼핑몰 구현",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    },
    {
      title: "Task Management App",
      description: "드래그 앤 드롭을 지원하는 칸반 보드 스타일의 태스크 관리 앱",
      tech: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
    },
    {
      title: "AI Chat Bot",
      description: "OpenAI API를 활용한 지능형 챗봇 서비스",
      tech: ["Python", "FastAPI", "React", "OpenAI"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
    }
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">프로젝트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <figure>
                <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="badge badge-primary badge-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="card-actions justify-end mt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}