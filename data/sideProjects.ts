import { Project } from "@/types";

/**
 * 개인 사이드 프로젝트 — 회사 업무와 별개의 개인 프로젝트
 * Featured로 취급되는 대표 사이드 프로젝트를 first로 배치
 */
export const sideProjects: Project[] = [
  {
    id: "mypick-ai",
    title: "마이픽 AI (MyPick AI)",
    period: "2026.01 ~ 운영 중",
    description:
      "KOSPI/KOSDAQ 3,000개 종목을 Python 파이프라인으로 1차 스크리닝하고, Claude가 매일 12종목을 골라 전략별 추천과 푸시 알림을 보내는 PWA 웹앱. 혼자 만들어서 지인 20~30명에게 베타로 돌리고 있습니다.",
    longDescription:
      "GitHub Actions(Python + FinanceDataReader + Naver Finance API)로 3,000개 종목의 OHLCV·기술지표·펀더멘탈을 매일 수집해 Supabase에 저장합니다. Claude Scheduled Task가 매일 2회(07:35/17:35 KST) 실행되어, 저장된 데이터에 매크로 지표(FDR 해외지수·환율)와 뉴스 감성을 더해 3전략(공격/균형/안정) + 프리픽 = 하루 12종목을 골라 다시 Supabase에 저장하고, Firebase FCM으로 구독 유저에게 푸시를 보냅니다. 분석 절차·검증 규칙·실패 처리는 SKILL.md(약 1,000줄)에 정리해서 매번 일관된 형식으로 결과가 나오게 했습니다. 프론트는 Next.js 15 App Router + 카카오 OAuth + Supabase RLS로 사용자별 데이터 격리를 구현했고, PWA로 설치할 수 있게 했습니다. Vercel(Free) + Supabase(Free) + Firebase(Spark) + GitHub Actions 무료 한도 안에서 돌아가도록 구성했습니다.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "PWA",
      "Supabase",
      "PostgreSQL (RLS)",
      "Firebase FCM",
      "Python",
      "Claude Scheduled Task",
      "GitHub Actions",
      "Vercel",
      "Kakao OAuth",
    ],
    liveUrl: "https://mypick-ai.vercel.app",
    date: "2026-01",
  },
];
