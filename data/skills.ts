import { SkillCategory } from "@/types";

// 핵심 스킬만 표시 (더보기 없이 한눈에 보이게)
export const primarySkills: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA",
      "Go",
      "Node.js",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "Vue 3",
      "TypeScript",
      "React",
      "JavaScript",
    ],
  },
  {
    category: "Database",
    skills: [
      "MySQL",
      "MSSQL",
      "Redis",
    ],
  },
  {
    category: "DevOps",
    skills: [
      "Docker",
      "Git",
      "Jenkins",
      "CI/CD",
    ],
  },
];

// 기타 스킬 (사용하지 않음 - 더보기 제거)
export const secondarySkills: SkillCategory[] = [];

// 하위 호환성을 위해 유지
export const skillCategories: SkillCategory[] = primarySkills;
