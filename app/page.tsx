import Sidebar from "@/components/Sidebar";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen lg:h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <main className="flex-1 lg:overflow-hidden">
        <div className="lg:h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:h-full">
            {/* Left Sidebar - Mobile: normal flow, Desktop: fixed with scroll */}
            <div className="lg:w-[350px] lg:flex-shrink-0 lg:h-full lg:overflow-y-auto scrollbar-smooth">
              <Sidebar />
            </div>

            {/* Main Content - Mobile: normal flow, Desktop: scrollable */}
            <div className="flex-1 lg:h-full lg:overflow-y-auto scrollbar-smooth">
              <Experience />
              <Projects />
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-4 text-center text-xs text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
        <p>© 2024 김영성. All rights reserved.</p>
      </footer>

      <ThemeToggle />
    </div>
  );
}
