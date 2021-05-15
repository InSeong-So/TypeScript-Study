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


/* 인터페이스에 제네릭을 선언하는 방법 */
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = {value: 10, selected: false}; // 에러

interface Dropdown2<T> {
    value: T;
    selected: boolean;
}

const obj2: Dropdown2<string> = {value: 'abc', selected: false};    // 정상
const obj21: Dropdown2<number> = {value: 10, selected: false};    // 정상


/* 제네릭의 타입 제한 */
// 제네릭으로 받은 타입을 배열로 활용하겠다라고 제한
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);
//     text.forEach(function (text) {
//         console.log(text);
//     });
//     return text;
// }

// logTextLength<string>(['hi']);

/* 제네릭의 타입 제한2 - 정의된 타입 이용하기 */
interface LengthType {
    length: number;
}

// 인터페이스를 상속하여 제네릭에 들어갈 수 있는 타입을 구분할 수 있다.
function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
}

logTextLength('a'); // 문자열은 기본적으로 length 함수가 제공됨
logTextLength(10);  // 에러, 숫자에는 length가 적용되지 않음
logTextLength({length: 10});  // 객체 내부에 length 프로퍼티가 있으므로 에러가 나지는 않음

/* 제네릭의 타입 제한3 - keyof */
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

// extends : 기존에 정의된 인터페이스, 클래스, 타입 등을 확장하기 위해 사용한다.
// keyof : 인터페이스의 한가지 속성만 받을 수 있게 제약을 걸겠다
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name");

// 가장 많이 사용되는 곳은 API의 호출 후 응답에 대한 규칙을 정의하는 곳이다.