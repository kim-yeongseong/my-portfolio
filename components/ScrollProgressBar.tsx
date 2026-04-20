"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollProgressBar — 페이지 상단 고정 스크롤 진행바
 * 모바일에서도 현재 페이지 위치를 직관적으로 표시
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 origin-left z-50"
      style={{ scaleX }}
    />
  );
}
