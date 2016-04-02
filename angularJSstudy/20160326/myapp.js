var myApp = angular.module('myApp',[]); //2개의 인자, 1.이름, 2.의존성
myApp.controller('MainController',function($scope){
    $scope.$watch('txt', function(oldValue, newValue){
        console.log('old:', oldValue);
        console.log('new:', newValue);
    });

    /*
     $scope.text = "안녕하세요";
     $scope.age = "123";
     */
}); // 인자, 함수
/*
 myApp.controller('SecondController',function($scope){
 $scope.text = "adf";
 });
 */
