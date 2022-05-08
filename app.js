$(function() {

    // Fixed Header (фиксир.шапка)

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight(); //высота   //узнаем высоту 750 с padding'ом
    // без paddinga пишем просто heigh(); console.log(introH);

    let scrollPos = $(window).scrollTop();//позиция прокрутки
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        
        //обнавляем скролл  console.log(scrollPos);
        scrollPos = $(this).scrollTop();
        
        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH) {//позиция скролла больше >
            header.addClass("fixed");//добавляется
        } else {
            header.removeClass("fixed");//удаляется
        } 
    }


    // Smooth scroll (плавный скрол)
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top; //получаем отступ от вверха

        nav.removeClass("show");//при нажати меню исчезает

        $("html, body").animate({  //анимировать
            scrollTop: elementOffset - 70 //скролим страницу     845-70
        }, 700);  //скорость прокрутки 1000-эта 1 сек
    });


    // Nav Toggle
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


    // Reviews  https://kenwheeler.github.io/slick/
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,//прокрутка бесконечно
        slidesToShow: 1,//показать слайд
        slidesToScroll: 1,//скролить слайд
        fade: true, //затемнение отзывов
        arrows: false,
        dots: true   //показать точки
    });
              

});