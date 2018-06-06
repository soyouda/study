var printAlert = console.log;

var platformTest = function () {
    var platformFilter = "win16|win32|win64|mac|macintel";
    var getId = document.getElementById('goToEventPage');
    var getAttribute = getId.getAttribute('href');
    var deviceUrl = getAttribute.replace('/shop/','/m2/');

    var setAttribute = function setAttribute(){
        return getId.setAttribute('href', deviceUrl);
    };

    if ( navigator.platform ) {
        if ( platformFilter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
            //mobile
            printAlert('mobile 접속');
            setAttribute('m2/');

        } else {
            //pc
            printAlert('pc 접속');
        }
    }
};
