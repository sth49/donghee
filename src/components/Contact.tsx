import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">연락처</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-base-content/70">
              프로젝트 협업이나 문의사항이 있으시면 언제든지 연락 주세요!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="btn btn-circle btn-ghost btn-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <span>donghee@example.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="btn btn-circle btn-ghost btn-sm">
                  <Phone className="h-5 w-5" />
                </div>
                <span>+82 10-1234-5678</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="btn btn-circle btn-ghost btn-sm">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>Seoul, South Korea</span>
              </div>
            </div>
          </div>

          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title">메시지 보내기</h3>
              <form className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">이름</span>
                  </label>
                  <input type="text" placeholder="이름을 입력하세요" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">이메일</span>
                  </label>
                  <input type="email" placeholder="email@example.com" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">메시지</span>
                  </label>
                  <textarea className="textarea textarea-bordered h-24" placeholder="메시지를 입력하세요"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  <Send className="h-5 w-5" />
                  메시지 보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}