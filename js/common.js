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

    function menulist() {
        let startIndex = 0;

        $('.subMenuList').each(function () {
            $(this).find('li').each(function (index) {
                $(this).attr('data-index', startIndex + index);
            });

            startIndex += $(this).find('li').length;
        });

        $('.main > .container > section').each(function (index) {
            $(this).attr('data-index', index);
        });
    };
    menulist();

    $('.subMenuList li').on('click', function () {
        var index = $(this).attr('data-index');
        console.log(index);
    });

    $('.subMenuList li').on('click', function () {
        const liIndex = $(this).attr('data-index');

        // 현재 클릭한 li와 같은 인덱스 번호를 가진 section에 .view 클래스 추가
        $('.main > .container > section[data-index="' + liIndex + '"]').addClass('view');

        // 다른 형제 section들에서 .view 클래스 제거
        $('.main > .container > section[data-index!="' + liIndex + '"]').removeClass('view');
    });



    var heraindex = $('section.dashBoard').attr('data-index');
    console.log(heraindex);


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