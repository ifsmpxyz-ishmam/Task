
      
const searchInput = document.getElementById('search-input');
let allProducts = [];

async function loadProducts() {
    const response = await fetch('/.netlify/functions/getProducts');
    const products = await response.json();
    allProducts = products;
    renderProducts(allProducts);
}

function renderProducts(products) {
    productContainer.innerHTML = "";
    products.forEach(product => {
        const card = createProductCard(product);
        productContainer.appendChild(card);
    });
}

searchInput.addEventListener('input', (debounced) => {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = allProducts.filter(product =>
        product.fields.Name.toLowerCase().includes(searchTerm)
    );
    renderProducts(filtered);
});

loadProducts();