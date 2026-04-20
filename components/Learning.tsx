"use client";

import { studies } from "@/data/studies";
import { BookOpen, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Learning — 진행 중 학습 + 자기개발 이력
 * (학점은행제, 정보처리기사, AI 협업 등 진행 중 항목을 최상단 노출)
 */
export default function Learning() {
  // "진행 중" 카테고리를 최상단에 배치
  const inProgress = studies.filter((s) => s.category === "진행 중");
  const others = studies.filter((s) => s.category !== "진행 중");

  return (
    <section id="learning" className="mb-8 sm:mb-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-emerald-200 dark:border-emerald-700 flex items-center gap-2"
      >
        <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />
        Learning & Growth
      </motion.h2>

      {/* 진행 중 항목 — 강조 */}
      {inProgress.length > 0 && (
        <div className="mb-5">
          <div className="text-[11px] sm:text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            현재 진행 중
          </div>
          <div className="space-y-3">
            {inProgress.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                className="bg-gradient-to-r from-emerald-50 to-white dark:from-emerald-950/30 dark:to-gray-800 border-2 border-emerald-200 dark:border-emerald-800 rounded-xl p-4 sm:p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                    {study.title}
                  </h3>
                  <span className="text-[10px] sm:text-xs text-emerald-700 dark:text-emerald-400 font-semibold flex-shrink-0 bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded-full">
                    {study.date}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-[10px] sm:text-xs font-semibold rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* 과거 학습 이력 */}
      {others.length > 0 && (
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <BookOpen className="w-3 h-3" />
            Past Learning
          </div>
          <div className="space-y-2.5">
            {others.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1.5">
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                    {study.title}
                  </h4>
                  <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium flex-shrink-0">
                    {study.date}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {study.tags.slice(0, 6).map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
