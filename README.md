# React_Project_TIL

<details>
  <summary><b>2021.07.06</b></summary><br>

1. react 학습을 위한 기본 <b>환경 세팅</b><br>

    - Visual Studio Code 설치

      settings - Terminal › External: Windows Exec의 내용을 아래와 같이 변경시켜주었으며 Terminal의 default profile을 git bash로 setting하였다.

        ```
        C:\Program Files\Git\bin\bash.exe
        ```

    - nvm 설치

      <a href="https://github.com/coreybutler/nvm-windows/releases">여기</a>에 접속하여 nvm을 설치하고, vs code에서 정상적으로 설치되었음을
      확인하였다.

        ```shell
        $ nvm -v
        ```

2. 웹의 기본 동작 개념<br>

    - 서버(response)와 클라이언트(request)?

        - 클라이언트 : 웹사이트를 보는 도구<br>
        - 서버 : html, data등의 웹사이트에 뿌려줄 요소를 만들어서 클라이언트에 json 등의 형태로 전달해줌<br>

    - 서버리스(서버가 없는게 아님. 직접 만들 필요가 없는 것!)

3. DOM

   html 단위 하나하나를 객체로 생각하는 모델을 말한다. 즉 부모-자식의 관계를 갖는 트리구조임을 의미한다.

</details>
<details>
  <summary><b>2021.07.07</b></summary><br>

1. ES6문법

   React는 javascript 라이브러리로, 자바스크립트의 표준 규약 중 가장 보편화 된 ES6 문법을 학습하였다.
   <details open>
   <summary>Class</summary><br>
    객체 단위로 코드를 그룹화하고 쉽게 재사용하기 위해 사용. Class를 통하여 내용을 정의한 후 여러차례 재사용할 수 있다.
   <br>
   
      ```javascript
      Class Cat {
          // 생성자 함수
          constructor(name)
         {
            this.name = name;
         }
         
         // 일반 함수
         showName() {
              console.log(this.name);
          }
      }
      ```

   위와 같이 클래스 내부에서는 생성자 함수 constructor을 정의하여 내부 내용을 초기화 할 수 있다. 객체를 생성할때는 <code>let cat = new Cat('Happii')</code>형태로 작성할
   수 있다. 클래스 내부의 함수는 다음과 같이 호출한다.

      ```javascript
      cat.showName();
      ```

   한편 class는 extends를 통하여 상속도 가능하다.

      ```javascript
      Class MyCat extends Cat {
      // 생성자 함수
      // ...
     
     
      // 일반 함수
      // 오버라이딩 : 상위클래스의 메소드를 재정의
         showName(){
            // super를 키워드로 사용하기
            return '내 고양이 이름은 '+super.showName()+'입니다.';
         }
      }
      ```

   이때 <code>super</code>를 사용하여 부모클래스에 대한 필드, 메소드를 참조할 수 있다.
    </details>
   <details>
   <summary>let, const의 Scope</summary><br>
   var(함수단위), let(block 단위) / const(block 단위)<br>이때 block은 if{...} 등 중괄호로 구분된 한 단위를 말한다.
   </details>
   <details>
      <summary>=, ==, ===</summary><br>

    - = : 할당
    - == : 자료형을 비교하지 않는 등차
    - === : 자료형까지 비교하는 등차
   </details>
   <details>
      <summary>Spread 연산자(...)</summary><br>
      객체 내부 요소를 객체 외부로 꺼내준다.<br>

         ```javascript
         let array = [1,2,3,4,5];
         let new_array = [...array];
         ```
   </details>
   <details>
      <summary>조건부 삼항 연산자</summary><br>
      조건 ? 참일 경우 : 거짓일 경우
   </details>


