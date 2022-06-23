//Script popap 
const button = document.querySelector('.promo__button')
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

//Comments
class TagsInput {
    textInput;
    buttonInput;
    list;
   
    constructor() {
        this.renderInput();
        this.renderButton();
        this.renderList();
        this.renderComponent();
       
    }

    renderInput() {
        this.textInput = document.createElement('input')
        this.textInput.type = "text";
        this.textInput.className = 'text'
          

    }
    renderButton() {
        this.buttonInput = document.createElement('input')
        this.buttonInput.type = 'button'
        this.buttonInput.className = 'button'
        this.buttonInput.value = "add new teg"
        this.buttonInput.onclick = () => { this.buttonAddTegToLocalStorage(); this.remoteTextInput(); this.tagsDraw () }

    }
    renderList() {
        this.list = document.createElement('ol')
        this.list.className = 'tags-area'
       
    }
  
    renderComponent() {
        let div = document.getElementById('component')
        div.append(this.textInput)
        document.getElementById('component').append(this.buttonInput)
        document.getElementById('component').append(this.checkboxInput)
        document.getElementById('component').append(this.list)
    }


    buttonAddTegToLocalStorage() {
        const value = this.textInput.value;
        const tagsStr = localStorage.getItem('input');
        const tags = JSON.parse(tagsStr) || [];
        tags.push(value)
        localStorage.setItem('input', JSON.stringify(tags))
       
    }
    remoteTextInput() {
        this.textInput.value = ""
    }

    tagsDraw () {
        const tegLi = document.createElement('li');
        const tagsStr = localStorage.getItem('input');
        const tags = JSON.parse(tagsStr);
        const arrLi = []
        tegLi.className = "new-teg";
        tegLi.append(tags[tags.length - 1]);
        console.log(tegLi)
        this.list.append(tegLi)
        arrLi.push(tegLi)
        console.log(arrLi)
    }
   
}
window.onload = () => { new TagsInput() }
