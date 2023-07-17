$(function () {
    // index 윈도우 온로드 됐을때 잠깐 노출하고 들어감
    setTimeout(function () {
        $('header').removeClass('fix');
        $('footer').removeClass('fix');
        $('.triggerBtn').removeClass('fix');
    }, 1000);

});