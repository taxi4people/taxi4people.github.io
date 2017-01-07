(function(){
    document.querySelectorAll('[data-app]')[0].href += window.location.search;
    document.querySelectorAll('[data-web]')[0].href += window.location.search;

    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    var isAndroid = /Android/.test(navigator.userAgent);

    function setPlatform(platform) {
        document.querySelectorAll('html')[0].classList.add(platform);
    }

    if (isIOS) {
        setPlatform('platform-ios');
    } else if (isAndroid) {
        setPlatform('platform-android');
    } else {
        setPlatform('platform-other');
    }
})();
