import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "integrated-logistics-system",
    title: "통합 물류 시스템 (To-Be)",
    description:
      "Spring Boot와 Vue 3 기반의 웹 통합 물류 시스템을 처음부터 설계하고 개발. 풀스택 개발자로서 기술 스택 선정, 아키텍처 설계, 프로젝트 환경 설정부터 개발까지 전 과정 담당.",
    longDescription:
      "기존 물류 시스템을 웹 기반 통합 시스템으로 전환하는 프로젝트입니다. Backend는 Spring Boot 3.x 기반 API 설계 및 비즈니스 로직 구현, Frontend는 Vue 3 + TypeScript 기반 UI/UX 개발을 담당했습니다. MySQL 및 MSSQL을 활용한 DB 설계 및 최적화, JWT/Spring Security를 활용한 보안 구현, Docker 기반 CI/CD 환경 구축을 진행했습니다.",
    tags: [
      "Spring Boot 3.x",
      "Vue 3",
      "TypeScript",
      "JPA",
      "QueryDSL",
      "MySQL",
      "Docker",
      "Redis",
    ],
    githubUrl: "https://github.com/dudtjd7820",
    date: "2024-11",
  },
  {
    id: "ecargo-panstar",
    title: "eCargoPanstar 해상물류 WEB BOOKING 시스템",
    description:
      "Java Spring과 MSSQL 기반의 새로운 해상물류 웹 부킹 솔루션 구축. 본사 솔루션 메인 담당자로서 신규 개발 및 운영을 주도했습니다.",
    longDescription:
      "해상 화물 웹 부킹 시스템의 신규 개발 프로젝트입니다. Spring MVC 프레임워크를 활용하여 안정적인 시스템을 구축했으며, 관세청 API(유니패스) 연동을 통한 BL 데이터 관리, 바로빌 API 연동 카드 승인 내역 처리, 알리고 API를 통한 카톡/SMS 발송 기능을 구현했습니다.",
    tags: ["Java", "Spring", "MSSQL", "MyBatis", "API Integration", "jQuery"],
    date: "2022-08",
  },
  {
    id: "panstar-cruise-renewal",
    title: "팬스타크루즈 여객 예약 사이트 리뉴얼",
    description:
      "Go와 Azure Database, Vue를 활용한 팬스타크루즈 여객 예약 사이트 백엔드 개발. 클린 아키텍처 구조 설계 및 EDI 시스템 구현을 담당했습니다.",
    longDescription:
      "Backend 전반에 걸친 개발 및 프로젝트 구조 설계를 담당했습니다. 클린 아키텍처 원칙에 따라 프로젝트를 설계하여 유지보수 및 확장성을 향상시켰으며, 해상 물류 관련 로직 개발, EDI(전자 데이터 교환) 시스템 구현, Stowage Planning 개발에 참여했습니다. Apache Tomcat 서버 관리 및 Key Vault 설정, CI/CD 파이프라인 구축을 진행했습니다.",
    tags: ["Go", "Azure Database", "Vue", "EDI", "Clean Architecture", "Apache Tomcat"],
    date: "2023-07",
  },
  {
    id: "pharmaceutical-wholesale",
    title: "동물의약품 도매상 관리 시스템",
    description:
      "Spring과 MySQL 기반의 의약품 유통 관리 시스템 개발. 바코드 발행 및 재고 관리, 창고 업무 추가 개발 및 유지보수를 담당했습니다.",
    longDescription:
      "동물의약품 유통 관리를 위한 전문 시스템입니다. 바코드/QR 스캐너를 활용한 재고 관리 시스템을 구축했으며, 모바일 연동을 통한 실시간 재고 확인 기능을 개발했습니다. 창고 관리자를 위한 효율적인 업무 프로세스를 설계하고 구현했습니다.",
    tags: ["Spring", "MySQL", "Java", "Barcode System", "Inventory Management"],
    date: "2022-01",
  },
  {
    id: "visibility-system",
    title: "해상, 항공 비저빌리티 시스템",
    description:
      "GAUS와 JavaScript, Java 환경에서 선박 및 항공 지도 웹 개발. 실시간 스케줄 정보 화면을 개발하며 판토스 파견 업무를 수행했습니다.",
    longDescription:
      "해상 및 항공 운송의 실시간 위치 추적 및 스케줄 관리 시스템입니다. 지도 기반 인터페이스를 통해 선박과 항공기의 실시간 위치를 확인할 수 있으며, 스케줄 정보를 효율적으로 관리할 수 있는 시스템을 구축했습니다.",
    tags: ["GAUS", "JavaScript", "Java", "Map Integration", "Real-time Tracking"],
    date: "2021-11",
  },
  {
    id: "education-system",
    title: "동물의약품 도매상 교육 시스템",
    description:
      "React, Node.js, AWS 기반의 도매상 교육 관리 시스템 추가 개발. 교육 컨텐츠 관리 및 수강생 관리 기능을 구현했습니다.",
    longDescription:
      "동물의약품 도매상을 위한 온라인 교육 플랫폼입니다. React와 Node.js를 활용한 SPA(Single Page Application)로 구축했으며, AWS 인프라를 활용하여 안정적인 서비스를 제공합니다. 교육 과정 관리, 수강 신청, 진도 관리, 수료증 발급 등의 기능을 개발했습니다.",
    tags: ["React", "Node.js", "AWS", "Education Platform", "SPA"],
    date: "2021-05",
  },
];
