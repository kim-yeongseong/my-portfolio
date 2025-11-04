export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  period: string;
  description?: string;
  achievements?: string[];
}

export const education: Education[] = [
  {
    id: "kosmo-2019",
    institution: "한국소프트웨어인재개발원 (KOSMO)",
    degree: "Java 개발자 양성과정",
    period: "2018.10 ~ 2019.04",
    description: "Java, Spring, JSP 등 웹 개발 전반에 대한 이론 및 실무 교육 수료",
    achievements: [
      "Java, Spring, JSP, HTML5, CSS, JavaScript, jQuery",
      "MySQL, Oracle, MyBatis",
      "Android 앱 개발",
      "팀 프로젝트: 웹 애플리케이션 개발",
    ],
  },
  {
    id: "kosta-2018",
    institution: "소프트웨어기술진흥협회 (KOSTA)",
    degree: "4차산업혁명 사물인터넷 SW 개발자 양성과정",
    period: "2018.03 ~ 2018.08",
    description: "IoT 관련 하드웨어 및 소프트웨어 연동 기술 학습",
    achievements: [
      "RaspberryPi, Arduino 활용",
      "Java, Spring 기반 웹 개발",
      "IoT 센서 연동 프로젝트",
    ],
  },
  {
    id: "guro-highschool",
    institution: "구로고등학교",
    degree: "고등학교 졸업",
    field: "이과계열",
    period: "2013 졸업",
  },
];
