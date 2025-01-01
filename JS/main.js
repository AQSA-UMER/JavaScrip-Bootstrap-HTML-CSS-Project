// Using JS PDF concepts: DOM Manipulation, Data Handling
const foodItems = [
    { id: 1, name: 'Bacon Pizza', price: '$44', image: './Image/food/pizza1.jpg', rating: 4.7, category: 'Pizza' },
    { id: 2, name: 'Chillipaper Pizza', price: '$38', image: './Image/food/pizza2.jpg', rating: 4.6, category: 'Pizza' },
    { id: 3, name: 'Marinara Pizza', price: '$39', image: './Image/food/pizza3.jpg', rating: 4.5, category: 'Pizza' },
    { id: 4, name: 'Coke', price: '$5', image: './Image/food/drink1.jpg', rating: 4.8, category: 'Drink' },
    { id: 5, name: 'Pepsi', price: '$4', image: './Image/food/drink2.jpg', rating: 4.7, category: 'Drink' },
    { id: 6, name: 'Orange Juice', price: '$6', image: './Image/food/drink3.jpg', rating: 4.9, category: 'Drink' },
];

// Rendering food cards dynamically using DOM Manipulation
const foodCardContainer = document.getElementById('food-card-container');

if (foodCardContainer) {
    console.log('Food card container found'); // Log container check
    foodCardContainer.innerHTML = foodItems.map(item => `
        <div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">Price: ${item.price}</p>
                <p class="card-text">Rating: ${item.rating} ⭐</p>
                <button class="btn btn-primary" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
    console.log('Food cards rendered successfully');
} else {
    console.error('Food card container not found');
}

// Placeholder for adding items to the cart
function addToCart(id) {
    console.log(`Item with ID ${id} added to cart`); // Log cart addition
}



// Using Functional Programming: Filtering Items by Category
function filterByCategory(category) {
    console.log(`Filtering by category: ${category}`); // Log the selected category
    const filteredItems = category === 'All'
        ? foodItems // Show all items if "All" is selected
        : foodItems.filter(item => item.category === category);

    console.log('Filtered items:', filteredItems); // Log the filtered results

    // Render the filtered food items
    renderFoodItems(filteredItems);
}

// Function to render food items dynamically
function renderFoodItems(items) {
    const foodCardContainer = document.getElementById('food-card-container');
    foodCardContainer.innerHTML = items.map(item => `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Price: ${item.price}</p>
                    <p class="card-text">Rating: ${item.rating} ⭐</p>
                    <div class="d-flex align-items-center gap-2">
                        <button class="btn btn-primary" onclick="addToCart(${item.id})">Add to Cart</button>
                        <button class="btn btn-outline-danger" onclick="addToWishlist(${item.id})" style="border-radius: 50%;">
                            ❤
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}



// Initial rendering of all items
renderFoodItems(foodItems);

// Functional Programming:
// filter: Filters items based on the selected category.
// map: Maps the filtered data to dynamically generate the HTML structure.
// DOM Manipulation:
// innerHTML: Updates the card container with the filtered items.



// Using JS PDF concepts: DOM Manipulation and Event Listeners

// Menu items for the left sidebar
const menuItems = [
    'About',
    'Services',
    'Cart',
    'Wishlists',
    'Contact',
    'Checkout'
];

// Hunt items for the right sidebar
const huntItems = [
    { name: 'Biryani', image: './Image/food/f1.jpg' },
    { name: 'Chicken', image: './Image/food/f2.jpg' },
    { name: 'Paneer', image: './Image/food/f3.jpg' },
    { name: 'Vegetable', image: './Image/food/f4.jpg' },
    { name: 'Chinese', image: './Image/food/f5.jpg' },
    { name: 'South Indian', image: './Image/food/f6.jpg' },
    { name: 'Pizza', image: './Image/food/f7.jpg' }
];

// Populate left sidebar menu dynamically
const menuItemsContainer = document.getElementById('menu-items');
menuItemsContainer.innerHTML = menuItems.map(item => `
    <li><a href="#${item.toLowerCase().replace(' ', '-')}">${item}</a></li>
`).join('');

// Populate right sidebar hunt items dynamically
const huntItemsContainer = document.getElementById('hunt-items');
huntItemsContainer.innerHTML = huntItems.map(item => `
    <li onclick="filterByHunt('${item.name}')">
        <img src="${item.image}" alt="${item.name}">
        <span>${item.name}</span>
    </li>
`).join('');

// Functionality for right sidebar hunt items
// function filterByHunt(category) {
//     console.log(`Filtering by hunt category: ${category}`); // Log the selected category
//     filterByCategory(category); // Use the existing filter function
// }


// Function to toggle the left sidebar visibility
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar-left');
    sidebar.style.display = sidebar.style.display === 'none' || sidebar.style.display === '' ? 'block' : 'none';
}





