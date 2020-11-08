$(function () {

	// Слайдер
	$('.slider__inner').slick({
		 infinite: true,
	     slidesToShow: 1,
	     slidesToScroll: 1,
	     fade: false,
	     prevArrow: '<img class="slider-arrows slider-arrows_left" src="../img/arrow-left.svg">',
		 nextArrow: '<img class="slider-arrows slider-arrows_right" src="../img/arrow-right.svg">',
	     dots: true
	});

	// Селектор
	$( 'select' ).styler({
	    locale: 'ru',
	    select: { 
	        search: {
	            limit: 10
	        }
	    },
	    onFormStyled: function( ) 
	    { 
	        $( '#checkbox-indeterminate-change' ).styler( 'reinitialize', { checkbox: { indeterminate: true } } );
	    }
	});

	// Вызов и закрытие окна оператора
	$('.modal__dialog-btn').on('click', function () {
		$('.modal').toggleClass('modalShow');
		$('body').toggleClass('no-scroll');
		$('.modal__dialog-btn').toggleClass('btnIndex');
	})

	// $('.burger').on('click', function () {
	// 	$('.modal__dialog-btn').attr('data-check', function (index, attr) {
	//         return attr == 'false' ? 'true' : 'false';
	//     });
	//     if ($('.modal__dialog-btn').attr('data-check') == 'false') {
	//         $('.modal__dialog-btn').removeClass('modalShow');
	//     } else {
	//     	$('.modal__dialog-btn').addClass('modalShow');
	//     }
	// })

	// Вызов и закрытие меню
	$('.burger').on('click', function () {
		$('.menu').toggleClass('menuShow');
		$('.mask').toggleClass('maskShow');
		$('body').toggleClass('no-scroll');
	})
	$('.menu__list-close').on('click', function () {
		$('.menu').removeClass('menuShow');
		$('.mask').removeClass('maskShow');
		$('body').removeClass('no-scroll');
	})
	$('.mask').on('click', function () {
		$('.menu').removeClass('menuShow');
		$('.mask').removeClass('maskShow');
		$('body').removeClass('no-scroll');
	})

     // Фиксирование хедера
    var header = $(".header__top"),
     	headerInner = $('.header__top-inner'),
        introH = $(".header__content").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    })

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("header--fixed");
            headerInner.addClass("header--shadow");
            $('.modal__dialog-btn').addClass('modalShow');
        } else {
            header.removeClass("header--fixed");
            headerInner.removeClass("header--shadow");
            $('.modal__dialog-btn').removeClass('modalShow');
        }
    }

     // Скролл
    $(".footer-to__top-btn").on("click", function(event) {
        $('html, body').animate({scrollTop: 0},1000);
        return false;
    });

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $(".menu__link").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 1000)
    });

});

