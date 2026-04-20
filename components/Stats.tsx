"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { Briefcase, FolderGit2, Layers, Bot } from "lucide-react";

/**
 * 숫자 카운트업 애니메이션 컴포넌트
 */
function CountUp({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.5, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, count, to]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <span>{prefix}</span>
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

/**
 * Stats — About 섹션 통계 대시보드
 * 스크롤 진입 시 숫자 카운트업 애니메이션
 */
export default function Stats() {
  const stats = [
    {
      icon: Briefcase,
      value: 7,
      suffix: "년",
      label: "개발 경력",
      color: "blue",
    },
    {
      icon: FolderGit2,
      value: 10,
      suffix: "+",
      label: "프로젝트",
      color: "indigo",
    },
    {
      icon: Layers,
      value: 22,
      suffix: "개",
      label: "업무 도메인 (현재)",
      color: "purple",
    },
    {
      icon: Bot,
      value: 6000,
      suffix: "건/일",
      label: "AI 자동 분석",
      color: "emerald",
    },
  ];

  const colorMap: Record<string, { bg: string; icon: string; value: string }> = {
    blue: {
      bg: "from-blue-50 to-white dark:from-blue-950/30 dark:to-gray-800",
      icon: "text-blue-600 dark:text-blue-400",
      value: "text-blue-900 dark:text-blue-100",
    },
    indigo: {
      bg: "from-indigo-50 to-white dark:from-indigo-950/30 dark:to-gray-800",
      icon: "text-indigo-600 dark:text-indigo-400",
      value: "text-indigo-900 dark:text-indigo-100",
    },
    purple: {
      bg: "from-purple-50 to-white dark:from-purple-950/30 dark:to-gray-800",
      icon: "text-purple-600 dark:text-purple-400",
      value: "text-purple-900 dark:text-purple-100",
    },
    emerald: {
      bg: "from-emerald-50 to-white dark:from-emerald-950/30 dark:to-gray-800",
      icon: "text-emerald-600 dark:text-emerald-400",
      value: "text-emerald-900 dark:text-emerald-100",
    },
  };

  return (
    <section id="stats" className="mb-8 sm:mb-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          const c = colorMap[stat.color];
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-gradient-to-br ${c.bg} border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-5 hover:shadow-lg transition-all hover:-translate-y-1`}
            >
              <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${c.icon} mb-2`} />
              <div className={`text-2xl sm:text-3xl font-black ${c.value} tracking-tight`}>
                <CountUp to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 font-semibold mt-1">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
