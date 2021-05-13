/* 프로토타입 상속 */
var user = { name: "capt", age: 100 };
var admin = {};

admin.__proto__ = user;
admin.name // "capt"
admin.age // 100
admin // {}


/* 프로토타입 활용 */
var obj = { a: 10 };
