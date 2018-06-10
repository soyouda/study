//커링
// 1. _curry, _curryr
/*function _curry(fn) {
    return function (a, b) {
        if(arguments.length === 2) return fn(a, b);
        return function (b) {
            return fn(a, b);
        }
    }
}*/
function _curry(fn) {
    return function (a, b) {
        return arguments.length === 2 ? fn(a, b) : function (b) {return fn(a, b)}
    };
}

var add = _curry(function (a, b) {
    return a + b;
});

var add10 = add(10);

console.log(add10(5));
console.log(add(10)(5));
console.log(add(1,2));

var sub = _curryr(function (a, b) {
    return a - b;
});

function _curryr(fn) {
    return function (a, b) {
        return arguments.length === 2 ? fn(a, b) : function (b) {return fn(b, a)}
    }
}

var sub10 = sub(10);

console.log(sub10(5));

//2 _get : object의 값을 안전하게 받자
var users = [{name: 'haha', age: 10},{name: 'hoho', age : 15}];
var _get = _curryr(function (obj, key) {
    return obj == null ? undefined : obj[key];
});

var user1 = users[0];

console.log(_get(users[0], 'name'));
console.log(_get('name')(user1));