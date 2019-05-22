$(function () {




    //スクロールアニメーション
    //トップ
    $('.logo-left').click(function () {

        $('html,body').animate({
            'scrollTop': 0
        }, 'slow');

    });

    //スクロール
    //各ページ
    $('.btn').click(function () {

        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html,body').animate({
            'scrollTop': position - 100
        }, 'slow');

    });






    //ホバー時ヘッダーフォント
    $('header a').hover(
        function () {

            $(this).animate({
                'font-size': '17px'
            }, 100);

        },
        function () {

            $(this).animate({
                'font-size': '14px'
            }, 300);

        }
    );









});
