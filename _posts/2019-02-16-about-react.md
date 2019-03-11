---
layout: post
title: "React 시작하기"
author: sooyoung.cha
date: "2019-02-16 16:23:00 +0900"
tags: [study]
comments : true
---

# React 시작하기
React.. 첫 시작은 검색.. 수많은 문서, 예제들이 쏟아져 나왔다. 눈으로 읽고 보고 또 보아도 머릿속에 들어오지 않지만 하나씩 시작해보려고 한다. 

React 는 프레임워크가 아닌 자바스크립트 라이브러리로 사용자 인터페이스를 만드는데 사용한다.
구조가 MVC, MVW 등인 프레임워크와 달리, 오직 View 만 신경 쓰는 라이브러리이다.

#### Component
가장 먼저 알아야 하는 것은 React 의 컴포넌트. 
React 컴포넌트는 render()에서 새로운 DOM 트리를 생성하고, 이전 DOM 트리와 비교하여 변경 점을 찾아 업데이트한다.
하나에 컴포넌트에서 해당 생김새와 작동방식을 정의하고 컴포넌트 내부에는 또 다른 컴포넌트를 추가 해서 사용할 수도 있다.    
사용자 화면에 뷰를 보여 주는 것을 렌더링이라 한다. 각 컴포넌트는 `render()` 메소드를 통해 뷰를 그리는데 `초기렌더링`과 컴포넌트 데이터 변경으로 다시 실행되는 `리렌더링`을 알아야 한다.

#### Render
리액트에는 `render()` 함수가 있다. 
이 함수는 컴포넌트를 정의하는 역할을 하며, 뷰가 어떻게 생겼고, 어떻게 작동하는지 정보를 지닌 객체를 반환한다.

```javascript
render() {...}
```
`render()` 함수를 실행하면 컴포넌트의 렌더링 -> Reconciliation 작업 -> DOM 조작 작업 -> 이벤트가 적용된다.

#### Reconciliation
간단히 말하면 변화에 대한 전/후 DOM 트리를 비교(Diff)하여 갱신이 필요한 부분만을 찾아 DOM 트리를 업데이트하는 것을 의미한다. 

변화에 따라 뷰가 변형된 것처럼 보이지만 실제로는 새로운 요소로 갈아 끼운다. 이 작업 또한 `render()` 에서 진행한다.

컴포넌트는 데이터를 업데이트 했을 때 단순히 업데이트 값만 수정하는 것이 아니라 새로운 데이터를 가지고 `render()` 함수를 또다시 호출하고 이때 바로 DOM에 반영하지 않고 이전 `render()` 함수가 만들었던 컴포넌트 정보와 현재 `render()` 정보의 차이점만 비교해서 최소한의 자원을 사용하여 이를 수행한다.

#### Virtual DOM
리액트의 특징 중 하나가 Virtual DOM(가상 DOM) 을 사용하는 것이다.

웹브라우저에서는 DOM 에 조작을 가할 때마다 렌더링을 시키게 되는데, DOM 조작할 때마다 새로 렌더링이 되면 성능이 느려질 수밖에 없다. 
리액트에서는 한 번의 상태변경으로 여러 곳의 DOM 이 변경된다고 해도 Virtual DOM 방식을 사용하여 가상화한 DOM에서 전부 변경하고 이전 DOM과 비교해서 변경된 부분을 한 번에 적용하는 방식으로 DOM 렌더링횟수를 최소화하고 효율적으로 진행한다.

리액트에서 데이터가 변화하여 웹 브라우저에서 실제 DOM 을 업데이트할 때, 웹 브라우저에 DOM 을 새로 넣는 것이 아니라, 다음과 같은 절차를 밟는다.

1. 데이터를 업데이트하면 중간에 가상 DOM 에 한번 리렌더링을 하고, 
2. 이전 DOM 트리 내용을 비교한 다음에 
3. 변경 부분에 대해서만 업데이트를 해준다.

여기서 `새로운 DOM 트리`가 바로 Virtual DOM 이다.

#### etc
위에서 언급했듯이 일부 웹 프레임워크가 MVC 또는 MVW 등 구조를 지향하는 거와 달리 리액트는 뷰(Veiw)만 신경 쓰는 라이브러리로 데이터모델링, 라우팅 등 기타 기능은 직접 구현해서 사용해야 한다.

React + (MobX, redux, SockJS, react-router.......)   
수많은 라이브러리와 함께 사용할 수도 있고, 다른 웹 프레임워크와 혼용할 수도 있다. 

React + AngularJS    
React + Backbone.js    
React + ...

### 작업 환경설정

```list
1. Node.js / npm or yarn 설치하기
2. Git 설치
3. create-react-app 으로 프로젝트 만들기
```

### Node.js와 npm 
리액트 프로젝트를 만들 때는 Node.js 와 npm 를 꼭 설치해야한다. 
npm은 Node.js와 함께 설치되는데 Node.js 버전에 따라 npm 버전도 다르게 설치된다. 

```info
Node.js v8.12.0 를 사용하였다
```
nvm를 이용하면 Node.js를 여러 버전을 설치해서 사용할 수 있다.    
window 환경에서는 [nvm-window](https://github.com/coreybutler/nvm-windows)를 설치해서 이용하면 된다. 
설치가 끝나면 명령창에서 다음 명령어를 입력하여 제대로 설치되었는지 확인할 수 있다.
```
node -v
v8.12.0
```
`npm`은 의존성 라이브러리 개수가 많으면 속도가 저하되기도 하는데 `yarn` 은 `npm`문제점을 개선한 패키지 매니저인데 나는 익숙한 `npm` 를 사용하기로 했다. 

### Git 설치
Git은 형상 관리 도구로 프로젝트 버전을 관리하고 협업할 때 매우 중요한 역할을 한다. 
Git 공식 홈페이지 [https://git-scm.com/download/mac](https://git-scm.com/download/mac) 에서 설치 파일을 받아 설치하면 된다. 

### create-react-app으로 프로젝트 생성 및 실행
create-react-app 는 react 웹 개발용 boilerplate 이다. create-react-app 글로벌로 설치한다. 
프로젝트를 만들 때는 `create-react-app {프로젝트이름}` 명령어를 사용하면 된다. 
- [create-react-app](https://github.com/facebook/create-react-app/tree/master/packages/react-scripts/template) 가이드 문서

```
npm install -g create-react-app 
create-react-app study-react
```

명령어를 입력하면 자동으로 모듈들이 설치된다.
`npm start` 명령어로 개발 서버를 실행할 수 있다. 서버 포트는 3000번이며 파일을 수정하고 저장할 때마다 다시 빌드하고 웹 브라우저를 리로딩한다.

```
npm start
> react-scripts start
Starting the development server...
Compiled successfully!
.
.
```
이 과정이 완료되면 자동으로 http://<span></span>localhost:3000 페이지가 뜬다.

아무런 설정없이 직접 모든 환경 Rect부터 설정하면 되겠지만, React는 ES6 버전의 Javascript로 작성하는 것이 일반화 되어있기 때문에 모듈번들러로 컴파일 및 빌드 하는 것이 필수라 이 환경을 세팅해줘야 하는 것도 상당한 일이다.    
Rect 에만 집중하고 싶으면 boilerplate 이용하여 입문하는 것도 좋을것 같다. 
이제 react 를 시작할 준비가 되었다.. 다음에는 react 코드를 작성해 봐야지..