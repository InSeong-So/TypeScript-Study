class Person2 {
    // 멤버변수 정의
    private name: string;   // 클래스 내부에서만 접근 가능
    public age: number;     // 어디에서나 접근 가능
    readonly log: string;   // 읽기만 가능, 값을 변경할 수 없음

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// 리액트 예전 문법 - 클래스 기반 코드
class App extends React.Component {

}

// 리액트 최신 문법 - 훅 기반의 함수영 코드
function App() {
    return <div>Heelo World < /div>
}

// 뷰 컴포지션 API
new Vue({
    el:'',
    setup(){

    }
})