// Using DOM Manipulation and Event Handling, Event Listener for "About" option (From JS PDF)
document.querySelector("#menu-items").addEventListener("click", function (e) {
    if (e.target.textContent === "About") {
        console.log("About option clicked"); // Log the event
        const aboutModal = new bootstrap.Modal(document.getElementById("aboutModal"));
        aboutModal.show(); // Show the modal using Bootstrap's JS API
    }
});


// Event Listener for "Services" Option
document.querySelector("#menu-items").addEventListener("click", function (e) {
    if (e.target.textContent === "Services") {
        console.log("Services option clicked"); // Log the event
        const servicesModal = new bootstrap.Modal(document.getElementById("servicesModal"));
        servicesModal.show(); // Show the modal using Bootstrap's JS API
    }
});



// Cart array to store items added by the user
const cart = [];

// Function to add items to the cart
function addToCart(id) {
    const item = foodItems.find(food => food.id === id); // Find the item by ID
    if (item) {
        const existingItem = cart.find(cartItem => cartItem.id === id);
        if (existingItem) {
            existingItem.quantity += 1; // Increase quantity if the item already exists
        } else {
            cart.push({ ...item, quantity: 1 }); // Add the item with initial quantity
        }
        console.log(`Added to cart: ${item.name}`); // Log the added item
        updateCartCount(); // Update the badge count
        updateCartModal(); // Update the modal content dynamically
    } else {
        console.error(`Item with ID ${id} not found`);
    }
}

// Function to update the Cart count on the sidebar
function updateCartCount() {
    const cartMenuItem = document.querySelector("#menu-items a[href='#cart']");
    if (cartMenuItem) {
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0); // Count total quantities
        if (cartCount > 0) {
            // Add a badge with the count
            cartMenuItem.innerHTML = `Cart <span class="badge bg-danger">${cartCount}</span>`;
        } else {
            // Remove the badge if no items are in the cart
            cartMenuItem.innerHTML = "Cart";
        }
    }
}

// Function to calculate total cost of items in the cart
function calculateTotalCost() {
    return cart.reduce((total, item) => total + item.quantity * parseFloat(item.price.slice(1)), 0).toFixed(2);
}

// Function to update the Cart modal dynamically
function updateCartModal() {
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotalCost = document.getElementById('cart-total-cost');

    if (cart.length > 0) {
        // Populate the cart with items, quantity buttons, and Remove button
        cartItemsList.innerHTML = cart
            .map((item, index) => `
                <li class="d-flex justify-content-between align-items-center">
                    <span>${item.name} - $${(item.quantity * parseFloat(item.price.slice(1))).toFixed(2)}</span>
                    <div class="d-flex align-items-center gap-2">
                        <button class="btn btn-sm btn-secondary" onclick="updateQuantity(${index}, -1)">&#60;</button>
                        <span>${item.quantity}</span>
                        <button class="btn btn-sm btn-secondary" onclick="updateQuantity(${index}, 1)">&#62;</button>
                    </div>
                    <button class="btn btn-sm btn-danger ms-2" onclick="removeFromCart(${index})">Remove</button>
                </li>
            `)
            .join('');
    } else {
        cartItemsList.innerHTML = '<li>No items in your cart.</li>';
    }

    // Update total cost
    cartTotalCost.textContent = `Total Cost: $${calculateTotalCost()}`;
}

// Function to update the quantity of an item in the cart
function updateQuantity(index, change) {
    const item = cart[index];
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(index); // Remove the item if quantity is zero or less
        } else {
            updateCartModal(); // Update the modal content dynamically
            updateCartCount(); // Update the badge count
        }
    }
}

// Function to remove an item from the cart
function removeFromCart(index) {
    console.log(`Removing item from cart: ${cart[index].name}`); // Log the item being removed
    cart.splice(index, 1); // Remove the item
    updateCartCount(); // Update the badge count
    updateCartModal(); // Update the modal content dynamically
}

// Event Listener for "Cart" Option
document.querySelector("#menu-items").addEventListener("click", function (e) {
    if (e.target.textContent.trim().includes("Cart")) {
        console.log("Cart option clicked"); // Log the event
        const cartModal = new bootstrap.Modal(document.getElementById("cartModal"));

        // Update the modal content
        updateCartModal();

        // Show the modal
        cartModal.show();
    }
});





// Wishlist array to store items
const wishlist = [];

// Function to add items to the wishlist
function addToWishlist(id) {
    const item = foodItems.find(food => food.id === id); // Find the item by ID
    if (item && !wishlist.includes(item)) {
        wishlist.push(item); // Add the item to the wishlist
        console.log(`Added to wishlist: ${item.name}`); // Log the added item
        updateWishlistCount(); // Update the badge count on the menu
    } else if (wishlist.includes(item)) {
        console.log(`${item.name} is already in your wishlist.`); // Log already in wishlist
    } else {
        console.error(`Item with ID ${id} not found`);
    }
}

