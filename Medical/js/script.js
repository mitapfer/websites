document.addEventListener('DOMContentLoaded', () => {

    // SHADOW
    const shadowElem = document.querySelector('.header_top'),
          heightElem = document.querySelector('.header__content-inner');

    heightElem.style.cssText = `
        margin-top: ${shadowElem.clientHeight}px;
    `;

    function headerFixed() {
        if (document.documentElement.scrollTop >= document.querySelector('.header__content').clientHeight - document.querySelector('.header_top').clientHeight) {
            shadowElem.classList.add('header--shadow');
        } else {
            shadowElem.classList.remove('header--shadow');
        }
    }

    window.addEventListener('scroll', headerFixed);
});