import { Github, Mail, Linkedin, ArrowDown, FileText, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* 배경 그라데이션 효과 - 더 강렬하게 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* 인사말 - 더 눈에 띄게 */}
        <div className="mb-8 fade-in">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 rounded-full text-sm border border-blue-500/30 backdrop-blur-sm animate-float">
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">안녕하세요!</span>
          </span>
        </div>

        {/* 이름 및 직무 - 더 큰 임팩트 */}
        <div className="mb-10 slide-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient drop-shadow-lg">
              {profile.name}
            </span>
          </h1>
          <div className="relative inline-block">
            <p className="text-3xl md:text-4xl text-white font-bold mb-4 tracking-tight">
              {profile.role}
            </p>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mt-6 font-medium">
            <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
              6년 2개월
            </span>
            <span className="mx-3 text-gray-500">•</span>
            <span className="text-gray-400">풀스택 개발자</span>
          </p>
        </div>

        {/* 자기소개 - 더 읽기 쉽게 */}
        <div className="mb-14 max-w-3xl mx-auto slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-5 font-light">
            {profile.bio}
          </p>
          <div className="glass rounded-2xl p-6 backdrop-blur-lg">
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              <span className="text-blue-400 font-semibold">Spring Boot</span>와{' '}
              <span className="text-purple-400 font-semibold">Vue.js</span>를 활용한 물류 시스템 개발부터
              <br className="hidden md:block" />
              클린 아키텍처 설계, API 연동까지 폭넓은 경험을 보유하고 있습니다.
            </p>
          </div>
        </div>

        {/* CTA 버튼들 - 더 모던하게 */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#experience"
            className="group relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl transition-all duration-300 font-semibold shadow-2xl shadow-blue-500/30 hover:shadow-purple-500/40 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 shimmer"></div>
            <FileText className="w-5 h-5 relative z-10" />
            <span className="relative z-10">경력 보기</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 glass hover:bg-slate-700/50 border border-slate-600/50 hover:border-blue-500 rounded-xl transition-all duration-300 font-medium hover:scale-105"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>GitHub</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-2 px-8 py-4 glass hover:bg-slate-700/50 border border-slate-600/50 hover:border-purple-500 rounded-xl transition-all duration-300 font-medium hover:scale-105"
          >
            <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Email</span>
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 glass hover:bg-slate-700/50 border border-slate-600/50 hover:border-pink-500 rounded-xl transition-all duration-300 font-medium hover:scale-105"
            >
              <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>LinkedIn</span>
            </a>
          )}
        </div>

        {/* 스크롤 유도 - 더 매력적으로 */}
        <div className="animate-bounce fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 transition-all group">
            <span className="text-sm font-medium tracking-wide group-hover:tracking-wider transition-all">더 알아보기</span>
            <div className="p-2 rounded-full border-2 border-gray-600 group-hover:border-blue-500 transition-colors">
              <ArrowDown className="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
