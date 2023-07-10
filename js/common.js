$(function () {

    $('.nav a').on('click', function (e) {
        e.preventDefault();
    });

    // 각 서브메뉴와 section에 인덱스 번호 부여
    function menuList() {
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
    menuList();

    // 메인메뉴 클릭 이벤트
    $('.nav .mainMenu').on('click', function () {
        let li = $(this).closest('li');
        let subMenuFirstLi = li.find('.subMenu ul li:first-child');
        let index = subMenuFirstLi.attr('data-index');
        let targetSection = $('.main > .container > section').eq(index);

        // mainMenu 적용
        $(this).addClass('view');
        li.siblings().find('.mainMenu').removeClass('view');

        // subMenu 적용
        li.find('.subMenu').addClass('view');
        li.siblings().find('.subMenu').removeClass('view');

        // subMenu가 가진 첫번째 li 적용
        li.find('.subMenu li').removeClass('view');
        li.siblings().find('.subMenu li').removeClass('view');
        li.find('.subMenu ul li:first-child').addClass('view');

        // 해당 section에 .view 클래스 추가
        targetSection.addClass('view');

        // 형제 section에는 .view 클래스 제거
        $('.main > .container > section').not(targetSection).removeClass('view');
    });

    // 서브메뉴 클릭 이벤트
    $('.nav .subMenu .subMenuList li').on('click', function () {
        // let li = $(this).closest('li');

        $(this).addClass('view');
        $(this).siblings().removeClass('view');
    });

    // 해상도 1880px 이하, 메뉴 fix
    $('.triggerBtn').on('click', function () {
        $(this).toggleClass('fix');
        $('header').toggleClass('fix');
        $('footer').toggleClass('fix');
    });

    // 부여된 인덱스 번호와 같은 section에 클레스 추가
    $('.subMenuList li').on('click', function () {
        const liIndex = $(this).attr('data-index');

        // 현재 클릭한 li와 같은 인덱스 번호를 가진 section에 .view 클래스 추가
        $('.main > .container > section[data-index="' + liIndex + '"]').addClass('view');

        // 다른 형제 section들에서 .view 클래스 제거
        $('.main > .container > section[data-index!="' + liIndex + '"]').removeClass('view');
    });

    function sectionHeraHover() {

        $('.hoverHeraSubmenu').on('mouseenter', function () {
            // $('.hera .heraHeader .submenuHover').addClass('on');
            $('.hera .heraHeader .submenuHover').fadeIn();
        });
        $('.hoverHeraSubmenu').on('mouseleave', function () {
            // $('.hera .heraHeader .submenuHover').removeClass('on');
            $('.hera .heraHeader .submenuHover').fadeOut();
        });

    }
    sectionHeraHover();
});