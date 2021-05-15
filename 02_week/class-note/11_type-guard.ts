interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return {name: 'Tony', age: 33, skill: 'Iron Making'};
}
let tony = introduce();
console.log(tony.skill);    // 에러 : skill, age는 공통된 속성이 아니므로 name만 접근 가능

// 보장됨. 그러나 단언이 반복되면서 가독성이 떨어짐.
if ((tony as Developer).skill) {
    let skill = (tony as Developer).skill;
    console.log(skill);
} else if ((tony as Person).age) {
    let age = (tony as Person).age;
    console.log(age);
}

// 타입 가드 사용하기 : 아래 함수를 통과하고 나면 type을 체크할 수 있다.
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
    tony.skill;
} else {
    tony.age;
}