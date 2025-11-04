import { GraduationCap, Calendar } from "lucide-react";
import { education } from "@/data/education";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Education & <span className="text-purple-500">Training</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* 아이콘 */}
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center border border-purple-500/20 mb-4">
                <GraduationCap className="w-6 h-6 text-purple-400" />
              </div>

              {/* 제목 */}
              <h3 className="text-xl font-bold text-white mb-2">
                {edu.institution}
              </h3>
              <p className="text-purple-400 font-semibold mb-2">{edu.degree}</p>
              {edu.field && (
                <p className="text-sm text-gray-400 mb-2">{edu.field}</p>
              )}

              {/* 기간 */}
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span>{edu.period}</span>
              </div>

              {/* 설명 */}
              {edu.description && (
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  {edu.description}
                </p>
              )}

              {/* 성과/학습 내용 */}
              {edu.achievements && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">
                    주요 학습 내용
                  </h4>
                  <ul className="space-y-1.5">
                    {edu.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-300 flex items-start"
                      >
                        <span className="text-purple-400 mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