// Function to update the Wishlist count on the sidebar
function updateWishlistCount() {
    const wishlistMenuItem = document.querySelector("#menu-items a[href='#wishlists']");
    if (wishlistMenuItem) {
        const wishlistCount = wishlist.length;
        if (wishlistCount > 0) {
            // Add a badge with the count
            wishlistMenuItem.innerHTML = `Wishlists <span class="badge bg-danger">${wishlistCount}</span>`;
        } else {
            // Remove the badge if no items are in the wishlist
            wishlistMenuItem.innerHTML = "Wishlists";
        }
    }
}

// Function to update the Wishlist modal dynamically
function updateWishlistModal() {
    const wishlistItemsList = document.getElementById("wishlist-items-list");
    if (wishlist.length > 0) {
        // Populate the wishlist with items and Remove button
        wishlistItemsList.innerHTML = wishlist
            .map((item, index) => `
                <li class="d-flex justify-content-between align-items-center">
                    <span>${item.name} - ${item.price}</span>
                    <button class="btn btn-sm btn-danger ms-2" onclick="removeFromWishlist(${index})">Remove</button>
                </li>
            `)
            .join('');
    } else {
        wishlistItemsList.innerHTML = '<li>No items in your wishlist.</li>';
    }
}

// Function to remove an item from the wishlist
function removeFromWishlist(index) {
    wishlist.splice(index, 1); // Remove the item
    updateWishlistModal(); // Update the modal content dynamically
    updateWishlistCount(); // Update the badge count on the menu
}

// Event Listener for "Wishlists" Option
document.querySelector("#menu-items").addEventListener("click", function (e) {
    if (e.target.textContent.includes("Wishlists")) {
        console.log("Wishlist option clicked"); // Log the event
        const wishlistModal = new bootstrap.Modal(document.getElementById("wishlistModal"));

        // Update the modal content
        updateWishlistModal();

        // Show the modal
        wishlistModal.show();
    }
});




// Event Listener for "Contact" Option
document.querySelector("#menu-items").addEventListener("click", function (e) {
    if (e.target.textContent.trim() === "Contact") {
        console.log("Contact option clicked"); // Log the event
        const contactModal = new bootstrap.Modal(document.getElementById("contactModal"));

        // Show the modal
        contactModal.show();
    }
});

// Function to validate the contact form
function validateContactForm() {
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    let valid = true;

    // Validate Name
    if (name === "") {
        alert("Name is required.");
        valid = false;
    }

    // Validate Email
    if (email === "") {
        alert("Email is required.");
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Invalid email address.");
        valid = false;
    }

    // Validate Message
    if (message === "") {
        alert("Message is required.");
        valid = false;
    }

    if (valid) {
        console.log("Form Submitted:", { name, email, message }); // Log the submission data
        alert("Thank you for contacting us!");

        // Close the modal
        const contactModal = bootstrap.Modal.getInstance(document.getElementById("contactModal"));
        contactModal.hide();

        // Reset the form
        document.getElementById("contact-form").reset();
    }
}






// Checkout Functionality

// Function to update the Checkout Modal dynamically
function updateCheckoutModal() {
    const checkoutItemsList = document.getElementById("checkout-items-list");
    const checkoutTotalCost = document.getElementById("checkout-total-cost");

    if (cart.length > 0) {
        // Populate the checkout list with items
        checkoutItemsList.innerHTML = cart
            .map((item) => `
                <li class="d-flex justify-content-between align-items-center">
                    <span>${item.name} - ${item.price}</span>
                </li>
            `)
            .join('');
    } else {
        checkoutItemsList.innerHTML = '<li>No items in your cart for checkout.</li>';
    }

    // Update total cost
    checkoutTotalCost.textContent = `Total Cost: $${calculateTotalCost()}`;
}

// Event Listener for "Checkout" Option
document.querySelector("#menu-items").addEventListener("click", function (e) {
    if (e.target.textContent.trim() === "Checkout") {
        console.log("Checkout option clicked");
        const checkoutModal = new bootstrap.Modal(document.getElementById("checkoutModal"));

        // Update modal content
        updateCheckoutModal();

        // Show modal
        checkoutModal.show();
    }
});

// Function to confirm the purchase
document.getElementById("confirmCheckout").addEventListener("click", function () {
    if (cart.length > 0) {
        alert("Thank you for your purchase!");
        cart.length = 0; // Reset the cart
        updateCartModal(); // Update the Cart modal
        updateCheckoutModal(); // Update the Checkout modal
        updateCartCount(); // Reset the cart count
        const checkoutModal = bootstrap.Modal.getInstance(document.getElementById("checkoutModal"));
        checkoutModal.hide(); // Close the Checkout modal
    } else {
        alert("Your cart is empty. Please add items to checkout.");
    }
});



