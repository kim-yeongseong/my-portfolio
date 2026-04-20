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
      "KOSPI/KOSDAQ 3,000개 종목을 AI가 매일 자동 분석해 전략별 추천 종목과 푸시 알림을 제공하는 PWA 기반 웹앱. 기획·풀스택 개발·배포·운영 전 사이클 단독 수행. 20~30명 베타 운영 중.",
    longDescription:
      "Claude Scheduled Task로 AI 에이전트를 오케스트레이션해 하루 2회(07:35/17:35 KST) 자동 분석을 무인 운영하는 시스템입니다. GitHub Actions 파이프라인(Python + FinanceDataReader + Naver Finance API)으로 3,000개 종목의 OHLCV·기술지표·펀더멘탈을 수집하여 Supabase에 저장 → Claude 에이전트가 매크로 지표(FDR 해외지수·환율)와 뉴스 감성 분류를 거쳐 3전략(공격/균형/안정) + AI 프리픽 = 하루 12종목을 선정 → Firebase FCM으로 구독 유저에게 즉시 알림을 발송합니다. SKILL.md(AI 프롬프트) 1,000줄 규모 엔지니어링으로 뉴스 수집 3분할, 감성 분류, 데이터 신선도 검증, 매크로 템플릿 자동 생성, 실패 복구·중복 제거까지 프롬프트 레벨에서 처리합니다. Next.js 15 App Router + Supabase RLS로 카카오 OAuth 기반 멀티테넌트 아키텍처를 구현했고, PWA로 앱처럼 설치 가능합니다. Vercel(Free) + Supabase(Free) + Firebase(Spark) + GitHub Actions 무료 한도로 100% 무료 인프라 위에 실서비스를 운영 중입니다.",
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
