import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedProject from "@/components/FeaturedProject";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Learning from "@/components/Learning";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen lg:h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* 스크롤 진행바 (상단 고정) */}
      <ScrollProgressBar />

      <main className="flex-1 lg:overflow-hidden">
        <div className="lg:h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:h-full">
            {/* Left Sidebar - Mobile: normal flow, Desktop: fixed with scroll */}
            <div className="lg:w-[350px] lg:flex-shrink-0 lg:h-full lg:overflow-y-auto scrollbar-smooth">
              <Sidebar />
            </div>

            {/* Main Content - Mobile: normal flow, Desktop: scrollable */}
            <div className="flex-1 lg:h-full lg:overflow-y-auto scrollbar-smooth">
              {/* 1. Hero — 첫 화면 임팩트 */}
              <Hero />

              {/* 2. Stats — 통계 대시보드 (카운트업 애니메이션) */}
              <Stats />

              {/* 3. Featured: 개인 사이드 프로젝트 (마이픽 AI) */}
              <FeaturedProject />

              {/* 4. Experience: 회사 경력 */}
              <Experience />

              {/* 5. Projects at Work: 회사에서 수행한 프로젝트들 */}
              <Projects />

              {/* 6. Learning & Growth: 학점은행제, 정보처리기사, AI 협업 */}
              <Learning />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
        <p>© 2026 김영성. All rights reserved.</p>
      </footer>

      <ThemeToggle />
    </div>
  );
}
