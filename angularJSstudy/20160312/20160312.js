/**
 * Created by soyouda on 16. 3. 12..
 */

function getName(obj){
    //return obj.name ? obj.name : null;
    return obj.name || null;
}

//4번
function sum(n1){
    return function (n2) {
        return n1+ n2;
    }
}
sum(1)(3);

//for문일 때 for문 위에 var = i 로 선언해주는게 명확함
function closo(){
    var  arr = [];
    for(var i = 0; i<10; i++){
        arr[i] = function(){
            return i;
        }
    }
    conosole.log(arr[4]())
}

