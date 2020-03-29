const modalElement = document.getElementById('modal');
const modalContent = document.querySelector('.modal__content');
const modalCloseButton = document.querySelector('.modal__close-button');
const modalLinkElement = document.getElementsByClassName('contact-us');

Array.from(modalLinkElement).forEach(function(element) {
  element.addEventListener('click', ev => {
     modalElement.classList.add('open');
  });
});

modalCloseButton.addEventListener("click", ev => {
    modalElement.classList.remove('open');
});

modalElement.addEventListener("click", ev => {
    modalElement.classList.remove('open');
});

modalContent.addEventListener("click", ev => {
    ev.stopPropagation();
});

class Api {
  static async getModalInfo() {
    try {
      const response = await axios.get('https://tools.dps.sh/frontend-application-test/modal-content.json');
      modalContent.innerHTML = response.data.data.content;
    } catch (err) {
      console.log('Request error');
    }
  }
}

Api.getModalInfo();