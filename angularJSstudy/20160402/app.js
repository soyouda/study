/* 내가 작성한 과제
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
*/

/* 수호님. 중간
angular.module('myApp', [])
    .controller('MainCtrl', function($scope) {
        var bookmarks = localStorage.getItem('bookmarks');
        var parsedBookmarks = JSON.parse(bookmarks);
        $scope.bookmarks = parsedBookmarks || [];
        $scope.add = function(a) {
            if(!a || !a.txt) return;

            $scope.bookmarks.push({href: a.txt});
            localStorage.setItem(
                'bookmarks',
                JSON.stringify($scope.bookmarks)
            );
            a.txt = '';
        };
        $scope.delete = function(idx) {
            $scope.bookmarks.splice(idx, 1);
            localStorage.setItem(
                'bookmarks',
                JSON.stringify($scope.bookmarks)
            );
        };
    });
*/

/* 내가 짠거. 오류남.

//angular.module('computer', ['ram','hdd'])
angular.module('myApp', ['csCenter', ''])//['csCenter'] 다른 모듈을 주입할 수 있다.
    .value("SERVER_URL", "http://www.naver.com") //서비스
    .service("CallService", function(){ //service라는 서비스
        this.inBound = function(){};
            this.inBound = function(){
                count = 0;

        };
        this.outBound = function(){
            count += 1;
        };
        this.showCount = function(){
            return count;
        }
    })

    .controller("RootCtrl", function($scope){
        $scope.name = "루트컨트롤러 . 바디당";
    })

    .controller('MainCtrl', function($scope) {
        var bookmarks = localStorage.getItem('bookmarks');
        var parsedBookmarks = JSON.parse(bookmarks);

        $scope.bookmarks = parsedBookmarks || [];
        $scope.add = function(a) {
            if(!a || !a.txt) return;

            $scope.bookmarks.push({href: a.txt});
            localStorage.setItem(
                'bookmarks',
                JSON.stringify($scope.bookmarks)
            );
            a.txt = '';
        };
        $scope.delete = function(idx) {
            $scope.bookmarks.splice(idx, 1);
            localStorage.setItem(
                'bookmarks',
                JSON.stringify($scope.bookmarks)
            );
        };
    })
    .controller("SecondCtrl", function($scope, SERVER_URL, CallService){ //$scope  특정한 기능이 있는 애들을 서비스라고 함. function에 서비스를 주입해서 사용하면 됨.
        $scope.name = "세컨드 컨트롤러";
        $scope.server = SERVER_URL;

})

.controller("ChartCtrl", function(){
   $scope.data = [
       [123,234,345,111,11,997,43],
       [1,2,3,4,5,6,7]
   ];
    $scope.legend = true;
    $scope.series = ['A', 'B'];
    $scope.labels = ['월','화','수','목','금','토','일']
});
*/

angular.module('myApp', ['csCenter','chart.js'])
    .value('SERVER_URL', 'http://www.daum.net')
    .controller('RootCtrl', function($scope){
        //$scope.name = '루트컨트롤러!! 바디다!!!';

    })
    .controller('MainCtrl', function($scope, CallService) {
        $scope.name = '메인컨트롤러';

        var bookmarks = localStorage.getItem('bookmarks');
        var parsedBookmarks = JSON.parse(bookmarks);
        $scope.bookmarks = parsedBookmarks || [];
        $scope.add = function(a) {
            if(!a || !a.txt) return;

            $scope.bookmarks.push({href: a.txt});
            localStorage.setItem(
                'bookmarks',
                JSON.stringify($scope.bookmarks)
            );
            a.txt = '';
        };
        $scope.delete = function(idx) {
            $scope.bookmarks.splice(idx, 1);
            localStorage.setItem(
                'bookmarks',
                JSON.stringify($scope.bookmarks)
            );
        };
    })
    .controller('SecondCtrl', function($scope, $log, SERVER_URL, CallService) {
        $scope.server = SERVER_URL;
    })
    .controller('ChartCtrl', function($scope){
        $scope.data = [
            [123,234,345,111,11,97,43],
            [112,444,123,166,421,522,11],
            [44,11,345,22,11,111,43]
        ];
        $scope.dd = [44,11,345,22,11,111,43];
        $scope.legend = true;
        $scope.series = ['A', 'B','C'];
        $scope.labels = ['월','화','수','목','금','토','일'];
    })

