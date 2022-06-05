document.addEventListener('DOMContentLoaded', () => {

    const btnForm = document.querySelectorAll('.form__button'),
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
            showModalMessage('.modal-message', messages.success);
            if (!data.ok) {
                showModalMessage('.modal-message', messages.error);
            }
        })
        .catch(() => {
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
    const btnModal = document.querySelectorAll('.btn__buy');

    const showModalMessage = (modalSelector, message = messages.success, time = true) => {
        const modal = document.querySelector(modalSelector);
        modal.classList.add('modal__show');
        body.classList.add('no-scroll');
        modalTitleMessage.innerHTML = message;
        if (time == true) {
            setTimeout(() => closeModal('.modal-message'), 2500);
        }
    };

    try {
        formBtn.addEventListener('click', e => {
            e.preventDefault();
            closeModal('.modal-message');
        });
    } catch (error) {
        
    }

    const backgroundModal = modalSelector => {
        const modal = document.querySelector(modalSelector);

        try {
            modal.addEventListener('click', e => {
                if (e.target.classList.contains(modalSelector.replace(/\./ig, ''))) {
                    closeModal(modalSelector);
                }
            });
        } catch (error) {
            
        }
    }

    backgroundModal('.modal-message');

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

    // CHECK VALUE
    const inputsPhone = document.querySelectorAll('[name="Телефон: "]');

    inputsPhone.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/ig, '');
        });
    });

});