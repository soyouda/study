/**
 * Created by soyouda on 16. 3. 12..
 */
/*
var angular = {
    module : function(){
        로직
        return 모듈;
    }
};
*/
var myApp = angular.module('myApp',[]); //2개의 인자, 1.이름, 2.의존성
myApp.controller('MainController',function($scope){
    $scope.text = "안녕하세요";
    $scope.age = "123";
}); // 인자, 함수
myApp.controller('SecondController',function($scope){
    $scope.text = "adf";
});
