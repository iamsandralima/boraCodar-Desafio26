
// Função que será executada ao clicar no botão "Menos"
function decreaseQuantity() {
  let recipesQuantity = document.querySelector('.recipesQuantity');
  let quantity = parseInt(recipesQuantity.textContent);

  if (quantity > 1) {
    quantity--;
    recipesQuantity.textContent = quantity.toString().padStart(2, '0');
    updateIngredients(quantity);
  }
}

// Função que será executada ao clicar no botão "Mais"
function increaseQuantity() {
  let recipesQuantity = document.querySelector('.recipesQuantity');
  let quantity = parseInt(recipesQuantity.textContent);

  if (quantity < 99) {
    quantity++;
    recipesQuantity.textContent = quantity.toString().padStart(2, '0');
    updateIngredients(quantity);
  }
}

// Atualiza as quantidades dos ingredientes
function updateIngredients(quantity) {
  let spoon = quantity > 1 ? 'colheres' : 'colher';
  let ingredientItems = document.querySelectorAll('#ingredients li');

  ingredientItems[0].textContent = `${quantity} espigas de milho verde`;
  ingredientItems[1].textContent = `${quantity} colheres de sopa de açúcar`;
  ingredientItems[2].textContent = `${quantity} ${spoon} de manteiga`;
  ingredientItems[3].textContent = `${quantity} ${spoon} (café) de sal`;
}

// Adiciona os ouvintes de eventos aos botões
document.querySelector('.less').addEventListener('click', decreaseQuantity);
document.querySelector('.more').addEventListener('click', increaseQuantity);
