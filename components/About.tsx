import TechStack from "./TechStack";
import { Code2, Lightbulb, Users, Target, Heart, Zap, MessageCircle, TrendingUp } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "풀스택 개발",
      description: "Spring Boot와 Vue.js를 활용한 엔드투엔드 개발 경험",
    },
    {
      icon: Lightbulb,
      title: "문제 해결",
      description: "복잡한 비즈니스 로직과 시스템 통합 문제 해결 능력",
    },
    {
      icon: Users,
      title: "협업 & 교육",
      description: "도재학교 교육 담당 및 신입 개발자 멘토링 경험",
    },
    {
      icon: Target,
      title: "아키텍처 설계",
      description: "클린 아키텍처 기반 확장 가능한 시스템 설계",
    },
  ];

  const personality = [
    {
      icon: Heart,
      title: "긍정적 마인드",
      description: "밝고 긍정적인 성격으로 팀 분위기를 이끌어갑니다",
    },
    {
      icon: Zap,
      title: "강한 책임감",
      description: "맡은 일에 대한 강한 책임감과 완수 의지",
    },
    {
      icon: MessageCircle,
      title: "뛰어난 소통",
      description: "사람들과 쉽게 어울리고 효과적으로 소통합니다",
    },
    {
      icon: TrendingUp,
      title: "끊임없는 성장",
      description: "궁금증이 많고 지는 것을 싫어하는 성장 지향적 자세",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          About <span className="text-blue-500">Me</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          변화에 두려워하지 않는 궁금증 많은 개발자
        </p>

        {/* 핵심 역량 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/20 mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* 개발자로서의 철학 */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-400">
                💭 개발자로서의 철학과 성장
              </h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">목표와 지향점</h4>
                  <p>
                    저는 <span className="text-blue-400 font-semibold">안전성, 호환성, 유지보수성, 확장성</span>을
                    갖춘 개발을 위해 끊임없이 고민하는 개발자입니다. "어떤 기술을 사용해야 할까?",
                    "기능적으로 더 개선할 수 있는 기술은 무엇일까?"라는 질문을 통해 발전하고 있습니다.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">경력과 경험</h4>
                  <p>
                    <span className="text-purple-400 font-semibold">6년 2개월</span>의 경력 동안
                    물류 시스템, 여객 예약 시스템, 의약품 관리 시스템 등 다양한 도메인에서
                    풀스택 개발을 경험했습니다. 특히 레거시 시스템을 현대적인 기술 스택으로
                    전환하는 프로젝트에서 <span className="text-green-400 font-semibold">기술 스택 선정부터
                    아키텍처 설계, 개발, 배포</span>까지 전 과정을 주도적으로 진행한 경험이 있습니다.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">연차별 성장 과정</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-green-400 font-semibold mb-1">• 1년차 시절</p>
                      <p className="text-sm text-gray-400">
                        스펀지처럼 빠르게 습득하는 개발자가 되고 싶었습니다.
                        원하는 기능을 구현하는 데 집중했습니다.
                      </p>
                    </div>
                    <div>
                      <p className="text-blue-400 font-semibold mb-1">• 3년차 시절</p>
                      <p className="text-sm text-gray-400">
                        시작과 끝을 이해하며 로직을 개발하는 것의 중요성을 깨달았습니다.
                        한 사이클을 이해하고 합리적으로 설명할 수 있는 개발자를 목표로 했습니다.
                      </p>
                    </div>
                    <div>
                      <p className="text-purple-400 font-semibold mb-1">• 5년차 현재</p>
                      <p className="text-sm text-gray-400">
                        보안, 사용성, 유지보수성 등을 고려하게 되었고,
                        최신 트렌드 기술의 장점을 궁금해하고 사용해보려 합니다.
                        개발이 협업과 사람 사이의 관계로 이루어진다는 것을 깊이 이해하게 되었습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h4 className="text-lg font-semibold text-pink-400 mb-2">AI 시대의 개발자 역량</h4>
                  <p>
                    요즘 AI(GPT, Copilot 등) 기술의 발전으로 기술의 격차를 메울 수 있는 방법이 많아졌습니다.
                    개발자로서 일정 수준의 기술적 역량을 갖춘 이후에는
                    <span className="text-pink-400 font-semibold"> 협업과 의사소통, 그리고 함께 고민할 수 있는 역량</span>이
                    더욱 중요해진다고 생각합니다.
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-4 border-l-4 border-yellow-500">
                  <p className="text-gray-300 italic">
                    "작은 질문과 이슈 속에서도 이유와 원인을 찾고 궁금해하는 개발자가 되기 위해 노력하고 있습니다.
                    같은 목표와 가치관을 공유하는 동료들과 함께 지속적으로 성장해 나가고 싶습니다."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 성격과 강점 */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Personality & <span className="text-green-500">Strengths</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personality.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-green-500 transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/20 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 max-w-3xl mx-auto bg-slate-800/30 rounded-lg p-6 border border-slate-700">
            <p className="text-gray-300 text-center leading-relaxed">
              <span className="text-green-400 font-semibold">장점:</span> 밝고 긍정적인 성격으로 팀과 잘 소통하며,
              책임감이 강해 맡은 일을 끝까지 완수합니다.
              <span className="text-yellow-400 font-semibold ml-4">도전:</span> 욕심이 많고 궁금증이 많아
              끊임없이 성장하려는 자세를 유지하지만, 때로는 성급할 수 있습니다.
            </p>
          </div>
        </div>

        {/* 기술 스택 */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">
            Tech <span className="text-purple-500">Stack</span>
          </h3>
          <TechStack />
        </div>
      </div>
    </section>
  );
}
