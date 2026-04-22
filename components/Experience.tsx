"use client";

import { experiences } from "@/data/experience";
import { Briefcase, ChevronDown, ChevronUp, Ship, Anchor, Package } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [expandedTechIds, setExpandedTechIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  const toggleTechExpand = (id: string) => {
    const newExpanded = new Set(expandedTechIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedTechIds(newExpanded);
  };

  return (
    <section id="experience" className="mb-6 sm:mb-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-200 dark:border-blue-700 flex items-center gap-2"
      >
        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
        Experience
      </motion.h2>

      {/* 물류·해운 도메인 타임라인 카드 — 7년 연속 경력 어필 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-5 sm:mb-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 via-teal-50/40 to-white dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-gray-800 p-4 sm:p-5 overflow-hidden"
      >
        <div className="flex items-center gap-2 mb-3">
          <Ship className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" />
          <h3 className="text-sm sm:text-base font-black text-emerald-800 dark:text-emerald-300">
            물류·해운 도메인 7년 연속
          </h3>
          <span className="ml-auto text-[10px] sm:text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded-full whitespace-nowrap">
            도메인 전문성
          </span>
        </div>

        {/* 3개 회사 흐름 — 모바일은 세로, 데스크톱은 가로 */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-1.5 mb-3">
          {/* MPLS */}
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-2.5 border border-emerald-100 dark:border-emerald-900/50 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <Anchor className="w-3 h-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <p className="text-xs font-bold text-gray-900 dark:text-white truncate">(주)엠피엘에스</p>
            </div>
            <p className="text-[10px] text-gray-600 dark:text-gray-400 mb-0.5 truncate">해상물류 · eCargo WEB Booking</p>
            <p className="text-[10px] font-black text-emerald-700 dark:text-emerald-400">
              2019.05 – 2023.06 <span className="text-gray-500">· 4년 2개월</span>
            </p>
          </div>

          {/* 화살표 (데스크톱만) */}
          <div className="hidden sm:flex items-center justify-center text-emerald-400 dark:text-emerald-600 text-base flex-shrink-0 px-0.5">
            →
          </div>

          {/* 아로아랩스 */}
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-2.5 border border-emerald-100 dark:border-emerald-900/50 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <Anchor className="w-3 h-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <p className="text-xs font-bold text-gray-900 dark:text-white truncate">아로아랩스</p>
            </div>
            <p className="text-[10px] text-gray-600 dark:text-gray-400 mb-0.5 truncate">해상물류 · 클린 아키텍처</p>
            <p className="text-[10px] font-black text-emerald-700 dark:text-emerald-400">
              2023.07 – 2024.07 <span className="text-gray-500">· 1년 1개월</span>
            </p>
          </div>

          <div className="hidden sm:flex items-center justify-center text-emerald-400 dark:text-emerald-600 text-base flex-shrink-0 px-0.5">
            →
          </div>

          {/* 국제종합물류 — 현재 */}
          <div className="flex-1 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-emerald-950/60 dark:to-teal-950/60 rounded-lg p-2.5 border-2 border-green-400 dark:border-green-600 shadow-sm min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <Package className="w-3 h-3 text-green-600 dark:text-green-400 flex-shrink-0" />
              <p className="text-xs font-bold text-gray-900 dark:text-white truncate">국제종합물류</p>
              <span className="text-[9px] font-black bg-green-500 text-white px-1 py-0.5 rounded-sm animate-pulse flex-shrink-0">
                현재
              </span>
            </div>
            <p className="text-[10px] text-gray-600 dark:text-gray-400 mb-0.5 truncate">포워딩 · B2B SaaS (ILIC)</p>
            <p className="text-[10px] font-black text-green-700 dark:text-green-400">
              2024.11 – 진행 중 <span className="text-gray-500">· 1년 6개월+</span>
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
          <span className="font-bold text-emerald-800 dark:text-emerald-300">해상물류 5.3년 + 포워딩 1.5년</span> — 복잡한 물류 비즈니스 로직을
          코드로 풀어내는 도메인 깊이를 쌓아왔습니다. 특정 산업군을 깊게 아는 것은
          단순 개발 역량을 넘어선 <span className="font-semibold">실무 문제 해결력</span>으로 이어집니다.
        </p>
      </motion.div>

      <div className="relative">
        {/* 타임라인 세로 라인 */}
        <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-400 via-blue-300 to-gray-300 dark:from-blue-500 dark:via-blue-600 dark:to-gray-600" />

        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIds.has(exp.id);
            const isTechExpanded = expandedTechIds.has(exp.id);
            const visibleResponsibilities = isExpanded
              ? exp.responsibilities
              : exp.responsibilities.slice(0, 3);
            const hasMore = exp.responsibilities.length > 3;
            const visibleTechStack = isTechExpanded
              ? exp.techStack
              : exp.techStack.slice(0, 8);
            const hasMoreTech = exp.techStack.length > 8;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 sm:pl-10"
              >
                {/* 타임라인 도트 */}
                <div className={`absolute left-1.5 sm:left-2.5 top-4 w-3 h-3 rounded-full border-2 ${
                  exp.current
                    ? "bg-green-500 border-green-300 dark:border-green-700 shadow-lg shadow-green-500/50 animate-pulse"
                    : "bg-blue-500 border-blue-200 dark:border-blue-800"
                }`} />

                <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-5 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                    {exp.company}
                  </h3>
                  <p className="text-sm sm:text-base text-blue-700 dark:text-blue-400 font-semibold">
                    {exp.position}
                  </p>
                </div>
                <div className="sm:text-right">
                  <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-bold">
                    {exp.period}
                  </p>
                  {exp.current && (
                    <span className="inline-block mt-1 px-2.5 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-xs font-black rounded-full">
                      재직중
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-900 dark:text-gray-100 mb-3 leading-relaxed font-semibold">
                {exp.description}
              </p>

              <div className="mb-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                <ul className="space-y-1.5 text-gray-900 dark:text-gray-100">
                  {visibleResponsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm leading-relaxed flex items-start font-medium">
                      <span className="mr-2 text-blue-600 dark:text-blue-400 font-bold">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {hasMore && (
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        <span>접기</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        <span>외 {exp.responsibilities.length - 3}개 업무 더보기</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {visibleTechStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-md shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
                {hasMoreTech && (
                  <button
                    onClick={() => toggleTechExpand(exp.id)}
                    className="px-2.5 py-1 text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-xs font-semibold transition-colors"
                  >
                    {isTechExpanded ? "접기" : `+${exp.techStack.length - 8} 더보기`}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
        </div>
      </div>
    </section>
  );
}
