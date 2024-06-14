    window.onload = function () {
        var slideNums = 3;
        if ($(window).width() <= 640) {
          slideNums = 1;
        } else if ($(window).width() <= 1770) {
          slideNums = 2;
        }
        $('.top_blog_latest_list').slick({
            slidesToShow: slideNums,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 1000,
        });

        var slideNum = 3;
        if ($(window).width() <= 640) {
          slideNum = 1;
        } else if ($(window).width() <= 1757) {
          slideNum = 2;
        }
        $('.top_blog_recommend_list').slick({
            slidesToShow: slideNum,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 1000,
        });

        $('.top_gallery_slide').slick({
            autoplay: true,
            autoplaySpeed: 2500,
            speed: 1000,
            dots: true,
            arrows: true,
            centerMode: true,
            slidesToShow: 3,
            variableWidth: true
        });
    };