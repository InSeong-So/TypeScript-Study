/*========= 변수를 정의하는 인터페이스 =========*/
interface User {
    age: number;
    name: string;
}

/*========= 변수에 인터페이스 활용 =========*/
let seho: User = {
    age: 33,
    name: "세호"
}

/*========= 함수에 인터페이스 활용(인자 정의) =========*/
function getUser(user: User) {
    console.log(user);
}
// 에러 발생, age까지 정의해줘야 함
const capt = {
    name: '캡틴',
}
getUser(capt);

/*========= 함수의 스펙(구조)에 인터페이스 활용 =========*/
interface SumFunction {
    (a: number, b: number): number;
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
    return a + b;
}

/*========= 인덱싱 =========*/
interface StringArray {
    [index: number]: string;
}
let arr: StringArray = ['a', 'b', 'c'];
arr[0] = 10; // 에러
arr[1] = '10';

/*========= 딕셔너리 패턴 =========*/
interface StringRegexDictionary {
    [key: string]: RegExp   // 정규표현식 생성자
}

let obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
obj['cssFile'] = 'a'; // 에러

// 타입스크립트의 추론
Object.keys(obj).forEach(function (value) {

});

/*========= 인터페이스 확장 =========*/
interface Person {
    name: string;
    age: number;
}

// extends 로 Person 인터페이스를 상속함
interface Developer extends Person {
    language: string;
}

const captain: Developer = {
    language: 'ts',
    name: '캡틴',
    age: 38,
}