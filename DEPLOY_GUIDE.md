# 🚀 Vercel 배포 가이드

이 가이드는 my-portfolio 프로젝트를 Vercel에 배포하는 방법을 안내합니다.

## 📋 사전 준비

- [x] GitHub에 코드 push 완료
- [ ] Vercel 계정 생성
- [ ] GitHub 계정과 Vercel 연동

## 🔧 배포 단계

### 1. Vercel 계정 생성 및 로그인

1. **https://vercel.com** 접속
2. **"Sign Up"** 클릭
3. **"Continue with GitHub"** 선택하여 GitHub 계정으로 로그인
4. Vercel이 GitHub 저장소에 접근할 수 있도록 권한 승인

### 2. 프로젝트 Import

1. Vercel 대시보드에서 **"Add New..."** → **"Project"** 클릭
2. **"Import Git Repository"** 섹션에서 `kim-yeongseong/my-portfolio` 선택
3. 만약 보이지 않는다면 **"Adjust GitHub App Permissions"** 클릭하여 권한 추가

### 3. 프로젝트 설정

다음 설정을 확인하세요:

- **Framework Preset**: Next.js (자동 감지됨)
- **Root Directory**: `./` (루트)
- **Build Command**: `npm run build` (자동 설정됨)
- **Output Directory**: `.next` (자동 설정됨)
- **Install Command**: `npm install` (자동 설정됨)

### 4. 환경 변수 (선택사항)

현재 프로젝트는 환경 변수가 필요하지 않습니다. 나중에 필요하면 추가할 수 있습니다.

### 5. 배포

1. **"Deploy"** 버튼 클릭
2. 빌드 진행 상황 확인 (약 1-2분 소요)
3. 배포 완료 후 자동으로 생성된 URL 확인

## 🌐 배포 후 URL 업데이트

배포가 완료되면 다음 URL이 생성됩니다:
- **Production URL**: `https://my-portfolio-[random-hash].vercel.app`
- **Custom Domain** (설정 시): `https://kim-yeongseong.vercel.app`

### Custom Domain 설정 (권장)

1. Vercel 프로젝트 → **"Settings"** → **"Domains"**
2. 원하는 도메인 입력: `kim-yeongseong.vercel.app`
3. **"Add"** 클릭

### URL 업데이트가 필요한 파일들

배포 URL이 확정되면 다음 파일들을 업데이트해야 합니다:

#### 1. `data/profile.ts`
```typescript
export const profile: Profile = {
  // ... 기존 내용
  portfolio: "https://kim-yeongseong.vercel.app", // 추가
};
```

#### 2. `app/layout.tsx`
```typescript
export const metadata: Metadata = {
  // ...
  openGraph: {
    url: "https://kim-yeongseong.vercel.app", // 변경
    // ...
  },
};
```

#### 3. `README.md`
```markdown
[🌐 Live Demo](https://kim-yeongseong.vercel.app) | ...
```

#### 4. `components/Hero.tsx`
포트폴리오 링크 버튼이 있다면 업데이트

## 🔄 자동 배포

GitHub에 push하면 Vercel이 자동으로 새로운 버전을 배포합니다:

1. `main` 브랜치에 push → **Production 배포**
2. 다른 브랜치에 push → **Preview 배포** (테스트용)

## 📊 배포 확인

배포 후 다음을 확인하세요:

- [ ] 메인 페이지가 정상적으로 로드되는지
- [ ] 모든 섹션이 표시되는지 (Hero, About, Experience, Projects, Education, Contact)
- [ ] 반응형 디자인이 모바일에서도 작동하는지
- [ ] GitHub, Email 링크가 제대로 작동하는지
- [ ] SEO 메타데이터가 올바르게 설정되었는지

## 🛠️ 문제 해결

### 빌드 실패 시
- Vercel의 빌드 로그 확인
- 로컬에서 `npm run build` 테스트
- `package.json` 의존성 확인

### 스타일이 적용되지 않을 때
- Tailwind CSS 설정 확인 (`tailwind.config.ts`)
- PostCSS 설정 확인 (`postcss.config.mjs`)

## 📝 추가 최적화

배포 후 다음 항목을 고려하세요:

- [ ] Google Search Console 등록
- [ ] Google Analytics 추가 (선택사항)
- [ ] 커스텀 도메인 연결 (선택사항)
- [ ] OG 이미지 추가 (소셜 공유용)

## 🎉 완료!

배포가 완료되었습니다! 이제 전 세계 어디서나 포트폴리오를 볼 수 있습니다.

**Production URL**: https://kim-yeongseong.vercel.app
