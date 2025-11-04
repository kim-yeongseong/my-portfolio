import { Study } from "@/types";

export const studies: Study[] = [
  {
    id: "kosmo-java-training",
    title: "Java 개발자 양성과정",
    description:
      "한국소프트웨어인재개발원(KOSMO)에서 Java, Spring, JSP, HTML5, jQuery, AJAX, JSON, MySQL, Oracle, Android, MyBatis 등 풀스택 개발 기술을 학습하고 실무 프로젝트를 수행했습니다.",
    category: "교육",
    tags: ["Java", "Spring", "JSP", "MySQL", "Oracle", "MyBatis", "Android"],
    date: "2018-10 ~ 2019-04",
  },
  {
    id: "kosta-iot-training",
    title: "4차산업혁명 사물인터넷 SW 개발자 양성과정",
    description:
      "소프트웨어기술진흥협회(KOSTA)에서 IoT 관련 기술을 학습했습니다. RaspberryPi, Arduino를 활용한 하드웨어와 소프트웨어 연동 경험을 쌓았으며, 다양한 프로그래밍 언어를 접하며 빠르게 적응하는 능력을 키웠습니다.",
    category: "교육",
    tags: ["IoT", "RaspberryPi", "Arduino", "Java", "Spring", "MySQL"],
    date: "2018-03 ~ 2018-08",
  },
  {
    id: "spring-boot-api-template",
    title: "Spring Boot API 템플릿 프로젝트 구축",
    description:
      "Spring Boot 기반 API 서버 템플릿을 자체 구축하여 향후 프로젝트의 API 서버 변환을 위한 표준화 작업을 진행했습니다. Mybatis, JPA, JWT, Swagger, Jasypt 등 최신 기술 스택을 적용했습니다.",
    category: "자기개발",
    tags: ["Spring Boot", "JPA", "JWT", "Swagger", "MyBatis", "Jasypt"],
    date: "2023-03 ~ 2023-06",
  },
  {
    id: "clean-architecture-study",
    title: "클린 아키텍처 설계 및 적용",
    description:
      "Go 언어를 활용한 프로젝트에서 클린 아키텍처 원칙에 따라 프로젝트 구조를 설계했습니다. 유지보수와 확장성을 높이는 설계 패턴을 학습하고 실무에 적용하며, 아키텍처 설계 역량을 향상시켰습니다.",
    category: "아키텍처",
    tags: ["Clean Architecture", "Go", "Design Pattern", "Architecture"],
    date: "2023-07 ~ 2024-07",
  },
  {
    id: "docker-cicd-study",
    title: "Docker 및 CI/CD 파이프라인 구축",
    description:
      "Docker Compose를 활용한 개발 환경 구축과 Jenkins를 통한 CI/CD 파이프라인 설정을 학습하고 실무에 적용했습니다. SVN에서 Git으로 버전 관리 시스템을 이관하며 현대적인 개발 프로세스를 도입했습니다.",
    category: "DevOps",
    tags: ["Docker", "Jenkins", "CI/CD", "Git", "DevOps"],
    date: "2022-01 ~ 2023-06",
  },
  {
    id: "api-integration-study",
    title: "다양한 API 연동 및 통합",
    description:
      "관세청 API(유니패스), 세틀 뱅크 API, 바로빌 API, 알리고 API 등 다양한 외부 API를 연동하며 데이터 교환 및 통합 기술을 학습했습니다. RESTful API 설계 원칙과 API 문서화 방법을 익혔습니다.",
    category: "백엔드",
    tags: ["API Integration", "RESTful API", "Swagger", "OpenFeign", "EDI"],
    date: "2019-06 ~ 2024-11",
  },
];
