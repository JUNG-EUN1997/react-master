# REACT-MASTER-CLASS
>**React**와 **Typescript**를 이용한 프로젝트 😊

---

## Installation
### creat-react-app with typescript
```
npx create-react-app my-app-name-here —template typescript
``` 

### styled-components 설치 후 ts
> ``npm i --save-dev @types/PACKAGE-NAME`` 입력 시, 대부분은 설치가 완료됨. 
>> 그렇지 않을 시, 직접 선언 필요
```
npm i --save-dev @types/styled-components
```

### styled-components Theme 사용법
1. typescript에서 어떤 형식인지 알 수 있도록 ``interface``를 생성 ``styled.d.ts``
2. 실제 사용할 theme 파일을 제작 ``theme.ts`` (export 사용 필요!)
3. 사용할 파일에 ``ThemeProvider``와 ``theme``를 설정

### react-router-dom
> 5.3.0 version으로 설치
```
npm i react-router-dom@5.3.0
```

### React-Query 
> API를 통해 서버와 작업을 진행할 때 보다 편리하게 사용할 수 있도록 도와줌
>> loading 상태 및 전송 결과를 받을 수 있음
```
npm i react-query
```

### apexcharts - CHART API [이동](https://apexcharts.com, "docs")
```
npm install --save react-apexcharts apexcharts
```

### react-helmet
> 간단한 변경으로 단순노출용이라면 사용해도 되지만, 크롤링이나 소셜서비스용으로 제작 시, 서버사이드 렌더링 필요 [출처](https://jeonghwan-kim.github.io/dev/2020/08/15/react-helmet.html)
```
npm install --save react-helmet
```

### Recoil
```
npm install recoil
```

[시청강의 : 노마드코더
(React JS 마스터클래스)](https://nomadcoders.co, "강의페이지로 이동")

