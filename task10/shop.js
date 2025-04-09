document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const searchInput = document.getElementById("searchInput");

    // Load cart from localStorage or initialize as empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Load products from JSON file
    async function loadProducts() {
        try {
            const response = await fetch("product.json");
            const products = await response.json();
            renderProducts(products);
            setupSearch(products);
        } catch (error) {
            console.error("Error loading products:", error);
            productList.innerHTML = "<p>Failed to load products.</p>";
        }
    }

    // Render products into the DOM
    function renderProducts(products) {
        productList.innerHTML = ""; // Clear any existing content

        products.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("product-card");

            card.innerHTML = `
                <img src="${product.img}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p class="price">${product.price}</p>
                <div><button>Add to Cart</button>
                <input type="text" class="dims" placeholder="enter dimension"></div>
                <p class="note">Default dimensions: 50x50</p>
             `;

            const button = card.querySelector("button");
            const dimInput = card.querySelector(".dims");
            button.addEventListener("click", () => {
                const dim = dimInput.value.trim();
                const productToAdd = {
                    title: product.title,
                    price: product.price,
                    img: product.img,
                    dimensions: dim
                };

                cart.push(productToAdd);
                localStorage.setItem("cart", JSON.stringify(cart));
                window.location.href = "cart.html";
            });

            productList.appendChild(card);
        });
    }

    // Setup search filtering
    function setupSearch(products) {
        searchInput.addEventListener("input", () => {
            const keyword = searchInput.value.toLowerCase();
            const filtered = products.filter(p =>
                p.title.toLowerCase().includes(keyword)
            );
            renderProducts(filtered);
        });
    }

    // Start it all
    loadProducts();
});
