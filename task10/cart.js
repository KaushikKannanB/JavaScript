const cartitems = document.getElementById("cart-items");
const carttotal = document.getElementById("cart-total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    cartitems.innerHTML = ""; // Clear current list
    let total = 0;

    if (cart.length === 0) {
        cartitems.innerHTML = "<p>Cart is still empty</p>";
        carttotal.innerText = "Total: $0.00";
        return;
    }

    cart.forEach((product, index) => {
        const item = document.createElement("div");
        item.classList.add("cart-item");

        const valprice = parseFloat(product.price.replace("$", ""));
        total += valprice;

        item.innerHTML = `
            <img src="${product.img}" alt="${product.title}">
            <div>
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="remove-btn" data-index="${index}">Remove</button>
            </div>
        `;

        cartitems.appendChild(item);
    });

    carttotal.innerText = `Total: $${total.toFixed(2)}`;

    setupRemoveButtons();
}

function setupRemoveButtons() {
    const removeBtns = document.querySelectorAll(".remove-btn");
    removeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const index = btn.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart(); // Re-render cart
        });
    });
}


renderCart();
