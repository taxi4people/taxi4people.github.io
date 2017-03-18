(function(){
    document.querySelectorAll('[data-link]').forEach(function(a){
        a.href += window.location.search;
    });

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

    if (isIOS || isAndroid) {
        window.location.href = document.querySelectorAll('[data-link]')[0].href;
    }
})();
