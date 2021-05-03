/* ===================================== */
/* 기본타입 */

// JS 문자열
// var str = 'hello';

// TS 문자열
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열1
let arr: Array<number> = [1, 2, 3];
let heros: Array<string> = ['Capt', 'Thor', 'Hulk'];

// TS 배열2
let items: number[] = [1, 2, 3];

/* ===================================== */
/* 튜플, 객체, 진위값 */

// TS 튜플
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
// let person: object = {
//     name: 'capt',
//     age: 100
// };
let person: { name: string, age: number } = {
    name: 'thor',
    age: 1000
};

// TS 진위값
let show:boolean = true;