## 희희프레소 FE


### 세팅
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

2. 노드 모듈 삭제 후 재설치
npm run clean

3. 스토리북 시작
npm run sb
```

