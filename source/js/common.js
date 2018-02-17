//Moдальное окно

var addButton =
document.querySelectorAll('.js-modal-add-button');
var overlay = document.querySelector('.modal__wrapper');
var addModal = document.querySelector('.modal-add');

if (addButton) {
  for (var i = 0; i < addButton.length; i++){
    addButton[i].addEventListener('click', function(evt){
      evt.preventDefault();
      overlay.classList.add('modal__wrapper--show');
      addModal.classList.add('modal-add--show');
    });
  };
};

if (overlay && addModal) {
  window.addEventListener('keydown', function(evt) {
    if (overlay.classList.contains('modal__wrapper--show') && addModal.classList.contains('modal-add--show')) {
      if (evt.keyCode === 27) {
        overlay.classList.remove('modal__wrapper--show');
        addModal.classList.remove('modal-add--show');
      };
    }
  });
}

//выпадающее меню
var menuButton = document.querySelector('.main-nav__toggle');
var menuWrapper = document.querySelectorAll('.main-nav__list');

if ( menuButton.classList.contains('main-nav__toggle--close') && menuWrapper[0].classList.contains('main-nav__list--open')  && menuWrapper[1].classList.contains('main-nav__list--open')  ) {
  menuButton.classList.remove('main-nav__toggle--close');
  menuWrapper[0].classList.remove('main-nav__list--open');
  menuWrapper[1].classList.remove('main-nav__list--open');
};

menuButton.addEventListener('click', function(evt){
  evt.preventDefault();
  menuButton.classList.toggle('main-nav__toggle--close');
  menuWrapper[0].classList.toggle('main-nav__list--open');
  menuWrapper[1].classList.toggle('main-nav__list--open');
})
