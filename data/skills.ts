import { SkillCategory } from "@/types";

// 핵심 스킬 — 실무에서 주력으로 사용 중인 스택
export const primarySkills: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      "Java 17",
      "Spring Boot 3.x",
      "Spring Security (JWT)",
      "JPA / QueryDSL",
      "Go",
      "Python",
      "Node.js",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "Vue 3 / TypeScript",
      "Next.js 15",
      "React",
      "Vuetify / Pinia",
      "Tailwind CSS",
      "PWA",
    ],
  },
  {
    category: "Database",
    skills: [
      "MySQL",
      "MSSQL",
      "PostgreSQL (Supabase)",
      "Redis",
    ],
  },
  {
    category: "DevOps & Infra",
    skills: [
      "Docker",
      "Jenkins",
      "GitHub Actions",
      "Vercel",
      "Git",
      "CI/CD",
    ],
  },
  {
    category: "AI 협업 도구",
    skills: [
      "Claude Code (주력)",
      "Cursor",
      "GitHub Copilot",
      "CLAUDE.md 컨텍스트 설계",
      "프롬프트 엔지니어링",
    ],
  },
];

// 기타 스킬 (사용하지 않음 - 더보기 제거)
export const secondarySkills: SkillCategory[] = [];

// 하위 호환성을 위해 유지
export const skillCategories: SkillCategory[] = primarySkills;
