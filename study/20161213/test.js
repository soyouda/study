/**
 * Created by jintae on 2016-12-13.
 */
/*
var myObject = {
    name:'foo',
    sayName:function(){
        console.log(this.name);
    }
};
var otherObject = {
    name:'bar'
};
otherObject.sayName = myObject.sayName;
myObject.sayName();
otherObject.sayName();

// = this는 자신을 호출한 객체에 바인딩 된다.
*/

/*
var value = 100;

var myObject = {
    value: 1,
    func1: function(){
        var that = this;
        this.value += 1;
        console.log('func1() called. this.value :' + this.value);

        func2 = function(){
            that.value += 1;
            console.log('func2() called. this.value :' + that.value);

            func3 = function(){
                that.value += 1;
                console.log('func3() called. this.value :' + that.value);
            };
            func3();
        };
        func2();
    }
};
myObject.func1();
*/
/*
function A(arg){
    if(!(this instanceof arguments.callee)){
        return new A(arg)
    }
    this.value = arg ? arg : 0;
}
var a = new A(100);
var b = A(10);

console.log(a.value);
console.log(b.value);
console.log(global.value);
*/
function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}
var foo = {};
Person.apply(foo, ['foo', 30, 'man']);
console.dir(foo);