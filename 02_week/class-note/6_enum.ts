// enum : 특정 값들의 집합

// 별도의 값을 정의하지 않으면 숫자로 취급
enum Shoes {
    Nike,
    Adidas,
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0

// 문자 enum
enum Shoes2 {
    Nike = '나이키',
    Adidas = '아디다스',
}

let myShoes2 = Shoes2.Nike;
console.log(myShoes2); // 나이키

// 이러면 확장성이 낮음 : enum을 활용해보자
// function askQuestion(answer: string) {
//     if (answer === 'yes') {
//         console.log("정답입니다.");
//     }
//     if (answer === 'no') {
//         console.log("오답입니다.");
//     }
// }

// 드롭다운 형태에 자주 씀
enum Answer {
    Yes = "Y",
    No = "N",
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log("정답입니다.");
    }
    if (answer === Answer.No) {
        console.log("오답입니다.");
    }
}

askQuestion(Answer.Yes);
askQuestion('Yes');
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');