angular.module("myApp",[])
    .controller("mainCtrl", function($scope){
        $scope.sites = [];

        $scope.add = function(homepage){
            console.log(homepage);
            $scope.sites.push({bookmark : homepage.bookmark});
            homepage.bookmark = "";
        };
    });