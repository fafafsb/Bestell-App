/**
 * @type {number} Total price of items in the basket.
 */
let totalPrice = 0;

/**
 * @type {number} Cost of delivery for the order.
 */
let deliveryCosts = 4.00;

/**
 * Initializes the application by rendering dishes and basket content.
 */
function init() {
  renderDishes();
  renderBasket();
  renderResponsiveBasket();
}

/**
 * Opens the shopping cart overlay.
 */
function openCart() {
  document.getElementById('overlay').style.display = 'block';
  resetCart();
}

/**
 * Closes the shopping cart overlay.
 */
function offCart() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('myNav').style.height = '0%';
  closeCartResponsive();
}

/**
 * Toggles the visibility of the responsive shopping cart overlay.
 */
function openCartResponsive() {
  let openCartRef = document.getElementById('myNav');
  if (openCartRef.style.height === '100%') {
    openCartRef.style.height = '0';
    document.body.classList.remove('no-scroll');
  } else {
    openCartRef.style.height = '100%';
    document.body.classList.add('no-scroll');
  }
}

/**
 * Closes the responsive shopping cart overlay.
 */
function closeCartResponsive() {
  let openCartRef = document.getElementById('myNav');
  openCartRef.style.height = '0';
  document.body.classList.remove('no-scroll');
}

/**
 * Resets the shopping basket by clearing all items and updating the view.
 */
function resetCart() {
  basket = [];
  renderBasket();
  renderResponsiveBasket();
}

/**
 * Formats a number as a price in CHF.
 * @param {number} price - The price to format.
 * @returns {string} Formatted price string.
 */
function formatPrice(price) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'CHF'
  }).format(price);
}

/**
 * Renders all dishes in the UI.
 */
function renderDishes() {
  let dishesRef = document.getElementById('content');
  dishesRef.innerHTML = "";
  for (let i = 0; i < myDishes.length; i++) {
    if (myDishes[i].headline) {
      dishesRef.innerHTML += getTemplateHeadlineImg(i);
      dishesRef.innerHTML += getTemplateHeadline(i);
    }
    dishesRef.innerHTML += getTemplateDishes(i);
  }
}

/**
 * Renders the content of the shopping basket in the main view.
 */
function renderBasket() {
  let basketRef = document.getElementById('basket-container-render');
  basketRef.innerHTML = "";
  let totalPrice = 0;
  for (let i = 0; i < basket.length; i++) {
    basketRef.innerHTML += getTemplateBasket(i); 
    totalPrice += basket[i].price * basket[i].quantity;
  } if (basket.length > 0) {
    basketRef.innerHTML += getTotalPriceTemplate(totalPrice, deliveryCosts);
  } else {
    basketRef.innerHTML += getTemplateEmptyBasket();
  }
}

/**
 * Renders the content of the shopping basket in the responsive view.
 */
function renderResponsiveBasket() {
  let responsiveBasketRef = document.getElementById('basket-render-container');
  responsiveBasketRef.innerHTML = "";
  let totalPrice = 0;
  for (let i = 0; i < basket.length; i++) {
    responsiveBasketRef.innerHTML += '<a class="closebtn" onclick="closeCartResponsive()">&times;</a>' + getTemplateResponsiveBasket(i);
    totalPrice += basket[i].price * basket[i].quantity;
  } if (basket.length > 0) {
    responsiveBasketRef.innerHTML += getTotalResponsivePriceTemplate(totalPrice, deliveryCosts);
  } else {
    responsiveBasketRef.innerHTML = '<a class="closebtn" onclick="closeCartResponsive()">&times;</a>' + getTemplateEmptyBasket();
  }
}

/**
 * Adds a dish to the basket by ID. Increments the quantity if already in the basket.
 * @param {number} id - The ID of the dish to add.
 */
function addDishesToBasket(id) {
  let dish = myDishes.find(item => item.id === id);
  let existingDish = basket.find(item => item.id === id);
  if (existingDish) {
    existingDish.quantity++;
  } else {
    basket.push({ ...dish, quantity: 1 });
  }
  renderBasket();
  renderResponsiveBasket();
}

/**
 * Decreases the quantity of a dish in the basket or removes it if the quantity is 1.
 * @param {number} id - The ID of the dish to remove.
 */
function removeDishes(id) {
  let dishIndex = basket.findIndex(item => item.id === id);
  if (dishIndex !== -1) {
    if (basket[dishIndex].quantity > 1) {
      basket[dishIndex].quantity--;
    } else {
      basket.splice(dishIndex, 1);
    }
  }
  renderBasket();
  renderResponsiveBasket();
}

/**
 * Removes a dish from the basket entirely by ID.
 * @param {number} id - The ID of the dish to delete.
 */
function deleteDishes(id) {
  basket = basket.filter(item => item.id !== id);
  renderBasket();
  renderResponsiveBasket();
}