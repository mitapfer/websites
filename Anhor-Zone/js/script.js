document.addEventListener('DOMContentLoaded', () => {

    // CREATE SLIDES
    const listSlides = {
        slide_1: [
            {
                'img': 'slider-1.jpg',
                'price': '1.500.000',
                'title': 'Двухместный номер',
                'description': 'Двухместные номера в Anhor Relax Zone включают в себя собственный санузел, завтрак и бассейн.',
                'classActive': 'active'
            },
            {
                'img': 'slider-2.jpg',
                'price': '2.730.000',
                'title': 'Четырёхместный коттедж',
                'description': 'Внутри коттеджа вам доступны все современные условия: на первом этаже гостинная, TV, современная кухня, роскошный санузел.',
                'classActive': 'active'
            }
        ],
        slide_2: [
            {
                'img': 'slider-1.jpg',
                'price': '4.130.000',
                'title': 'Шестиместный коттедж',
                'description': 'Внутри коттеджа вам доступны все современные условия: на первом этаже гостиная с камином, TV, современная кухня, санузел. На втором этаже расположены 3 спальных комнаты + санузел.'
            },
            {
                'img': 'slider-2.jpg',
                'price': '3.000.000',
                'title': 'Восьмиместный номер',
                'description': 'Восьмиместный номер в Anhor Relax Zone включает в себя собственный санузел, завтрак и бассейн.'
            }
        ],
        slide_3: [
            {
                'img': 'slider-2.jpg',
                'price': '8.260.000',
                'title': 'Двенадцатиместный коттедж',
                'description': 'Внутри коттеджа вам доступны все современные условия: на первом этаже гостиная с камином, TV, современная кухня, две комфортабельные спальни, санузел. На втором этаже расположены 4 спальных комнаты + санузел.'
            },
            {
                'img': 'slider-1.jpg',
                'price': '8.260.000',
                'title': 'Тренадцатиместный коттедж',
                'description': 'Внутри коттеджа вам доступны все современные условия: на первом этаже гостиная в стиле Вестерн, TV, современная кухня и два санузла. На втором этаже имеется большая спальня в стиле казармы.'
            }
        ]
    };

    parentDots = document.querySelector('.rooms__dots');

    for (key in listSlides) {
        const elem = document.createElement('div');
        elem.classList.add('rooms__slide');
        document.querySelector('.rooms__slider-wrapper').append(elem);

        listSlides[key].forEach(({img, price, title, description, classActive}) => {
            createSlides(img, price, title, description, classActive, elem);
        });
        createDot(parentDots);
        const firstDot = document.querySelector('.rooms__dots-item');
        firstDot.classList.add('active');
    }

    function createSlides(img, price, title, description, classActive, parentSlides) {
        const elem = document.createElement('div');
        elem.classList.add('rooms__item');

        elem.innerHTML = `
            <img class="rooms__item-img" src="img/slider/${img}" alt="">
            <div class="rooms__item-price">
                <img src="img/rooms/rooms-price.png" alt="">
                <div class="rooms__item-price_value">
                    ${price}
                    <span>сум</span>
                </div>
            </div>
            <div class="rooms__item-content ${classActive}">
                <div class="rooms__inform">
                    <div class="rooms__item-title">
                    ${title}
                    </div>
                    <div class="rooms__item-descr">
                        ${description} <b>Цена: ${price}</b>
                    </div>          
                </div>

                <a href="" class="btn btn--order">Забронировать</a>
            </div>
        `;

        parentSlides.append(elem);
    }

    // SLIDER
    const slides = document.querySelectorAll('.rooms__slide'),
          slidesWrapper = document.querySelector('.rooms__slider'),
          width = window.getComputedStyle(slidesWrapper).width,
          slidesField = document.querySelector('.rooms__slider-wrapper');
    
    let offset = 0;
    let slideIndex = 1;

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(item => {
        item.style.width = width;
    });

    function addEventDots() {
        dots = document.querySelectorAll('.rooms__dots-item');
        dots.forEach((item, i) => {
            item.setAttribute('data-slide-to', i + 1);
            item.addEventListener('click', e => {
                const slideTo = e.target.getAttribute('data-slide-to');

                slideIndex = slideTo;
                offset = deleteNotDigits(width) * (slideTo - 1);

                slidesField.style.transform = `translateX(-${offset}px)`;

                dots.forEach(dot => dot.style.backgroundColor = "white");
                dots[slideIndex-1].style.backgroundColor = 'green';

                dot = document.querySelector('.rooms__dots-item');
                dot.classList.add('active');

                slides.forEach((item, i) => {
                    item.querySelectorAll('.rooms__item-content').forEach(item => {
                        item.classList.remove('active');
                    });
                    if (slideTo == i + 1) {
                        item.querySelectorAll('.rooms__item-content').forEach(item => {
                            item.classList.add('active');
                        });
                    }
                })
            });
        });
    }

    addEventDots();

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    function checkSizeAndCreateSlides() {
        const slidesParent = window.getComputedStyle(document.querySelector('.rooms__slide')).width;

        if (slidesParent.match(/\d/g).join('') < 655) {
            const secondSlides = document.querySelectorAll('.rooms__slide');
            
            secondSlides.forEach(item => {
                item.remove();
            });

            slidesField.style.width = '600%';

            for (key in listSlides) {
                listSlides[key].forEach(({img, price, title, description, classActive}) => {
                    const elem = document.createElement('div');
                    elem.classList.add('rooms__slide');
                    document.querySelector('.rooms__slider-wrapper').append(elem);
                    createSlides(img, price, title, description, classActive, elem);

                    if (parentDots.childElementCount != 6) {
                        createDot(parentDots);
                    }
                });
                const firstDot = document.querySelector('.rooms__dots-item');
                firstDot.classList.add('active');
                addEventDots();
            }

        }
    }
    checkSizeAndCreateSlides();

    window.addEventListener('resize', () => {
        checkSizeAndCreateSlides();
    });

    function createDot(parentDots) {
        const elem = document.createElement('div');

        elem.classList.add('rooms__dots-item');
        parentDots.append(elem);
    }


    // MODAL
    const btn = document.querySelectorAll('.btn--order'),
          closeBtn = document.querySelector('.modal__close'),
          modal = document.querySelector('.modal'),
          modalContent = document.querySelector('.modal__dialog'),
          body = document.querySelector('body');

    btn.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            modal.classList.add('modal__show');
            body.classList.add('no-scroll');

            setTimeout(() => {
                modalContent.classList.add('modal__show');
            }, 150);
        });
    });

    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    modal.addEventListener('click', e => {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
    });

    function closeModal() {
        modalContent.classList.remove('modal__show');
        body.classList.remove('no-scroll');

        setTimeout(() => {
            modal.classList.remove('modal__show');
        }, 150);   
    }

    // MAGNIFIC-POPUP
    $('.gallery__content').magnificPopup({
        delegate: 'a',
		type: 'image',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});

});