
// Open modal
// $('.btn--order').on('click', function(event) {
//     event.preventDefault(); 
//     $('.modal').addClass('modal__show');
//     $('body').addClass('no-scroll');
//     setTimeout(function() {
//         $(".modal__dialog").css({
//             transform: "scale(1)"
//         });
//     }, 150);
// });

// // Close modal
// $('.modal__close').on('click', function() {
//     $('.modal__dialog').css({
//         transform: "scale(0)"
//     });
//     setTimeout(function() {
//         $('.modal').removeClass('modal-order-show');
//         $('body').removeClass('no-scroll');
//     }, 150);
// });

// $('.modal').on('click', function() {
//     $('.modal__dialog').css({
//         transform: "scale(0)"
//     });
//     setTimeout(function() {
//         $('.modal').removeClass('modal__show');
//         $('html').removeClass('no-scroll');
//     }, 150);
// });

// $(".modal__dialog").on("click", function(event) {
//         event.stopPropagation();
// });

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