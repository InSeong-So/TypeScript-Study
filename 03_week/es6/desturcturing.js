// 구조 분해 문법(Destructuring, 디스트럭처링)
var arr = [1, 2, 3, 4];
var obj = {
    a : "a",
    b : "b",
    c : "c"
}

var {a} = obj;

console.log(a);


function fetchData(){
    return {
        data:{
            name:'capt',
            age:100,
        },
        config : {},
        statusText: '',
        headers: {}
    }
}

var result = fetchData();

var {data, config, statusText, headers} = fetchData();

var {data:captain} = fetchData();