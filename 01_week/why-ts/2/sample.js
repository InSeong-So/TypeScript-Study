/*자바스크립트를 타입스크립트처럼 코딩하기*/
/*ts-check와 jsdoc 사용*/

// function sum(a, b) {
//     return a + b;
// }
//var result = sum(10, '20');  //1020
//result.... 자동완성이 없음

// @ts-check

/**
 * 
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
function sum2(a, b) {
    return a + b;
}
sum2(10, '20');