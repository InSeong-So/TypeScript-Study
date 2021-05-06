/* ===================================== */
/* 함수타입 */

// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//     return a + b;
// }
// sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}
add();

// 함수의 타입을 정의하는 방식 : 함수의 파라미터 갯수도 제한하는 특성이 있음
function sum(a: number, b: number): number {
    return a + b;
}
sum(10);

// 함수의 옵셔널 파라미터 : 추가적으로 들어올 수 있는 파라미터 검증하기
function log(a: string, b?: string) {

}
log('hello world');
log('hello ts', 'abc');