$(function () {
    const nav = $('.nav')

    $('.nav a').on('click', function (e) {
        e.preventDefault();
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