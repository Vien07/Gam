$(document).ready(function () {
    if ($(window).width() > 769) {
        $(function () {
            $('#header .search_button').click(function (event) {
                console.log("Đã click thành công!");
                $('#header .search_button').toggleClass('grey');
                $('#header #find_view').toggleClass('show');
            });

            $('.fa-xmark').click(function (event) {
                // console.log("Đã click thành công!");
                $('#header .search_button').toggleClass('grey');
                $('#header #find_view').toggleClass('show');

            });


        });

        $(window).scroll(function () {
            var sticky = $('.header_inner'),
                scroll = $(window).scrollTop();

            if (scroll >= 70) sticky.addClass('fixed');
            else sticky.removeClass('fixed');

            if (scroll >= 70) $('#header').addClass('pad-bottom');
            else $('#header').removeClass('pad-bottom');

            if (scroll >= 40) $('#find_view').addClass('v-hidden');
            else $('#find_view').removeClass('v-hidden');

            if (scroll >= 400 && scroll <= 1600) $('#new_release .title').css('animation', 'fadeInLeft 1.2s forwards');
            if (scroll >= 700 && scroll <= 1600) $('#new_release .items').css('animation', 'fadeIn 1.5s forwards');

            if (scroll >= 1200 && scroll <= 2400) $('#custom_jersey .title').css('animation', 'fadeIn 1.5s forwards');
            if (scroll >= 1500 && scroll <= 2400) $('#custom_jersey .info').css('animation', 'fadeIn 1.5s forwards');

            if (scroll >= 2000 && scroll <= 3400) $('#shirt_jersey .title').css('animation', 'fadeInLeft 1.2s forwards');
            if (scroll >= 2300 && scroll <= 3400) $('#shirt_jersey .items').css('animation', 'fadeIn 1.5s forwards');

            if (scroll >= 3300 && scroll <= 4400) $('#banner').css('animation', 'fadeIn 1.5s forwards');

            if (scroll >= 4000 && scroll <= 4700) $('#accessories .title').css('animation', 'fadeInLeft 1.2s forwards');
            if (scroll >= 4300 && scroll <= 4700) $('#accessories .items').css('animation', 'fadeIn 1.5s forwards');

            if (scroll >= 4700) $('#collab .title').css('animation', 'fadeInLeft 1.2s forwards');
            if (scroll >= 4700) $('#collab .collab-merc').css('animation', 'fadeIn 1.5s forwards');
        });
    }
})

