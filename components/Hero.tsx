import { Github, Mail, Linkedin, ArrowDown, FileText } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      {/* 배경 그라데이션 효과 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* 인사말 */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20">
            👋 안녕하세요!
          </span>
        </div>

        {/* 이름 및 직무 */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              {profile.name}
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-semibold mb-4">
            {profile.role}
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-2">
            <span className="text-blue-400 font-semibold">6년 2개월</span> 경력의 풀스택 개발자
          </p>
        </div>

        {/* 자기소개 */}
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-4">
            {profile.bio}
          </p>
          <p className="text-base text-gray-500 leading-relaxed">
            Spring Boot와 Vue.js를 활용한 물류 시스템 개발부터<br className="hidden md:block" />
            클린 아키텍처 설계, API 연동까지 폭넓은 경험을 보유하고 있습니다.
          </p>
        </div>

        {/* CTA 버튼들 */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#experience"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all duration-300 font-semibold shadow-lg shadow-blue-500/25"
          >
            <FileText className="w-5 h-5" />
            <span>경력 보기</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 rounded-lg transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-purple-500 rounded-lg transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-pink-500 rounded-lg transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          )}
        </div>

        {/* 스크롤 유도 */}
        <div className="animate-bounce">
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <span className="text-sm">더 알아보기</span>
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
