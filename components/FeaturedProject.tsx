"use client";

import { sideProjects } from "@/data/sideProjects";
import { ExternalLink, Sparkles, Activity, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Featured Side Project — 대표 개인 사이드 프로젝트(마이픽 AI)를 눈에 띄게 노출
 * 회사 Projects와 분리해서 "자기주도적 프로젝트"임을 시각적으로 강조
 */
export default function FeaturedProject() {
  const project = sideProjects[0];
  if (!project) return null;

  const stats = [
    { icon: Activity, label: "1차 스크리닝", value: "3,000 종목" },
    { icon: Zap, label: "AI 심층 분석", value: "12 종목/일" },
    { icon: Shield, label: "베타 운영", value: "20~30명" },
  ];

  return (
    <section id="featured-project" className="mb-8 sm:mb-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-purple-200 dark:border-purple-700 flex items-center gap-2"
      >
        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
        Featured — 개인 사이드 프로젝트
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative overflow-hidden rounded-2xl border-2 border-purple-200 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-purple-950/40 dark:via-gray-900 dark:to-blue-950/40 shadow-lg hover:shadow-xl transition-shadow"
      >
        {/* 배경 장식 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300/20 dark:bg-purple-700/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-300/20 dark:bg-blue-700/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="relative p-5 sm:p-7">
          {/* 헤더 */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs font-bold rounded-full mb-2">
                <Sparkles className="w-3 h-3" />
                SIDE PROJECT · 운영 중
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-semibold mt-1">
                {project.period}
              </p>
            </div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xs sm:text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex-shrink-0"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>

          {/* 핵심 설명 */}
          <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 leading-relaxed font-medium mb-5">
            {project.description}
          </p>

          {/* 주요 성과 통계 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-purple-200 dark:border-purple-800 rounded-xl p-3 sm:p-4"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400 mb-1.5" />
                  <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 font-semibold">
                    {stat.label}
                  </div>
                  <div className="text-sm sm:text-base font-black text-gray-900 dark:text-white mt-0.5">
                    {stat.value}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 상세 설명 */}
          {project.longDescription && (
            <details className="mb-5 group/details">
              <summary className="cursor-pointer text-xs sm:text-sm font-bold text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors list-none flex items-center gap-1">
                <span className="group-open/details:rotate-90 transition-transform inline-block">▸</span>
                자세히 보기
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.longDescription}
              </p>
            </details>
          )}

          {/* 기술 스택 */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 text-purple-800 dark:text-purple-200 text-xs font-semibold rounded-md shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
