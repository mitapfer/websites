(function($) {
"use strict";


/**
 * [isMobile description]
 * @type {Object}
 */
window.isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
}
window.isIE = /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
window.windowHeight = window.innerHeight;
window.windowWidth = window.innerWidth;

/**
 * Match height 
 */
$('.row-eq-height > [class*="col-"]').matchHeight();

var myEfficientFn = debounce(function() {
	$('.row-eq-height > [class*="col-"]').matchHeight();
}, 250);

window.addEventListener('resize', myEfficientFn);

/**
 * [debounce description]
 * @param  {[type]} func      [description]
 * @param  {[type]} wait      [description]
 * @param  {[type]} immediate [description]
 * @return {[type]}           [description]
 */
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

/**
 * Masonry
 */
$('.grid__inner').masonry({
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
});

/**
 * grid css
 */
function work() {
	$('.grid-css').each(function() {
		var workWrapper = $(this),
			workContainer = $('.grid__inner', workWrapper),
			filters = $('.filter', workWrapper),
			filterCurrent = $('.current a', filters),
			filterLiCurrent = $('.current', filters),
			duration = 0.3;
		workContainer.imagesLoaded( function() {
			workContainer.isotope({
				layoutMode: 'masonry',
				itemSelector: '.grid-item',
				transitionDuration: duration + 's',
				masonry: {
					columnWidth: '.grid-sizer'
				},
				// hiddenStyle: {},
				// visibleStyle: {}
			});
		});
		filters.on('click', 'a', function(e) {
			e.preventDefault();
			var $el = $(this);
			var selector = $el.attr('data-filter');
			filters.find('.current').removeClass('current');
			$el.parent().addClass('current');
			workContainer.isotope({
				filter: selector
			});
		});
	});
}
work();

/**
 * Header
 */

var header_main =  $('header'),
    toggle_search = $('.search-btn'),
    close_search = $('.searchbar__close'),
    toggleMenu = $('.header-menu__toggle'),
    headerMenu = $('.header-01__menu');

toggle_search.on('click', function(){
    header_main.toggleClass("search-active");
});

close_search.on('click', function(){
    header_main.removeClass("search-active");
});

$(document).on('click', function(){
    $('.page-wrap').removeClass('active');
});

$('.searchbar__close').on('click', function(e) {
    e.stopPropagation();
});

$(window).on('load resize', function(){
    var hHeader = $('header').height();

if(header_main.hasClass('header-fixheight')) {

if( $('.md-content').children('.fix-header').length == 0) {
            $('.md-content').prepend('<div class="fix-header" style="height:' + hHeader + 'px"></div>')
        }else {
            $('.fix-header').css('height', hHeader);
        }
    }
}).trigger('resize');

$('.raising-nav').dropdownMenu({
    menuClass: 'raising-menu',
    breakpoint: 1200,
    toggleClass: 'active',
    classButtonToggle: 'navbar-toggle',
    subMenu: {
        class: 'sub-menu',
        parentClass: 'menu-item-has-children',
        toggleClass: 'active'
    }
});

$('.navbar-toggle').on('click', function() {
    $('.page-wrap').toggleClass('active');
});

$(window).on('resize', function(){
    var ww = $(window).width();

if(ww < 1200) {
        console.log('khanh');

}else {
        $('.page-wrap').removeClass('active');
    }
}).trigger('resize');

var header_height = header_main.height();

$('.raising-nav').onePageNav({
    currentClass: 'current',
    scrollOffset: header_height
});
/**
 * Gallery
 */
$('.gallery-wrap').each(function() {
    var gallery =$(this);
    if(gallery.length) {
        if(gallery.hasClass('gallery-album') == false) {
            gallery.magnificPopup({
                type: 'image',
                delegate: 'a',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
                callbacks: {
                    beforeOpen: function() {
                      // just a hack that adds mfp-anim class to markup
                       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                       this.st.mainClass = this.st.el.attr('data-effect');
                    }
                },
                image: {
                    verticalFit: true
                },

});
        } else {
            gallery.magnificPopup({
                gallery: {
                  enabled:true,
                  preload: [0,1]
                },
                delegate: 'a',
                type: 'image',
                removalDelay: 500, //delay removal by X to allow out-animation
                callbacks: {
                    beforeOpen: function() {
                      // just a hack that adds mfp-anim class to markup
                       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                       this.st.mainClass = this.st.el.attr('data-effect');
                    },
                    buildControls: function() {
                        // re-appends controls inside the main container
                        this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
                    }
                },
                image: {
                    verticalFit: true,
                },
                closeOnContentClick: false,
                showCloseBtn: false,
                midClick: false, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
            });
        }
    }
})




// SEND REQUESTS
const btnForm = document.querySelectorAll('.btn--request'),
    modalTitleMessage = document.querySelector('.modal-message__title'),
    formBtn = document.querySelector('.form__btn'),
    body = document.querySelector('body');

const messages = {
  success: 'Спасибо! Мы обязательно с вами свяжемся.',
  error: 'Ой, что-то пошло не так...'
};

const postData = async (data, currentForm) => {
  fetch('telegram.php', {
      method: "POST",
      body: JSON.stringify(data)
  })
  .then((data) => {
      closeModal('.modal');
      showModalMessage('.modal-message', messages.success);
      if (!data.ok) {
          closeModal('.modal');
          showModalMessage('.modal-message', messages.error);
      }
  })
  .catch(() => {
      closeModal('.modal');
      showModalMessage('.modal-message', messages.error);
  })
  .finally(() => {
      const inputs = currentForm.querySelectorAll('input'),
            textarea = currentForm.querySelector('textarea');

      inputs.forEach(item => {
          item.style.borderColor = '';
      });

      if (textarea !== null) {
          textarea.style.borderColor = '';
      }

      currentForm.reset()
  });
}

btnForm.forEach(item => {
  item.addEventListener('click', e => {
      e.preventDefault();

      const idForm = e.target.form.getAttribute('id');
      const currentForm = document.querySelector(`#${idForm}`);

      const formData = new FormData(currentForm);
      const object = {};
      formData.forEach(function(value, key) {
          object[key] = value;
      });

      const inputs = currentForm.querySelectorAll('input'),
            textarea = currentForm.querySelector('textarea');
      
      let valueVars;

      inputs.forEach(item => item.addEventListener('input', () => checkValueOne(item)))

      if (textarea !== null) {
          textarea.addEventListener('input', () => checkValueOne(textarea));
      }

      const checkValueOne = elem => {
          if (elem.value == '') elem.style.borderColor = 'red';
              else elem.style.borderColor = 'green';
      }


      const checkValue = form => {
          const nameInput = form.querySelector('[name="Телефон: "]'),
                phoneInput = form.querySelector('[name="Имя: "]'),
                textarea = form.querySelector('textarea');

          if (nameInput.value == '') nameInput.style.borderColor = 'red';
              else nameInput.style.borderColor = 'green';

          if (phoneInput.value == '') phoneInput.style.borderColor = 'red';
              else phoneInput.style.borderColor = 'green';

          if (textarea !== null) {
              if (textarea.value == '') textarea.style.borderColor = 'red';
                  else textarea.style.borderColor = 'green';
          }


          if (textarea !== null) {
              if (nameInput.value !== '' && phoneInput.value !== '' && textarea.value !== '') valueVars = true;
                  else valueVars = false;
          } else {
              if (nameInput.value !== '' && phoneInput.value !== '') valueVars = true;
                  else valueVars = false;
          }

      };

      checkValue(currentForm);
      
      if (valueVars) {
          postData(object, currentForm);
      }

  });
});

// MODAL
const btnModal = document.querySelectorAll('.btn--order'),
    btnModalClose = document.querySelector('.modal__close');

const showModalMessage = (modalSelector, message = messages.success, time = true) => {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('modal__show');
  body.classList.add('no-scroll');
  modalTitleMessage.innerHTML = message;
  if (time == true) {
      setTimeout(() => closeModal('.modal-message'), 2500);
  }
};

formBtn.addEventListener('click', e => {
  e.preventDefault();
  closeModal('.modal-message');
});

const backgroundModal = modalSelector => {
  const modal = document.querySelector(modalSelector);

  modal.addEventListener('click', e => {
      if (e.target.classList.contains(modalSelector.replace(/\./ig, ''))) {
          closeModal(modalSelector);
      }
  });
}

backgroundModal('.modal-message');
backgroundModal('.modal');

const closeModal = modalSelector => {
  const modal = document.querySelector(modalSelector);
  modal.classList.remove('modal__show');
  body.classList.remove('no-scroll');
}

btnModal.forEach(item => {
  item.addEventListener('click', e => {
      e.preventDefault();
      showModalMessage('.modal', messages.success, false);
  });
});

btnModalClose.addEventListener('click', () => closeModal('.modal'));

// CHECK VALUE
const inputsPhone = document.querySelectorAll('[name="Телефон: "]');

inputsPhone.forEach(item => {
  item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/ig, '');
  });
});


// NAV MENU
const menu = document.querySelector('.raising-menu'),
      btnMenu = document.querySelector('.navbar-toggle');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});




})(jQuery);

