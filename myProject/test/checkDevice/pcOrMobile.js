var printAlert = console.log;

var platformTest = function () {
    var filter = "win16|win32|win64|mac|macintel";
    var getId = document.getElementById('goToEventPage');
    var getAttribute = getId.getAttribute('href');

    var setAttribute = function setAttribute(addUrl){
        return getId.setAttribute('href', addUrl+getAttribute);
    };

    if ( navigator.platform ) {
        if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
            //mobile
            printAlert('mobile 접속');
            setAttribute('m2/');

        } else {
            //pc
            printAlert('pc 접속');
        }
    }
};
