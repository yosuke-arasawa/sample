$(function () {




    //スクロールアニメーション
    //トップ
    $('.logo-left').click(function () {

        $('html,body').animate({
            'scrollTop': 0
        }, 'slow');

    });

    //スクロールアニメーション
    //各ページ
    $('.btn').click(function () {

        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html,body').animate({
            'scrollTop': position - 100
        }, 'slow');

    });


    //ホバー時ヘッダーフォント
    $('.btn-hover').hover(
        function () {

            $(this).animate({
                'font-size': '17px'
            }, 100);

        },
        function () {

            $(this).animate({
                'font-size': '14px'
            }, 100);

        }
    );


    //ハンバーガーメニュー
    //$('#hamb-menu,#hamb-contents').hover(
    //   function () {
    //
    //       $('#hamb-contents').show();
    //
    //   },
    //  function () {
    //
    //           $('#hamb-contents').hide();
    //
    //      }
    //   );

    var $hamb = $('#hamb-wrapper,#hamb-contents,.menu-trigger')

    $('#hamb-menu').click(function () {


        if ($hamb.hasClass('active')) {

            $hamb.removeClass('active');
            $('#hamb-wrapper').fadeOut();
            $('#hamb-contents').slideUp(200);


        } else {

            $hamb.addClass('active');
            $('#hamb-wrapper').fadeIn();
            $('#hamb-contents').slideDown(200);

        }

    });


    $('#hamb-wrapper').click(function () {

        if ($hamb.hasClass('active')) {

            $hamb.removeClass('active');
            $('#hamb-wrapper').fadeOut();
            $('#hamb-contents').slideUp(200);

        }

    });









});
