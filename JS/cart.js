// document.addEventListener("DOMContentLoaded", function () {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];

//     const cartContainer = document.getElementById("cart-products");

//     if (cart.length > 0) {
//         cartContainer.innerHTML = cart.map(product => `
//             <div class="cart">
//                 <img src="${product.image}" alt="${product.title}">
//                 <div>
//                     <h2>${product.newtitle || product.title}</h2>
//                     <p>Category: ${product.category}</p>
//                     <p>Price: $${product.price}</p>
//                 </div>
//             </div>
//         `).join(""); 
//     } else {
//         cartContainer.innerHTML = "<p>No products in the cart.</p>";
//     }
// });



// document.addEventListener("DOMContentLoaded", function () {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const cartContainer = document.getElementById("cart-products");
//     const totalPriceElement = document.getElementById("total-price"); // Create this in your HTML

//     function renderCart() {
//         if (cart.length > 0) {
//             cartContainer.innerHTML = cart.map((product, index) => `
//                 <div class="cart">
//                     <img src="${product.image}" alt="${product.title}">
//                     <div>
//                         <h2>${product.newtitle || product.title}</h2>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                         <p>Category: ${product.category}</p>
//                         <p>Price: $${product.price}</p>
//                         <p>Rating: ${product.rate}</p>
//                         <div class="quantity-controls">
//                             <button class="decrease" data-index="${index}">−</button>
//                             <span>${product.quantity || 1}</span>
//                             <button class="increase" data-index="${index}">+</button>
//                         </div>
//                     </div>
//                 </div>
//             `).join("");

//             updateTotalPrice();
//         } else {
//             cartContainer.innerHTML = "<p>No products in the cart.</p>";
//             totalPriceElement.textContent = "$0.00";
//         }
//     }

//     function updateTotalPrice() {
//         const total = cart.reduce((sum, product) => sum + (product.price * (product.quantity || 1)), 0);
//         totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
//     }

//     cartContainer.addEventListener("click", function (e) {
//         const index = e.target.dataset.index;
//         if (index !== undefined) {
//             if (e.target.classList.contains("increase")) {
//                 cart[index].quantity = (cart[index].quantity || 1) + 1;
//             } else if (e.target.classList.contains("decrease")) {
//                 cart[index].quantity = Math.max((cart[index].quantity || 1) - 1, 1);
                
//             }
//             if (cart[index].quantity <= 0) {
//                 cart.splice(index, 1);
//             }
//          else if (e.target.classList.contains("remove")) {
//             cart.splice(index, 1); // Remove the product manually
//         }
//             localStorage.setItem("cart", JSON.stringify(cart));
//             renderCart();
//         }
//     });

//     renderCart();
// });


document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-products");
    const totalPriceElement = document.getElementById("total-price"); // Create this in your HTML

    function renderCart() {
        if (cart.length > 0) {
            cartContainer.innerHTML = cart.map((product, index) => `
                <div class="cart" data-index="${index}">
                    <img src="${product.image}" alt="${product.title}">
                    <div>
                        <h2>${product.newtitle || product.title}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Category: ${product.category}</p>
                        <p>Price: $${product.price}</p>
                        <p>Rating: ${product.rate}</p>
                        <div class="quantity-controls">
                            <button class="decrease rounded-circle " data-index="${index}">−</button>
                            <span>${product.quantity || 1}</span>
                            <button class="increase rounded-circle " data-index="${index}">+</button>
                            <button class="remove btn" data-index="${index}">Delete</button>
                        </div>
                    </div>
                </div>
            `).join("");

            updateTotalPrice();
        } else {
            cartContainer.innerHTML = "<p>No products in the cart.</p>";
            totalPriceElement.textContent = "Total Price: $0.00";
        }
    }

    function updateTotalPrice() {
        const total = cart.reduce((sum, product) => sum + (product.price * (product.quantity || 1)), 0);
        totalPriceElement.textContent = `Total Price: $${total.toFixed(2)}`;
    }

    cartContainer.addEventListener("click", function (e) {
        const index = e.target.dataset.index;
        if (index !== undefined) {
            if (e.target.classList.contains("increase")) {
                cart[index].quantity = (cart[index].quantity || 1) + 1;
            } else if (e.target.classList.contains("decrease")) {
                cart[index].quantity = (cart[index].quantity || 1) - 1;

                // If quantity is 0, remove the product
                if (cart[index].quantity <= 0) {
                    cart.splice(index, 1);
                }
            } else if (e.target.classList.contains("remove")) {
                cart.splice(index, 1); // Remove the product manually
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        }
    });

    renderCart();
});


