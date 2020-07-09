'use strict';

const modalAdd = document.querySelector('.modal__add'),
    addAd = document.querySelector('.add__ad'),
    modalbtnsubmit = document.querySelector('.modal__btn-submit'),
    modalSubmit = document.querySelector('.modal__submit'),
    catalog = document.querySelector('.catalog'),
    modalItem = document.querySelector('.modal__item');

    addAd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    modalbtnsubmit.disabled = true;
});

const closeModal = (event) => {
const target = event.target;

if (target .classList.contains('modal__close') || target === modalAdd || target === modalIem) {
    modalAdd.classList.add('hide');
    modalItem.classList.add('hide');
    modalSubmit.reset();
}
}


    modalAdd.addEventListener('click', closeModal);
    modalItem.addEventListener('click', closeModal);

    catalog.addEventListener('click', event => {
    const target = event.target;

    if (target.closest('.card')) {
    modalItem.classList.remove('hide');
    }

});

    document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
    modalAdd.classList.add('hide');
    modalItem.classList.add('hide');
}
})