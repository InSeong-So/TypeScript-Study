//연산자 - Union Type

// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

let seho: string | number | boolean;
function logMessage(value: string | number) {
    // 타입스크립트가 가지는 코드 추론 : Union Type의 특징 중 하나
    if (typeof value === 'number') {
        // 자동으로 number 관련 함수랑 매핑됨
    }
    if (typeof value === 'string') {
        // 자동으로 string 관련 함수랑 매핑됨
    }

    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);


// Union의 특징
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    // 모든 속성을 전부 추론해줄 수 있을거라 생각했지만...
    someone.name; // 추론으로는 공통적인 (name) 프로퍼티 밖에 접근하지 못함
    // type-safe 하지 않은 상황이 올 수 있으므로 공통적인 속성-보장된 속성만 제공되는 것
}

/********************************************************************************/

//연산자 - Intersection Type
let kein: string | number | boolean;
let capt: string & number & boolean;

function askSomeone2(someone: Developer & Person) {
    // 모든 속성을 전부 추론해준다.
    someone.age;
    someone.name;
    someone.skill;
}

/********************************************************************************/
// | 와 & 의 차이점

// Developer의 규격
askSomeone({ name: '개발자', skill: '타입스크립트' });
// Person의 규격
askSomeone({ name: '캡틴', age: 100 });

// Developer + Person의 규격
askSomeone2({ name: '개발자', skill: '타입스크립트', age: 100 });