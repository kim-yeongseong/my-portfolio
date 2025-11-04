import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Work <span className="text-blue-500">Experience</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          총 <span className="text-blue-400 font-semibold">6년 2개월</span>의 개발 경력
        </p>

        <div className="relative">
          {/* 타임라인 선 */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {/* 경력 카드들 */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* 타임라인 점 */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 z-10 transform -translate-x-1/2"></div>

                {/* 카드 */}
                <div
                  className={`ml-16 md:ml-0 w-full md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                    {/* 헤더 */}
                    <div className="mb-4">
                      {exp.current && (
                        <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/20 mb-2">
                          재직 중
                        </span>
                      )}
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.company}
                      </h3>
                      <p className="text-lg text-blue-400 mb-2">{exp.position}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* 설명 */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* 주요 업무 */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">
                        주요 업무
                      </h4>
                      <ul className="space-y-1.5">
                        {exp.responsibilities.slice(0, 5).map((resp, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-300 flex items-start"
                          >
                            <span className="text-blue-400 mr-2">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                        {exp.responsibilities.length > 5 && (
                          <li className="text-sm text-gray-400 italic">
                            외 {exp.responsibilities.length - 5}개 업무
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* 기술 스택 */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">
                        사용 기술
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-900/50 text-blue-400 rounded-full text-xs border border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
