// 타입 별칭 : 이미 정의한 타입에 이름을 부여하여 쉽게 참고할 수 있다
type Person = {
    name: string;
    age: number;
}

let seho: Person = {
    name: '세호',
    age: 33,
}

type MyString = string;
let str: MyString = 'hello';

type Todo = { id: string, title: string, done: boolean };
function getTodo(todo: Todo) {}


// 인터페이스와 타입의 차이
// 인터페이스는 확장이 가능하지만 타입은 확장이 불가능하다
// 가능한 타입 별칭보다는 인터페이스를 사용하는 것이 좋다

// interface Person {
//     name: string;
//     age: number;
// }