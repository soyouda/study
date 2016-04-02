angular.module("myApp",[])
    .controller("mainCtrl", function($scope){
        $scope.sites = [{
            bookmark : "www.naver.com"
        },{
            bookmark : "www.daum.net"
        },{
            bookmark : "www.google.co.kr"
        }];

        $scope.add = function(homepage){
            console.log(homepage);
            $scope.sites.push({bookmark : homepage.bookmark});
            homepage.bookmark = "";
        };

        $scope.delete = function($index){
            console.log($index);
            $scope.sites.splice($index, 1);
        }

    });