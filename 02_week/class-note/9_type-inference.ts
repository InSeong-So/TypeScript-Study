/* 타입 추론 기본 1 */

// TypeScript Language Server가 타입 추론을 함
let a;  // type: any
let b = 10; // type: number
let c = '10' // type: string

// // return type: any
// function getA(a) {
//     return a;
// }

// // return type: number
// function getB(b) {
//     return b;
// }

// default 값 설정, return type: number
function getA(a = 10) {
    return a;
}

// default 값 설정 연산을 통한 타입 변경, return type: string
function getB(a = 10) {
    return c + a;
}

/* 타입 추론 기본 2 : 인터페이스와 제네릭을 이용한 타입 추론 방식 */
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// // type: string
// let shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello',
// }

/* 타입 추론 기본 3 : 복잡한 구조에서의 타입 추론 방식 */
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

// type: string
let detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'a',
    tag: 'a'
}

/* Best Common Type */
let arr = [1, 2, true, true, 'a', 3];

// ref : https://joshua1988.github.io/ts/guide/type-inference.html#%EB%AC%B8%EB%A7%A5%EC%83%81%EC%9D%98-%ED%83%80%EC%9D%B4%ED%95%91-contextual-typing