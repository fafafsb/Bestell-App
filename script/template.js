/**
 * Generates the HTML template for a single dish item.
 * @param {number} i - Index of the dish in the `myDishes` array.
 * @returns {string} HTML string for the dish item.
 */
function getTemplateDishes(i) {
  return `
          <div class="dishes-container pd-16 border-shadow">
            <div class="headline-add-position">
              <h3 id="dishesName">${myDishes[i].name}</h3>
              <div class="add-button">
                <img onclick="addDishesToBasket(${i})" src="./assets/img/plus.png" alt="">
              </div>
            </div>
            <p id="dishesDescription" class="pd-top-bottom-8">
              ${myDishes[i].description}
            </p>
            <p id="dishesPrice" class="price-style">${formatPrice(myDishes[i].price)}</p>
          </div>
          <br>`;
}

/**
 * Generates the HTML template for a headline.
 * @param {number} i - Index of the dish in the `myDishes` array.
 * @returns {string} HTML string for the headline.
 */
function getTemplateHeadline(i) {
  return `
    <div>
      <h2 class="pd-16">${myDishes[i].headline}</h2>
    </div>`;
}

/**
 * Generates the HTML template for an image associated with a headline.
 * @param {number} i - Index of the dish in the `myDishes` array.
 * @returns {string} HTML string for the headline image.
 */
function getTemplateHeadlineImg(i) {
  return `
    <div>
      <img id="headline-${myDishes[i].headImage}" class="image-content border-shadow" src="${myDishes[i].headImage}" alt="" />
    </div>`;
}

/**
 * Generates the HTML template for an empty basket message.
 * @returns {string} HTML string for an empty basket notification.
 */
function getTemplateEmptyBasket() {
  return `
    <br>
    <p class='basket-empty-text'>Ihr Warenkorb ist leer.</p>`;
}

/**
 * Generates the HTML template for a single item in the basket.
 * @param {number} i - Index of the item in the `basket` array.
 * @returns {string} HTML string for a basket item.
 */
function getTemplateBasket(i) {
  return `
    <div class="name-price-amount-position">
      <div class="number-buttons-position">
        <p>${basket[i].name}</p>
        <img onclick="deleteDishes(${basket[i].id})" class="trash" src="./assets/img/trash.png" alt="" />
      </div>
      <p>Einzelpreis: <strong>${formatPrice(basket[i].price)}</strong></p>
      <p>Total: <strong>${formatPrice(basket[i].price * basket[i].quantity)}</strong></p>
      <div class="number-buttons-position">
        <p>Anzahl:</p>
        <div class="remove-quantity-add-position">
          <img onclick="removeDishes(${basket[i].id})" class="plus-minus" src="./assets/img/minus.png" alt="" />
          <span><strong>${basket[i].quantity}</strong></span>
          <img onclick="addDishesToBasket(${basket[i].id})" class="plus-minus" src="./assets/img/plus.png" alt="" />
        </div>
      </div>
    </div>
    <div class="border-basket"></div>`;
}

/**
 * Generates the HTML template for a single item in the responsive basket.
 * @param {number} i - Index of the item in the `basket` array.
 * @returns {string} HTML string for a responsive basket item.
 */
function getTemplateResponsiveBasket(i) {
  return `
    <div class="responsive-name-price-amount-position">
      <div class="responsive-number-buttons-position">
        <p>${basket[i].name}</p>
        <img onclick="deleteDishes(${basket[i].id})" class="responsive-trash" src="./assets/img/trash.png" alt="" />
      </div>
      <p>Einzelpreis: <strong class="number">${formatPrice(basket[i].price)}</strong></p>
      <p>Total: <strong class="number">${formatPrice(basket[i].price * basket[i].quantity)}</strong></p>
      <div class="responsive-number-buttons-position">
        <p>Anzahl:</p>
        <div class="responsive-remove-quantity-add-position">
          <img onclick="removeDishes(${basket[i].id})" class="plus-minus" src="./assets/img/minus.png" alt="" />
          <span><strong>${basket[i].quantity}</strong></span>
          <img onclick="addDishesToBasket(${basket[i].id})" class="plus-minus" src="./assets/img/plus.png" alt="" />
        </div>
      </div>
    </div>
    <div class="border-basket"></div>`;
}

/**
 * Generates the HTML template for the total price section in the basket.
 * @param {number} totalPrice - The calculated total price of the basket items.
 * @param {number} deliveryCosts - The delivery costs.
 * @returns {string} HTML string for the total price section.
 */
function getTotalPriceTemplate(totalPrice, deliveryCosts) {
  return `
    <div class="total-price-container">
      <p>Lieferkosten:<br> <strong>${formatPrice(deliveryCosts)}</strong></p><br>
      <p>Gesamtpreis (inkl. Lieferkosten):<br> <strong>${formatPrice(totalPrice + deliveryCosts)}</strong></p>
    </div><br>
    <div class="basket-buy-container">
      <button onclick="openCart()" class="basket-buy-position">Zur Kasse <img src="./assets/img/shopping-cart.png" alt="" /></button>
    </div><br>`;
}

/**
 * Generates the HTML template for the total price section in the responsive basket.
 * @param {number} totalPrice - The calculated total price of the basket items.
 * @param {number} deliveryCosts - The delivery costs.
 * @returns {string} HTML string for the total price section in the responsive basket.
 */
function getTotalResponsivePriceTemplate(totalPrice, deliveryCosts) {
  return `
    <div class="respnsive-total-price-container">
      <p>Lieferkosten:<br> <strong class="number">${formatPrice(deliveryCosts)}</strong></p><br>
      <p>Gesamtpreis (inkl. Lieferkosten):<br> <strong class="number">${formatPrice(totalPrice + deliveryCosts)}</strong></p>
    </div><br>
    <div class="basket-buy-container">
      <button onclick="openCart()" class="basket-buy-position">Zur Kasse <img src="./assets/img/shopping-cart.png" alt="" /></button>
    </div><br>`;
}