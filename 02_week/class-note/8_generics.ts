/* 기본적인 제네릭 함수 */

// // 파라미터를 그대로 돌려주는 함수
// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);        // 숫자 10
// logText('안녕');    // 문자열 안녕
// logText(true);      // 진위값 true

// // 제네릭 적용하기
// function logtext<T>(text: T): T {
//     console.log(text);
//     return text;
// }

// logtext<number>(10);
// logtext<string>('하이');
// logtext<boolean>(true);

/* 기존 타입 정의 방식과 제네릭의 차이점 - 함수 중복 선언의 단점 */
// 코드가 동일한데 단순 타입이 다르다는 이유로 비슷한 함수를 늘려나가는건 매우 비효율적이다.
// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

// function logText(text: string) {
//     console.log(text);
//     text.split('').reverse().join('');
//     return text;
// }

// const num = logNumber(10);
// logText('안녕');    // split으로 인해 문자열만 받을 수 있다.
// logText(true);

/* 기존 타입 정의 방식과 제네릭의 차이점 - 유니온 타입을 이용한 선언 방식의 문제점 */
// function logText(text: string | number) {
//     console.log(text);
//     // string과 number에 공통으로 사용되는 API만 제공한다.
//     return text;
// }

// logText(10);        // 숫자 10
// const a = logText('안녕');    // 문자열 안녕
// // a도 여전히 string과 number에 공통으로 사용되는 API만 제공된다.

/* 제네릭의 장점과 타입 추론에서의 이점 */
function logText<T>(text: T): T {
    console.log(text);
    return text;
}

// 1. 타입이 틀어지지 않게 잘 구성할 수 있다.
// 2. 동일한 함수에 대해 분리가 가능하다.
const str = logText<string>('안녕');
str.split('');
const login = logText<boolean>(true);
login.valueOf();