2. Array
   <details>
      <summary>map</summary><br>
      기존의 array에 연산을 하여 새로운 배열을 생성할 수 있다. 이때  원본 값은 훼손되지 않는다.
      <br>
   
      ```javascript
      const array1 = [0, 1, 2, 3];
      const array2 = array1.map((array_item) => {
        return array_item + 1;
      });
      ```      
      
      이 경우 원본배열은 그대로 [0, 1, 2, 3] 이나, 새로 생성한 배열 array2는 [1, 2, 3, 4]의 리스트를 가진다는 것을 확인할 수 있다.
   </details>
   <details>
      <summary>filter</summary><br>
      map의 경우 map을 통해 얻어낸 배열이 원본배열의 길이와 같다는 것을 알 수 있다. 원본 배열에서 필요한 요소를 filtering해 원하는 값만 가져오도록 하는 것이 filter이다.
      <br>
   
      ```javascript
      const array1 = [0, 1, 2, 3];
      const array2 = array1.filter((array_item) => {
        return array_item > 2;
      });
      ```
   
      array2는 [3]의 리스트를 가진다는 것을 알 수 있다.
   </details>
   <details>
      <summary>concat</summary><br>
      concat을 사용하여 원본 배열을 변화시키지 않으면서 두 배열을 합치거나 요소를 추가할 수 있다. 이때 concat은 중복 항목을 제거해주지 않는다는 특징이 있다.<br>
      중복 항목이 자동으로 제거되도록 하기 위하여 Set을 사용할 수 있다.
   
      ```javascript
      const array1 = [0, 1, 2, 3];
      const array2 = [3, 4, 5];
   
      const new_array = [...new Set(array1.concat(array2))]
      ```
   </details>

   <details>
      <summary>from</summary><br>
      
      ```javascript
      const my_name = "heeeon";
      const my_name_array = Array.from(my_name);
      
      console.log(my_name_array);   // ['h', 'e', 'e', 'e', 'o', 'n']
      
      // 배열 초기화
      const new_array = Array.from({length: 5}, (item, idx)=>{ return idx;});
      // 출력 결과는 길이가 5인 배열에 0부터 순서대로 삽입된 것을 확인할 수 있다.
      console.log(new_array);   // [0, 1, 2, 3, 4]
      ```

   </details>
</details>

<details>
  <summary><b>2021.07.08</b></summary><br>

   1. nvm
      ```shell
      # node 안정적인 버전 설치
      $ nvm install 12.18.4
      # node 가장 최신 버전 설치
      $ nvm install 14.13.0

      # 노드가 잘 설치되었는지 확인
      $ node -v

      # 안정적인 버전으로 바꾸기
      $ nvm use 12.18.4
      ```

2. npm & yarn

   npm(Node Package Manager)은 여러 third-party 패키지를 활용할 수 있도록 한다. 비슷하게 yarn이 있는데 npm과 yarn은 프론트엔드의 의존성을 관리하기 위한 패키지 매니저이다. 이때 npm은 node를 설치하면서 자동으로 설치되기 때문에 따로 설치하지 않아도 된다는 특징이 있다.<br><br>

   - yarn 설치하기

      ```shell
      # -g : 컴퓨터 전체에 설치
      $ npm install -g yarn

      # yarn 설치 확인
      $ yarn -v
      ```

   - yarn으로 CRA(Create React App)  설치하기 - CRA는 웹사이트 제작을 위해 필요한 패키지들의 모음이라고 할 수 있다.

      ```shell
      $ yarn add global create-react-app
      ```

3. React Project 시작

   week-1 project를 아래의 명령어로 시작한다.

   ```shell
   $ yarn create react-app week-1
   ```

   week-1 내부 폴더를 살펴보면 첫번째로 node_modules를 확인할 수 있다. 이 폴더는 앞으로 yarn으로 설치할 수많은 패키지들이 담기는 장소이다.
</details>

<details>
  <summary><b>2021.07.09</b></summary><br>

