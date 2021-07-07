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