import dataRu from './ru-lang';
import dataEn from './en-lang';

document.addEventListener('DOMContentLoaded', () => {

    // const sliderClients = tns({
    //     container: '.clients__slider',
    //     items: 4,
    //     gutter: 20,
    //     controlsPosition: 'bottom',
    //     controlsContainer: '.slider__control--clients',
    //     nav: false,
    //     speed: 450,
    //     mouseDrag: true,
    //     autoWidth: true

    // });

    // ACCORDION
    // const accordionsItems = document.querySelectorAll('.clients__questions-item');

    // accordionsItems.forEach(item => {
    //     item.addEventListener('click', () => {
    //         if (item.getAttribute('show') == 'false') {
    //             item.style.height = item.scrollHeight + 'px';
    //             item.setAttribute('show', 'true');
    //         } else {
    //             item.style.height = '70px';
    //             item.setAttribute('show', 'false');
    //         }
    //     });
    // });

    // SEND REQUESTS
    const btnForm = document.querySelectorAll('.btn--request'),
      form = document.querySelectorAll('form'),
      modalTitleMessage = document.querySelector('.modal-message__title'),
      formBtn = document.querySelector('.form__btn'),
      body = document.querySelector('body');

    const messages = {
        success: 'Спасибо! Мы обязательно с вами свяжемся.',
        error: 'Ой, что-то пошло не так...'
    };

    const messagesEn = {
        success: 'Thank you! We will definitely contact you.',
        error: 'Oh, something went wrong ...'
    };

    const postData = async (data, currentForm) => {
        fetch('telegram.php', {
            method: "POST",
            body: JSON.stringify(data)
        })
        .then((data) => {
            closeModal('.modal');
            if (localStorage.getItem('lang') == 'EN') {
                showModalMessage('.modal-message', messagesEn.success);
            } else {
                showModalMessage('.modal-message', messages.success);
            }
            if (!data.ok) {
                closeModal('.modal');
                if (localStorage.getItem('lang') == 'EN') {
                    showModalMessage('.modal-message', messagesEn.error);
                } else {
                    showModalMessage('.modal-message', messages.error);
                }
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
    const btnModal = document.querySelectorAll('.btn--modal'),
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
        item.addEventListener('click', () => {
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

    // CHANGE LANGUAGE
    const langBtn = document.querySelector('select');

    const changeLanguage = lang => {
        for (let key in lang) {
            changeValuePlace(key, lang[key]);
        }
    }

    const changeValuePlace = (place, value) => {
        if (place.search(/\@/) == '-1') {
            const elem = document.querySelector(`.${place.replace(/\d\_\d/, '-')}`);

            if (elem.getAttribute('placeholder') == 'Ваше сообщение') {
                elem.setAttribute('placeholder', 'Your message');
            } else if (elem.getAttribute('placeholder') == 'Your message') {
                elem.setAttribute('placeholder', 'Ваше сообщение');
            }

            elem.innerHTML = value;
        } else {
            const newPlace = place.replace(/\d\_\d/, '-');
            const elems = document.querySelectorAll(`.${newPlace.replace(/\@/, '')}`);
            elems.forEach(item => {
                if (item.getAttribute('placeholder') == 'Имя') {
                    item.setAttribute('placeholder', 'Name');
                } else if (item.getAttribute('placeholder') == 'Name') {
                    item.setAttribute('placeholder', 'Имя');
                }
                
                if (item.getAttribute('placeholder') == 'Телефон') {
                    item.setAttribute('placeholder', 'Phone');
                } else if (item.getAttribute('placeholder') == 'Phone') {
                    item.setAttribute('placeholder', 'Телефон');
                }

                if (item.getAttribute('placeholder') !== 'Ваше сообщение' && item.getAttribute('placeholder') !== 'Your message') {
                    item.innerHTML = value;
                }
            })
        }
    }

    if (localStorage.getItem('lang') == null) {
        localStorage.setItem('lang', 'RU');
    }
    
    langBtn.addEventListener('change', () => {
        if (langBtn.value == 'RU') {
            localStorage.setItem('lang', 'RU');
            changeLanguage(dataRu);

            window.location.reload();
        } else {
            localStorage.setItem('lang', 'EN');
            changeLanguage(dataEn);

            window.location.reload();
        }
    });

    if (localStorage.getItem('lang') == 'RU') {
        changeLanguage(dataRu);
        langBtn.value = 'RU';
    } else {
        changeLanguage(dataEn);
        langBtn.value = 'EN';
    }

    // SLIDERS
    const sliderRegistration = tns({
        container: '.registration__slider',
        items: 3,
        slideBy: 1,
        gutter: 20,
        controlsPosition: 'bottom',
        controlsContainer: '.slider__control--registration',
        nav: false,
        speed: 450,
        mouseDrag: true,
        responsive: {
            860: {
              items: 3
            },
            490: {
                items: 2
            },
            310: {
                items: 1
            }
          }
    });

    const slider = tns({
        container: '.slider__inner',
        items: 1,
        gutter: 20,
        controlsPosition: 'bottom',
        controlsContainer: '.slider__control',
        nav: false,
        speed: 450,
        mouseDrag: true
    });


});


// const obj = {
//     'name': 'Ivan',
//     'slider': {
//         'first': 1
//     }
// }

// for (let b in obj) {
//     console.log(typeof obj[b]);
// }