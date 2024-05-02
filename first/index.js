// JavaScript function to add items to the shopping cart
function addToCart(itemName) {
    // You can implement the logic to add items to the shopping cart here
    // For now, let's just update the cart item count
    let cartItemCount = parseInt(document.getElementById('cart-item-count').innerText) || 0;
    cartItemCount++;
    document.getElementById('cart-item-count').innerText = cartItemCount;

    // Create a new cart item element
    let cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.textContent = itemName;

    // Append the new cart item to the cart-items container
    document.getElementById('cart-items').appendChild(cartItem);
}

// Event listener for the "Order Now" buttons
const orderButtons = document.querySelectorAll('.menu_btn');
orderButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Extract the item name from the button's parent menu card
        const itemName = this.parentNode.querySelector('h2').innerText;
        addToCart(itemName); // Add the item to the shopping cart
    });
});
function addToCart(itemName) {
    // Update the cart item count
    let cartItemCount = parseInt(document.getElementById('cart-item-count').innerText) || 0;
    cartItemCount++;
    document.getElementById('cart-item-count').innerText = cartItemCount;

    // Create a new list item for the cart item
    let cartItem = document.createElement('li');
    cartItem.classList.add('cart-item');
    cartItem.textContent = itemName;

    // Append the new list item to the cart item list
    document.getElementById('cart-item-list').appendChild(cartItem);

    // Show the cart items container
    document.getElementById('cart-items').style.display = 'block';
}
