
function sum(...param) {
    let sumNum = 0, i = 0;

    while(i < param.length){
        sumNum += param[i];
        i++;
    }
    return sumNum;
}

function max(...param) {
    let compare = param[0], i = 0;

    while(i < param.length) {
        if (compare < param[i+1]) compare = param[i+1];
        i++;
    }
    return compare;
}

function sumIf(arg,valuation) {
    let sum = 0, i = 0;

    while(i < arg.length) {
        if (arg[i] >= valuation) sum += arg[i] ;
        i++;
    }
    return sum;
}

let inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5},
    {name: 'grapes', quantity: 10},
    {name: 'strawberries', quantity: 8}
];


function findIndex(arr, callback){

    for (let i = 0; i < arr.length; i++){

        if(callback(arr[i])) return i;
    }
}

function template(arr, callback) {
    let result = "";

    for(let i = 0; i < arr.length; i++) {

        result = result + callback(arr[i]);
    }
    return result;
}

function isZero(num) {
    return num === 0 ;
}
function isNum(num) {
    return typeof (num) === 'number';
}

function getRandom(num) {
    let result = 0;

    for (let i = 0; i < num; i++) {
        if (getZeroOrOne(i) === 1) return result = i ;
    }
    return result;
}

function getZeroOrOne(){
    let random = Math.random();
    return random >= 0.6 ? 1 : 0
}



describe('과제 20170108', function () {
    describe('1.배열의 숫자를 모두 더하는 sum함수를 만드시오', function () {
        it('sum함수 테스트', function () {
            expect(sum(1,2,3,4,5,6,7,8,9,10)).toBe(55);
        });
    });

    describe('배열에서 가장 큰 숫자를 찾는 max함수를 만드시오(기존에 만든 max를 개선)', function () {
        it('max함수 테스트', function () {
            expect(max(1,2,3,4,5,6,7,81,9,10)).toBe(81);
        })
    });

    describe('특정 숫자 이상의 숫자만 합산하는 sumIf 함수를 만드시오', function () {
        it('sumif함수 테스트', function () {
            expect( sumIf([3,-4,1,9,10,20], 10) ).toBe(30);
        })
    });

    describe('콜백함수를 익히자', function() {
        describe('findIndex', function() {
            it('원하는 데이터의 index를 찾는다', function(){
                expect(
                    findIndex(inventory, function(fruit) {
                        return fruit.name === 'bananas';
                    })
                ).toBe(1);
                expect(
                    findIndex(inventory, function(fruit) {
                        return fruit.name === 'cherries';
                    })
                ).toBe(2);
            });
        });

         describe('template', function() {
         it('반복되는 데이터를 마크업으로 변환한다', function() {
         expect(
         template(inventory, function(fruit) {
         return '<li>'+fruit.name+'<span>수량 : '+fruit.quantity +'</span></li>';
         })
         ).toBe('<li>apples<span>수량 : 2</span></li><li>bananas<span>수량 : 0</span></li><li>cherries<span>수량 : 5</span></li><li>grapes<span>수량 : 10</span></li><li>strawberries<span>수량 : 8</span></li>')
         });
         });
    });

    describe('isZero 함수를 만드세요',function () {
        it('0이면 true, 이외의 수 false', function () {
            expect( isZero(0) ).toBe(true);
            expect( isZero(!0) ).toBe(false);
        })
    });

    describe('isNum 함수를 만드세요',function () {
        it('숫자인지를 판별한다', function () {
            expect(
                isNum(0)
            ).toBe(true);
            expect(
                isNum('0')
            ).toBe(false);
        })
    });

    describe('getRandom 함수를 만드세요',function () {
        it('랜덤한 숫자를 반환한다', function () {
            expect(
                getRandom(5)
            ).toMatch(/[0-4]/);
        })
    })

});
