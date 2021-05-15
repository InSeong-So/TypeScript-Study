/* 타입 호환 1 : 인터페이스, 클래스 */
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

let developer: Developer;
let person: Person;
// developer = person; // 에러 : 왼쪽에 있는 타입은 구조적으로 오른쪽보다 크기때문에 불가능함.
person = developer; // 할당 대상 <= 할당자

// 그렇다면?
class Person {
    name: string;
}
// developer = new Person(); // 에러 : 왼쪽에 있는 타입은 구조적으로 오른쪽보다 크기때문에 불가능함.

/* 타입 호환 2 : 함수, 제네릭 */
// 함수
// 비교를 위해 함수 표현식으로 선언
let add = function (a: number) { }
let sum = function (a: number, b: number) { }

sum = add;  // 에러 : 구조적으로 가능
add = sum;  // 에러 : 구조적으로 불가능

// 제네릭
// 구조적인 타입의 차이가 없음
interface Empty<T> {
}
let emptyOne: Empty<string>;
let emptyTwo: Empty<number>;
emptyOne = emptyTwo;
emptyTwo = emptyOne;

// 구조적인 타입의 차이가 생김 : 인터페이스 내부에서 변수에 타입을 할당하므로
interface NotEmpty<T> {
    data: T;
}
let notEmptyOne: NotEmpty<string>;
let notEmptyTwo: NotEmpty<number>;
notEmptyOne = notEmptyTwo;  // 불가능
notEmptyTwo = notEmptyOne;  // 불가능
