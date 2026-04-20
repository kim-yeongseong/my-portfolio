"use client";

import { Github, Mail, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";

/**
 * Hero — 첫 화면 섹션 (컴팩트 버전)
 * 이름, 태그라인, 태그, CTA 버튼만 간결히 노출
 * 구체 프로젝트 설명은 아래 Featured/Experience 섹션에 맡김
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
    <section
      id="hero"
      className="relative mb-6 sm:mb-8 overflow-hidden rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-blue-950/20 dark:to-purple-950/20"
    >
      {/* 은은한 배경 장식 */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-300/10 dark:bg-blue-500/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="relative p-5 sm:p-6">
        {/* 이름 */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-1.5 tracking-tight"
        >
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            김영성
          </span>
          <span className="text-gray-900 dark:text-white">입니다.</span>
        </motion.h1>

        {/* 태그라인 */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-bold mb-3"
        >
          변화에 두려워하지 않는, 궁금증 많은 풀스택 개발자
        </motion.p>

        {/* 태그 칩 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap gap-1.5 mb-4"
        >
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`px-2.5 py-0.5 text-xs font-bold rounded-full border ${colorClasses[tag.color]}`}
            >
              #{tag.label}
            </span>
          ))}
        </motion.div>

        {/* 마인드셋 한 줄 */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 max-w-2xl"
        >
          작은 질문과 이슈 속에서도 이유와 원인을 끝까지 따라가며 해결합니다.
          AI를 <span className="font-semibold text-purple-700 dark:text-purple-400">&ldquo;함께 리뷰하고 토론하는 협업 파트너&rdquo;</span>로 활용하며,
          기술 역량 이후에는 협업과 의사소통이 더 중요해지는 시대를 살고 있다고 믿습니다.
        </motion.p>

        {/* CTA 버튼 그룹 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-wrap gap-2"
        >
          <a
            href="https://mypick-ai.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xs font-bold rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>마이픽 AI</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 px-3.5 py-2 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white text-xs font-bold rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-1.5 px-3.5 py-2 border-2 border-gray-900 dark:border-gray-300 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 text-xs font-bold rounded-lg transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
