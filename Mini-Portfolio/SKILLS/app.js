const burgerMenu = $("#navToggle");
const modalCall = $("[data-modal]");
const сloseButton = $("#close");
const сloseButtonSecond = $(".close");
const body = $("body");
const modalModal = $(".modal");
const menuMenu = $(".nav_menu");
const section = $(".progress_bar");

// Вызов и закрытие меню
burgerMenu.on("click", function() {
    event.preventDefault();
    body.toggleClass("no-scroll");
    menuMenu.attr('data-check', function (index, attr) {
        return attr == 'true' ? 'false' : 'true';
    });
    menuMenu.toggleClass("showMenu");
    section.toggleClass("mask"); 
    if (modalModal.attr('data-check') == 'true') {
        modalModal.removeClass("showModal");
        body.addClass("no-scroll");
        section.addClass("mask");
        modalModal.attr('data-check', 'false'); 
    }
});
сloseButtonSecond.on("click", function() {
    body.removeClass("no-scroll");
    menuMenu.removeClass("showMenu");
    section.removeClass("mask");
    menuMenu.attr('data-check', 'false');   
});

// Вызов и закрытие модального окна
modalCall.on("click", function() {
    event.preventDefault();
    body.toggleClass("no-scroll");
    modalModal.attr('data-check', function (index, attr) {
        return attr == 'true' ? 'false' : 'true';
    });
    modalModal.toggleClass("showModal");
    section.toggleClass("mask");
    if (menuMenu.attr('data-check') == 'true') {
        menuMenu.removeClass("showMenu");
        body.addClass("no-scroll");
        section.addClass("mask");
        menuMenu.attr('data-check', 'false');    
    }
});
сloseButton.on("click", function() {
    body.removeClass("no-scroll");
    modalModal.removeClass("showModal");
    section.removeClass("mask");
    modalModal.attr('data-check', 'false');
});

section.on("click", function() {
    modalModal.removeClass("showModal").attr('data-check', 'false');
    menuMenu.removeClass("showMenu").attr('data-check', 'false');
    body.removeClass("no-scroll");
    section.removeClass("mask");
});





// // Вызов и закрытие меню
// burgerMenu.on("click", function() {
//     event.preventDefault();
//     body.toggleClass("no-scroll");
//     menuMenu.toggleClass("showMenu");
//     const modal = $(".modal").outerWidth(true);
//     if (modal === 860||modal === 805||modal === 750) {
//         modalModal.removeClass("showModal");
//         body.addClass("no-scroll"); 
//     }
// });
// сloseButtonSecond.on("click", function() {
//     body.removeClass("no-scroll");
//     menuMenu.removeClass("showMenu");  
// });

// // Вызов и закрытие модального окна
// modalCall.on("click", function() {
//     event.preventDefault();
//     body.toggleClass("no-scroll");
//     modalModal.toggleClass("showModal");
//     const menu = $(".nav_menu").outerWidth(true);
//     if (menu === 360) {
//         menuMenu.removeClass("showMenu");
//         body.addClass("no-scroll");  
//     }
// });
// сloseButton.on("click", function() {
//     body.removeClass("no-scroll");
//     modalModal.removeClass("showModal");
// });

// section.on("click", function() {
//     modalModal.removeClass("showModal");
//     menuMenu.removeClass("showMenu");
//     body.removeClass("no-scroll");
// });