//Script popap 
const button = document.querySelector('.js-open-modal')
const modalElem = document.querySelector('.modal');
const overlay = document.querySelector('.js-overlay-modal');
const closeButton = document.querySelector('.modal__cross');
const input = document.querySelector('.checkbox');
const buttonToSend = document.querySelector('.button__to-send');
const popapMessage = document.querySelector('.popap__message');

button.addEventListener('click', function(e) {
modalElem.classList.add('active');
     overlay.classList.add('active');
});
closeButton.addEventListener('click', function(e) {
modalElem.classList.remove('active');
    overlay.classList.remove('active');
  });
overlay.addEventListener('click', function() {
    document.querySelector('.modal.active').classList.remove('active');
     overlay.classList.remove('active');
});
      buttonToSend.addEventListener('click', function() {
       modalElem.classList.remove('active');
    overlay.classList.remove('active');
        }); 
