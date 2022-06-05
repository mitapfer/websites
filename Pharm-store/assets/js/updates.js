document.addEventListener('DOMContentLoaded', () => {

    // Obj with data about products
    const productsObj = [
		{
			img: 'creme.webp',
			title: 'Lightening Cream',
			manafacturer: 'Франция',
			volume: 30,
			quantity: 1,
			price: '148.500',
			category: 'крема',
			id: 1,
		},
		{
			img: 'serum.webp',
			title: 'Lightening Serum',
			manafacturer: 'Франция',
			volume: 30,
			quantity: 1,
			price: '148.500',
			category: 'спреи',
			id: 2,
		},
		{
			img: 'geverlle.webp',
			title: 'Foundation Creame',
			manafacturer: 'Франция',
			volume: 30,
			quantity: 1,
			price: '115.500',
			category: 'крема',
			id: 3,
		},
		{
			img: 'lotion.webp',
			title: 'Anti Hairloss Lotion',
			manafacturer: 'Франция',
			volume: 30,
			quantity: 1,
			price: '181.500',
			category: 'спреи',
			id: 4,
		},
		{
			img: 'hairfortem.webp',
			title: 'Hair Forte M',
			manafacturer: 'Турция',
			volume: 60,
			quantity: 1,
			price: '165.000',
			category: 'спреи',
			id: 5,
		},
		{
			img: 'hairfortew.webp',
			title: 'Hair Forte W',
			manafacturer: 'Турция',
			volume: 60,
			quantity: 1,
			price: '165.000',
			category: 'спреи',
			id: 6,
		},
		{
			img: 'xperciam.webp',
			title: 'Xpecia M',
			manafacturer: 'Турция',
			volume: 60,
			measure: 'таблеток',
			quantity: 1,
			price: '165.000',
			category: 'таблетки',
			id: 7,
		},
        {
			img: 'xpercia.webp',
			title: 'Xpecia W',
			manafacturer: 'Турция',
			volume: 60,
			measure: 'таблеток',
			quantity: 1,
			price: '165.000',
			category: 'таблетки',
			id: 8,
		},
		{
			img: 'sadbe.webp',
			title: 'Sadbe',
			manafacturer: 'Турция',
			volume: 8,
			quantity: 1,
			price: '165.000',
			category: 'спреи',
			id: 9,
		},
		{
			img: 'sadbeforte.webp',
			title: 'Sadbe Forte',
			manafacturer: 'Турция',
			volume: 8,
			quantity: 1,
			price: '176.000',
			сategory: 'спреи',
			id: 10,
		},
		{
			img: 'postopfoam.webp',
			title: 'Postop Foam',
			manafacturer: 'Турция',
			volume: 100,
			quantity: 1,
			price: '220.000',
			category: 'спреи',
			id: 11,
		},
		{
			img: 'vitilexine.webp',
			title: 'Vitilexine',
			manafacturer: 'Франция',
			volume: 30,
			quantity: 1,
			price: '225.500',
			category: 'крема',
			id: 12,
		},
		{
			img: 'lipofiller.webp',
			title: 'Lipo Filler',
			manafacturer: 'Франция',
			volume: 30,
			quantity: 1,
			price: '220.000',
			category: 'спреи',
			id: 13,
		},
		{
			img: 'tranacix.webp',
			title: 'Tranacix',
			manafacturer: 'Франция',
			volume: 30,
			measure: 'гр',
			quantity: 1,
			price: '264.000',
			category: 'крема',
			id: 14,
		},
		{
			img: 'menopecia.webp',
			title: 'Menopecia',
			manafacturer: 'Турция',
			volume: 60,
			measure: 'таблеток',
			quantity: 1,
			price: '165.000',
			category: 'таблетки',
			id: 15,
		}
	];

    let productsCart = JSON.parse(localStorage.getItem('cart'));

    // CART
    const btnsCart = document.querySelectorAll('.products__item-additionally__cart'),
          cart = document.querySelector('.cart__content');

    const drawProduct = ({img, title, manafacturer, volume, measure = 'мл', quantity, price, category, id}) => {
        const elem = document.createElement('div');
        elem.classList.add('products__wrraper');

        elem.innerHTML = `
            <div class="products__item" data-prod="${category}">
                <div class="products__item-img">
                    <img src="assets/img/product/${img}" alt="">
                </div>
                <div class="products__item-info">
                <div class="products__item-title"><b>${title}</b></div>
                <div class="products__item-manufacturer"><b>Производитель:</b> ${manafacturer}</div>
                <div class="products__item-volume"><b>Объем:</b> <span class="color-g">${volume}</span> ${measure}</div>
                <div class="products__item-number"><b>Количество:</b> ${quantity}</div>
                <div class="products__item-additionally">
                    <div class="products__item-additionally__price">${price}</div>
                    <div class="products__item-additionally__cart-trash" id='${id}'>
                        <img src="assets/img/icon/trash.svg" alt="">
                    </div>
                </div>
                </div>  
            </div>
        `;

        try {
            cart.append(elem);
        } catch(error) {
            
        }
    };

    try {
        if (cart.childElementCount < 1) {
            cart.classList.add('clean');
        } else {
            cart.classList.remove('clean');
        }
    } catch(error) {
        
    }


    try {
        if (productsCart == null) {
            productsCart = [];
        } else {
            productsCart.forEach(item => {
                if (item !== null) {
                    drawProduct(JSON.parse(item));
                }
            });
            cart.style.height = '';
        }
    } catch(error) {
        
    }

    const removeProd = idCurrent => {
        productsCart.forEach((item, index) => {
            if (item !== null) {
                const {id} = JSON.parse(item);
                if (idCurrent == id) {
                    productsCart.splice(index, 1);
                }
            }
        });

        localStorage.setItem('cart', JSON.stringify(productsCart));
    };

    let i = 0;
    const setActiveProdAndCount = () => {
        productsCart.forEach(item => {
            if (item !== null) {
                const {id} = JSON.parse(item);
                try {
                    document.getElementById(`${id}`).classList.add('active');
                } catch(error) {
                    
                }
                i++;
            }
        });

        document.querySelectorAll('.badge').forEach(item => {
            item.textContent = `${i}`;
        });
    }
    setActiveProdAndCount();

    btnsCart.forEach(item => {
        item.addEventListener('click', () => {
            const productPage = item.getAttribute('id');

            if (item.classList.contains('active')) {
                removeProd(productPage);
                i--;
                document.querySelectorAll('.badge').forEach(item => {
                    item.textContent = `${i}`;
                });
            } else {
                productsObj.forEach(product => {
                    const {id} = product;
    
                    if (productPage == id) {
                        productsCart.push(JSON.stringify(product));
                    }
                });

                i++;
                document.querySelectorAll('.badge').forEach(item => {
                    item.textContent = `${i}`;
                });
            }

            item.classList.toggle('active');


            localStorage.setItem('cart', JSON.stringify(productsCart));
        });
    });

    // FILTER
    const products = document.querySelectorAll('.products__wrraper'),
          filterBtns = document.querySelectorAll('.products__categories-item');

    const trashBtns = document.querySelectorAll('.products__item-additionally__cart-trash');

    trashBtns.forEach(item => {
        const id = item.getAttribute('id');
        item.addEventListener('click', () => {
            removeProd(id);
            item.parentElement.parentElement.parentElement.remove();
            i--;
            document.querySelectorAll('.badge').forEach(item => {
                item.textContent = `${i}`;
            });
        });
    });

    const filterProducts = btn => {
        btn.addEventListener('click', () => {
            setActiveBtnFilter(btn);
            removeHideClassProducts();

            products.forEach(category => {
                if (btn.getAttribute('data-prod') !== category.getAttribute('data-prod')) {
                    category.classList.add('hide');
                }
                if (btn.getAttribute('data-prod') == 'все') {
                    removeHideClassProducts();
                }
                if (btn.getAttribute('data-prod') == category.getAttribute('data-categ')) {
                    category.classList.remove('hide');
                }
            });
        });
    };

    const removeHideClassProducts = () => {
        products.forEach(item => {
            item.classList.remove('hide');
        });
    };

    const setActiveBtnFilter = current => {
        filterBtns.forEach(item => {
            item.classList.remove('active');
        });

        current.classList.add('active');
    };

    filterBtns.forEach(btn => {
        filterProducts(btn);
    });

	// SEND REQUESTS
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
    const btnModal = document.querySelectorAll('.btn__buy'),
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

    try {
        formBtn.addEventListener('click', e => {
            e.preventDefault();
            closeModal('.modal-message');
        });
    } catch(error) {
        
    }


    const backgroundModal = modalSelector => {
        const modal = document.querySelector(modalSelector);

        try {
            modal.addEventListener('click', e => {
                if (e.target.classList.contains(modalSelector.replace(/\./ig, ''))) {
                    closeModal(modalSelector);
                }
            });
        } catch(error) {
            
        }
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

    try {
        btnModalClose.addEventListener('click', () => closeModal('.modal'));
    } catch(error) {
        
    }

    // CHECK VALUE
    const inputsPhone = document.querySelectorAll('[name="Телефон: "]');

    inputsPhone.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/ig, '');
        });
    });

    // FILTER-ACCORDION
    const btnAccor = document.querySelector('.products__categories-title'),
          parentAccor = document.querySelector('.products__categories');

    try {
        btnAccor.addEventListener('click', () => {
            parentAccor.classList.toggle('short');
        });
    } catch(error) {
        
    }

});
