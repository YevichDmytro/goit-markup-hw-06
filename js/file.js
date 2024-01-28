(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.forEach(element => {
    element.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.modal.addEventListener('click', removeModal);
  function removeModal(e) {
    if (e.target === e.currentTarget) {
      refs.modal.classList.add('is-hidden');
    }
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
  document
    .querySelector('.title-button')
    .addEventListener('click', toggleOrderServiceModal);
  document
    .querySelector('.modal-button-close')
    .addEventListener('click', toggleOrderServiceModal);
  document
    .querySelector('.backdrop')
    .addEventListener('click', removeOrderServiceModal);
  function toggleOrderServiceModal() {
    document.querySelector('.backdrop').classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  }
  function removeOrderServiceModal(e) {
    const element = document.querySelector('.backdrop');
    if (e.target === element) {
      element.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
  }
})();
