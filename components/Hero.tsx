"use client";

import { Github, Mail, ExternalLink, ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";

/**
 * Hero — 첫 화면 임팩트 섹션
 * 이름, 태그라인, 태그, CTA 버튼, 스크롤 힌트를 포함
 */
export default function Hero() {
  const tags = [
    { label: "7년차", color: "blue" },
    { label: "풀스택", color: "indigo" },
    { label: "AI 협업", color: "purple" },
    { label: "물류·해운", color: "emerald" },
  ];

  const colorClasses: Record<string, string> = {
    blue: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700",
    indigo: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700",
    purple: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700",
    emerald: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700",
  };

  return (
    <section id="hero" className="relative mb-8 sm:mb-10 overflow-hidden rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-blue-950/20 dark:to-purple-950/20">
      {/* 배경 장식 */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300/10 dark:bg-blue-500/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300/10 dark:bg-purple-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="relative p-6 sm:p-8 lg:p-10">
        {/* 인사 */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium mb-2"
        >
          👋 안녕하세요, 저는
        </motion.p>

        {/* 이름 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-3 tracking-tight"
        >
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            김영성
          </span>
          <span className="text-gray-900 dark:text-white">입니다.</span>
        </motion.h1>

        {/* 태그라인 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 font-bold mb-4 leading-tight"
        >
          변화에 두려워하지 않는,<br className="sm:hidden" />
          <span className="sm:ml-0"> 궁금증 많은 풀스택 개발자</span>
        </motion.p>

        {/* 태그 칩 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-5"
        >
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`px-3 py-1 text-xs sm:text-sm font-bold rounded-full border ${colorClasses[tag.color]}`}
            >
              #{tag.label}
            </span>
          ))}
        </motion.div>

        {/* 한 줄 소개 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-2xl"
        >
          B2B SaaS 플랫폼 신규 구축 1인 풀스택 담당으로 AI 협업 워크플로우를
          설계·정착시키고 있으며, 개인 프로젝트 <strong className="text-purple-700 dark:text-purple-400">마이픽 AI</strong>에서는
          Claude Scheduled Task로 AI 에이전트를 오케스트레이션해 실사용자에게
          서비스 중입니다.
        </motion.p>

        {/* CTA 버튼 그룹 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-2 sm:gap-3"
        >
          <a
            href="https://mypick-ai.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm font-bold rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>마이픽 AI 체험</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white text-sm font-bold rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>GitHub</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 border-2 border-gray-900 dark:border-gray-300 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-bold rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Contact</span>
          </a>
        </motion.div>

        {/* 스크롤 힌트 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"
        >
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          <span>아래로 스크롤하여 자세히 보기</span>
        </motion.div>
      </div>
    </section>
  );
}
