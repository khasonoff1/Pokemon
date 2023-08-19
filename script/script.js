function findElement(element, parent = document) {
 return document.querySelector(element);
}
const elCards = findElement(".cards");
const elSearchInput = findElement(".form__input");
const elSearchBtn = findElement(".form__btn");

console.log(elCards);
function renderPokemons(array, parent) {
 parent.innerHTML = "";

 array.forEach((element) => {
  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.style.width = "18rem";
  newCard.innerHTML = `
         <div class="card__header">
         <img
          class="card__img"
          src="${element.img}"
         />
        </div>
        <div class="card__body">
         <div class="card__top">
          <h5 class="card__name">${element.name}</h5>
          <i class="fa-regular fa-heart"></i>
         </div>
         <div class="card__desc">
          <div class="card__item">
           <p class="card__type">${element.type}</p>
           <p class="card__type">${element.candy}</p>
          </div>
          <div class="card__datas">
           <p class="card__data">${element.height}</p>
           <p class="card__data">${element.weight}</p>
          </div>
         </div>
        </div>
        <div class="card__footer">
          <button class="btn-edit">edit</button>
          <button data-id="${element.id}" id="delete" class="btn-delete">delete</button>
        </div>
        `;
  parent.appendChild(newCard);
 });
}

// Search

renderPokemons(pokemons, elCards);
elSearchBtn.addEventListener("click", (evt) => {
 const newArray = [];
 pokemons.forEach((pokemons) => {
  if (pokemons.name.toLowerCase().includes(elSearchInput.value.toLowerCase())) {
   newArray.push(pokemons);
  }
 });

 renderPokemons(newArray, elCards);
});

// Delete
elCards.addEventListener("click", function (evt) {
 if (evt.target.id === "delete") {
  console.log(evt.target);
  const id = Number(evt.target.dataset.id);
  const newItems = [];
  for (let i = 0; i < pokemons.length; i++) {
   const Items = pokemons[i];
   if (Items.id !== id) {
    newItems.push(Items);
   }
  }
  pokemons = newItems;
  renderPokemons(pokemons, elCards);
  console.log(newItems.id);
 }
});
