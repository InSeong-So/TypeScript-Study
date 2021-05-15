/* 타입 단언(type assertion) */
// type: any의 경우 중간에 변수 할당을 한다면 타입 추론이 any로 고정된다.
let a;
a = 20;
a = 'a'
let b = a;  // type: string이 아니라 type: any임
let c = a as string; // type: string으로 강제 추론하는 것(개발자가 더 타입을 확실하게 아니까 너는 이렇게 선언해라)

// DOM API(웹 페이지의 태그 정보)를 조작할때 가장 많이 사용된다.

// <div id="app" > hi < /div>

let div = document.querySelector('div'); // div가 있다는 보장이 불가능함
// 일반적으로 존재여부를 확인하고 아래 처럼 로직을 진행한다.
if (div) {
    div.innerText
}

// 타입 단언을 활용
let div2 = document.querySelector('div') as HTMLDivElement;
div2.innerText;