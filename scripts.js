const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for(let card of cards) {
  card.addEventListener("click", function(){
    const image = card.getAttribute("id");
    const title = card.querySelector(".card__title").id;
    const creator = card.querySelector(".card__owner").id;
    modalOverlay.classList.add('active');
    modalOverlay.querySelector("img").src = `./assets/${image}`;
    modalOverlay.querySelector(".modal__title").innerHTML = `<p>${title}</p>`;
    modalOverlay.querySelector(".modal__owner").innerHTML = `<p>${creator}</p>`;
  })
};

document.querySelector(".close-modal").addEventListener("click", function(){
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector("img").src = "";
  modalOverlay.querySelector(".modal__title").innerHTML = "";
  modalOverlay.querySelector(".modal__owner").innerHTML = "";
});
