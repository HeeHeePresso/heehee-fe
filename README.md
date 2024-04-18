## 희희프레소 FE

### 백엔드용 세팅
- 순서대로 진행
```
# 1. nvm 설치
brew install nvm

# nvm use 에러 발생시 
nvm install 20.11.1

# 2. 노드 버전 설정
nvm use

# 3. 패키지 설치
npm install

# 4. 개발서버 시작
npm run dev

# 패키지 관련 문제 발생시
npm run clean
```

### FE용 세팅

```
1. 노드버전을 .nvmrc 파일에 명시된 버전으로 세팅
nvm use 

2. 설치
npm install

3. pretiter & eslint 에디터 설정
각자 에디터에 맞게 설정

4. env 파일 추가
.env or .env.local or .env.production 파일 추가 (.env 파일들은 git에 업로드하지 않습니다.)
.env.example 은 env 의 key 값만 작성하고 git에 업로드합니다.
```

### 스크립트

```bash
1. 시작
# 개발
npm run dev
# 프로덕션
npm run start 
# 개발(모킹), 모킹시에는 실제 api 에러시 모킹 데이터 표시
npm run dev:mock

2. 노드 모듈 삭제 후 재설치
npm run clean

3. 스토리북 시작
npm run sb
```

### 배포
- 스토리북 [url](https://heehee-fe-hds.vercel.app/)

### 폴더 구조
- packages/hds: UI 컴포넌트 (비즈니스 로직에 의존성이 없는 순수 UI)
- app: 라우팅
- components: 공용 컴포넌트(2개 이상 사용시 공용에 추가)
- containers: 페이지 또는 도메인 의존성이 존재하는 컴포넌트