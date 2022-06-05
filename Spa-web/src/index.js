// RU
const {ru_index, ru_about, ru_services, ru_contacts, ru_all} = require('./ru-lang');

// EN
const {en_index, en_about, en_services, en_contacts, en_all} = require('./en-lang');

// UZ
const {uz_index, uz_about, uz_services, uz_contacts, uz_all} = require('./uz-lang');

// CHANGE LANGUAGES
const langBtns = document.querySelectorAll('.btn-lang');

const changeLanguage = (lang, btn) => {
    for (let key in lang) {
        changeValuePlace(key, lang[key], btn);
    }
}

const changeValuePlace = (place, value, btn) => {
    if (place.search(/\@/) == '-1') {
        const elem = document.querySelector(`.${place}`),
              btnSend = document.querySelector('input[type="submit"]');

        switch (btn) {
            case 'btnRU':
                btnSend.setAttribute('value', 'Отправить')
                break;
            case 'btnEN':
                btnSend.setAttribute('value', 'Send')
                break;
            case 'btnUZ':
                btnSend.setAttribute('value', 'Yuborish')
                break;
        }

        elem.innerHTML = value;
    } else {
        const elems = document.querySelectorAll(`.${place.replace(/\@/, '')}`);

        elems.forEach(item => {
            item.innerHTML = value;
        })
    }
}

function setDefaultValues() {
    switch (localStorage.getItem('lang')) {
        case 'RU':
            changeLanguage(ru_all);
            definePage('RU');
            break;
        case 'EN':
            changeLanguage(en_all);
            definePage('EN');
            break;
        case 'UZ':
            changeLanguage(uz_all);
            definePage('UZ');
            break;
    }
}

setDefaultValues();

langBtns.forEach(item => {
    item.addEventListener('change', () => {
        switch (item.value) {
            case 'RU':
                localStorage.setItem('lang', 'RU');            
                setDefaultValues();
                setValueSelect();
                break;
            case 'EN':
                localStorage.setItem('lang', 'EN');
                setDefaultValues();
                setValueSelect();
                break;
            case 'UZ':
                localStorage.setItem('lang', 'UZ');
                setDefaultValues();
                setValueSelect();
                break;
        }
    });
});


function definePage(lang) {
    switch (localStorage.getItem('page')) {
        case 'index':
            switch (lang) {
                case 'RU':
                    changeLanguage(ru_index);
                    setValueSelect();                    
                    break;
                case 'EN':
                    changeLanguage(en_index);
                    setValueSelect();                    
                    break;
                case 'UZ':
                    changeLanguage(uz_index);
                    setValueSelect();                    
                    break;
            }
            break;
        case 'about':
            switch (lang) {
                case 'RU':
                    changeLanguage(ru_about);      
                    break;
                case 'EN':
                    changeLanguage(en_about);
                    break;
                case 'UZ':
                    changeLanguage(uz_about);
                    break;
            }
            break;
        case 'services':
            switch (lang) {
                case 'RU':
                    changeLanguage(ru_services);
                    break;
                case 'EN':
                    changeLanguage(en_services);
                    break;
                case 'UZ':
                    changeLanguage(uz_services);   
                    break;
            }
            break;
        case 'contact':
            switch (lang) {
                case 'RU':
                    changeLanguage(ru_contacts, 'btnRU');
                    break;
                case 'EN':
                    changeLanguage(en_contacts, 'btnEN');
                    break;
                case 'UZ':
                    changeLanguage(uz_contacts, 'btnUZ');
                    break;
            }
            break;
    }
}

function setValueSelect() {
    const selectsLang = document.querySelectorAll('select');

    selectsLang.forEach(item => {
        switch (localStorage.getItem('lang')) {
            case 'RU':
                item.value = 'RU'
                break;
            case 'EN':
                item.value = 'EN'
                break;
            case 'UZ':
                item.value = 'UZ'
                break;
        }
    });
}

setValueSelect();

  