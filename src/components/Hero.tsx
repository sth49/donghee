import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <div className="hero min-h-[80vh] bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="avatar">
          <div className="w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=donghee" alt="Profile" />
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">안녕하세요! 👋</h1>
          <h2 className="text-3xl font-semibold mt-2">홍동희입니다</h2>
          <p className="py-6 text-lg">
            컴퓨터공학을 전공하는 학생 개발자입니다.<br />
            웹 개발과 소프트웨어 엔지니어링에 관심이 많습니다.
          </p>
          <div className="flex gap-4 mb-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:donghee@example.com" className="btn btn-circle btn-ghost">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <div className="flex gap-4">
            <button className="btn btn-primary">
              <FileText className="h-5 w-5" />
              이력서 다운로드
            </button>
            <button className="btn btn-outline">프로젝트 보기</button>
          </div>
        </div>
      </div>
    </div>
  );
}