1. JSX

   리엑트에서는 하나의 html 파일(public/index.html)만 존재한다. 이러한 React의 특징으로 인해 JSX 를 통해 요소를 생성하고 렌더링 시켜 view 를 구성한다. 이때 JSX는 src/App.js와 같이 함수 안에서 return 해주는 html 태그로 view를 꾸미는데, 이를 html in js 방식이라고 하며 이를 JSX라고 부른다. 

   <br><br>
   JSX 에러 살펴보기
   
   ```shell
   # JSX 문법에 맞게 쓰이지 않음(태그 제대로 안닫힘)
   SyntaxError: Unterminated JSX contents
   
   # 태그는 하나만 반환해야 함.
   SyntaxError: Adjacent JSX elements must be wrapped in an enclosing tag.
   ```
   
   <br>
   jsx Basic Rules<br><br>

   - jsx 에서 변수 or 자바스크립트 문법을 사용할 때 중괄호를 이용한다.

      ```jsx
      const dog_name = 'happii';
      return (
         <div>
         hello {cat_name}
         </div>
      );
      ```
      <br>

   - class를 선언할 때 class 대신 className을 사용한다.

      ```jsx
      <div className="App">
      ```
   <br>

   - style

      ```jsx
      // 방법1) p 태그에서 style을 사용할때 중괄호로 묶어준다.
      <p style={{color: 'blue'}}>Blue</p>


      // 방법2) 변수로도 사용 가능하다.
      const styles = {
         color: 'blue'
      };

      return (
         <div className="App">
            <p style={styles}>orange</p>
         </div>
      );
      ```

2. Component

   웹 페이지를 구성할 때 여러 요소로 나누어서 생각할 수 있는데 이 요소를 Componet라고 한다. Component는 함수형 Component/ Clsss형 Component로 나누어질 수 있으며, 이때 이 Component를 너무 크게 쪼개면 재사용성이 떨어진다.
   <br>

   - State : Component의 데이터
   
   - Props : 부모 Component로 부터 받아온 데이터

3. CSS

   App.js에서 state를 정의하고, 이를 props로 start2.js로 전달한다. 또한 App.js에서 hw.css를 연동시켜 화면을 꾸밀 수 있다.

   ```javascript
   // App.js
   // CSS import
   import './hw.css'
   
   // 컴포넌트 넘겨주기
   render() {
         return (
         <div className="App">
           {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
           <Start2 name={this.state.name}/>
         </div>
       );
     }
   ```
   <br>
   실습 내용은 아래와 같다.
   <p align="center"><img src="images/week-1.JPG"></p>
</details>

<details>
  <summary><b>2021.07.10</b></summary><br>

1. SASS, SCSS

   SASS와 SCSS는 CSS를 더 편하게 쓸 수 있도록 도와준다. 이때 SCSS는 SASS의 3번째 버전 부터 추가된 것인데 CSS와 호환성이 개선되었다.

   ```shell
   # SASS 설치
   $ yarn add node-sass@4.14.1 open-color sass-loader classnames
   ```
   <br>
   SCSS의 주요 기능은 아래와 같다.<br>

   - Nesting 가능
   
   - 클래스명, 글자 등 상위 요소 이어쓰기 가능(& 사용)
   
      ```scss
     .App { 
        &:hover{
           background-color: bisque;
        }  
      }
      ```
     <br>

   - 변수 사용 가능
   
      ```scss
      $bgColor: #eee;
     
      .App {
         background-color: #{$bgColor};      
      }
      ```
     
2. styled-components
   
      styled-components는 CSS-in-js 라이브러리 중 하나로 컴포넌트 스타일링 기법이다. 이는 class 이름을 고민하지 않아도 된다는 점, 컴포넌트에 스타일을 적기 때문에 직관적이라는 점이 특징이다.
      <br>
      설치 방법은 아래와 같다.<br>
      
      ```shell
      $ yarn add styled-components
      ```
      <br>
      사용 방법은 아래와 같다.
      
      ```javascript
      import styled from 'styled-components';
   
      function App() {
         return (
            <div className="App">
              {/* props로 bgColor를 줘볼까요! */}
              <MyStyled bgColor를={"red"}>hello React!</MyStyled>
            </div>
         );
      }
   
      // 백틴 내부에 기존 CSS문법 사용
      const MyStyled = styled.div`
         color: #fff;
         &:hover{
           background-color: #ddd;
         }
         // 변수 받아오기 가능, 삼항연산자 사용 가능 등 기초 js 문법이 사용 가능함.
         background-color: ${(props) => (props.bgColor를 ? "red" : "purple")};
      `;
      ```
</details>