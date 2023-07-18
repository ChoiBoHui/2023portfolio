$(function () {


    // 메인메뉴 클릭 이벤트
    $('.nav .mainMenu').on('click', function () {
        let li = $(this).closest('li');
        let subMenu = $(this).siblings('.subMenu');

        // mainMenu 적용
        $(this).addClass('open');
        li.siblings().find('.mainMenu').removeClass('open');

        // subMenu 적용
        subMenu.addClass('view');
        li.siblings().find('.subMenu').removeClass('view');
    });

    // 서브메뉴 클릭 이벤트
    $('.nav .subMenu .subMenuList li').on('click', function () {
        // let li = $(this).closest('li');
        $('html, body').scrollTop(0);

        $(this).addClass('view');
        $(this).siblings().removeClass('view');
    });

    // 네비게이션 fix, 모바일 메뉴
    $('.triggerBtn').on('click', function () {
        $(this).toggleClass('fix');
        $('header').toggleClass('fix');
        $('footer').toggleClass('fix');
        $('.mainMenu').removeClass('open');
        $('.subMenu').removeClass('open');

        let mopen = $('.mopen')
        if ($(this).hasClass('fix')) {
            mopen.html("close");
        } else (
            mopen.html("menu")
        );

        // 메뉴 닫을때 보이는 서브메뉴 복귀
        $('.subMenu').removeClass('view');
        $('.subMenuList li.view').closest('.subMenu').addClass('view');
    });



    // 헤라 파트별 설명부분 리스트 마우스호버시 이미지 노출
    function sectionHeraHover() {
        $('.hoverHeraSubmenu').hover(
            function () {
                $('.hera .heraHeader .submenuHover').fadeIn();
            },
            function () {
                $('.hera .heraHeader .submenuHover').fadeOut();
            }
        );
        $('.hoverHeraSearch').hover(
            function () {
                $('.hera .heraHeader .searchHover').fadeIn();
            },
            function () {
                $('.hera .heraHeader .searchHover').fadeOut();
            }
        );
        $('.hoverHeraSnsmodal').hover(
            function () {
                $('.hera .heraMain .snsmodalHover').fadeIn();
            },
            function () {
                $('.hera .heraMain .snsmodalHover').fadeOut();
            }
        );
    }
    sectionHeraHover();

});