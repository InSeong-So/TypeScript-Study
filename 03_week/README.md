# 타입스크립트 - 2주차

## 프로젝트

- [존스 홉킨스 대학 코로나 세계 현황판](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)

## 구조

- app.js : 자바스크립트 파일
- app_JSDoc.js : 점진적인 타입 시스템 적용 예시 - JSDoc

## 자바스크립트 코드에 타입스크립트를 적용할 때 주의해야 할 점

- 기능적인 변경은 절대 하지 않을 것
- 테스트 커버리지가 낮을 때는 함부로 타입스크립트를 적용하지 않을 것
- 처음부터 타입을 엄격하게 적용하지 않을 것(점진적으로 strict 레벨 증가)

## 자바스크립트 프로젝트에 타입스크립트 적용하기

0.  자바스크립트 파일에 JSDoc으로 타입 시스템 입히기
1.  타입스크립트 프로젝트 생성(환경 구성)

    - [x] NPM 초기화

      ```sh
      npm init -y
      ```

    - [x] 타입스크립트 라이브러리 설치

      ```sh
      npm i typescript --save -D
      ```

    - [x] 타입스크립트 설정 파일 생성 및 기본 값 추가

      ```sh
      tsconfig.json 파일 생성
      ```

    - [x] 자바스크립트 파일을 타입스크립트 파일로 변환
    - [x] `tsc` 명령어로 타입스크립트 컴파일

2.  엄격하지 않은 타입 환경(loose type)에서 프로젝트 돌려보기

    - 프로젝트에 테스트 코드가 있다면 테스트 코드가 통과하는지 먼저 확인(필수)
    - 프로젝트의 js 파일을 모두 ts 파일로 변경
    - 타입스크립트 컴파일 에러가 나는 코드 위주로 먼저 수정
      - 기능을 사소하게라도 변경하지 않도록 주의
    - 테스트 코드가 성공하는지 확인

3.  명시적인 any 선언하기
    - 프로젝트 테스트 코드가 통과하는지 확인
    - `tsconfig.json` 파일에 `noImplicitAny: true` 추가
    - 가능한 타입을 적용할 수 있는 모든 곳에 타입을 적용
      - 라이브러리를 쓰는 경우 `DefinitelyTyped`에서 `@types` 관련 라이브러리를 찾아 설치
      - 만약 타입을 정하기 어려운 곳이 있으면 명시적으로 any 선언
    - 테스트 코드가 통과하는지 확인

## 컴파일

- 타입스크립트 에러가 난다고 해서 런타임 에러는 아님, 즉 웹 서비스의 동작에 에러가 난다고 확정지을 수 없음
- 실제 프로젝트라서 자바스크립트 파일이 너무 많다면 모든 파일을 바꾸면서 시간이 많이 소요되므로 에러가 날 수 있다.
  - 확장자가 `.ts`가 아니더라도 컴파일 명령어를 실행하면 `.js`파일도 컴파일 된다. 즉, 모든 파일을 전부 `.ts`로 변경하는게 아니라 `tsconfig.json`의 `allowJs` 옵션을 활용하여 점진적으로 적용할 수 있다.

## 참조

- [tsconfig-checkJs](https://www.typescriptlang.org/tsconfig#checkJs)
