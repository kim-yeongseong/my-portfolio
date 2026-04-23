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
      "마이픽 AI (MyPick AI) - 한국 주식 AI 분석 시스템. KOSPI + KOSDAQ 3,000개 종목을 AI가 매일 자동 분석해 전략별 추천 종목과 푸시 알림을 제공하는 PWA 기반 웹앱. 카카오 OAuth 기반 멀티유저 환경에서 현재 20~30명 규모로 베타 운영 중. 혼자 만든 사이드 프로젝트. 기획부터 배포·운영까지 직접 진행 중이며, Claude Code를 적극 활용해서 1인 개발의 속도를 끌어올렸습니다.",
    longDescription:
      "1. 데이터 수집 (GitHub Actions · 평일 15:30 KST) — Python 파이프라인 실행 → FinanceDataReader + Naver Finance API로 3,000개 종목의 OHLCV, 기술지표, 펀더멘탈 수집 → Supabase PostgreSQL에 일일 후보 종목 저장. 2. AI 심층 분석 (Claude Scheduled Task · 매일 07:35, 17:35 KST) — 자동화 에이전트가 Supabase에서 후보 데이터 조회 → 매크로 지표(FDR 해외지수, 환율) + 뉴스 수집 및 감성 분류 → 전략별(공격/균형/안정) + AI 프리픽 총 12종목 AI 선정 → 매수가, 손절가, 리스크 등급, 3줄 분석 자동 생성 → Supabase에 분석 결과 저장. 3. 실시간 알림 (Firebase FCM) — 분석 완료 즉시 구독 유저에게 푸시 알림 자동 발송, 사용자별 알림 설정(마스터/AI분석완료/종목함) 지원. 4. 사용자 접근 (Next.js 15 PWA · Vercel 자동 배포) — 카카오 OAuth 로그인 → Supabase RLS로 사용자별 격리 → 개인 종목함 자동 분석, PWA로 앱처럼 설치 가능. SKILL.md(약 1,000줄)에 분석 절차·검증 규칙·실패 처리·중복 제거 로직을 정리해 매번 일관된 형식으로 결과가 나오도록 구성했습니다. 100% 무료 인프라 구축 — Vercel(Free) + Supabase(Free) + Firebase(Spark) + GitHub Actions 무료 한도 + Claude Code 개인 구독만으로 실서비스 구축.",
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
