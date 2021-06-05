interface Hero {
    name: string;
    skill: string;
}

// const capt: Hero = {
//     name: 'capt',
//     skill: 'shield',
// }    // Success

// const capt: Hero = {}; // Error

// 타입 어노테이션(:)을 사용하지 않고 as를 사용하기
const capt = {} as Hero; // Success

const a: string | null;
a! // non-null assertion은 개발자 관점에서는 확실하지만 로직 상으로는 확실하지 않으므로 사용에 유의