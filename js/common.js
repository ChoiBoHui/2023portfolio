$(function () {

    $('.nav a').on('click', function (e) {
        e.preventDefault();
    });

    // 메인메뉴 클릭 이벤트
    $('.nav .mainMenu').on('click', function () {
        let mainMenu = $(this).closest('.mainMenu');
        let li = $(this).closest('li');

        // 붙이기
        mainMenu.addClass('view');
        li.find('.subMenu').addClass('view');
        li.find('.subMenu ul li:first-child a').addClass('view');
        // 지우기
        li.siblings().find('.mainMenu').removeClass('view');
        li.siblings().find('.subMenu').removeClass('view');
        li.siblings().find('.subMenu a').removeClass('view');
    });

    // 서브메뉴 클릭 이벤트
    $('.nav .subMenu ul a').on('click', function () {
        let li = $(this).closest('li');

        $(this).addClass('view');
        li.siblings().find('a').removeClass('view');
    });

    // 해상도 1880px 이하, 메뉴 fix
    $('.triggerBtn').on('click', function () {
        $(this).toggleClass('fix');
        $('header').toggleClass('fix');
        $('footer').toggleClass('fix');
    });



    // $('.tab_menu>li>a').on('click', function (e) {
    //     e.preventDefault();
    //     var idx = $(this).parent().index();
    //     $('.tab_content>li').removeClass('on');
    //     $('.tab_content>li').eq(idx).addClass('on');
    //     $('.tab_menu>li').removeClass('on');
    //     $(this).parent().addClass('on');
    // });
    // business End
});