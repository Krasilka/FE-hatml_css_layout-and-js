

function renderProducts(products, sortOrder = 'ascending') {
    const productsContainer = document.querySelector('.product-list');
    const sortedProducts = products.slice()
                            .sort( (a, b) => sortOrder === 'ascending' ? a.price - b.price
                                                                           : b.price - a.price );
    productsContainer.innerHTML = '';
    for (const product of sortedProducts) {
        productsContainer.innerHTML += `
            <article>
                <h3>${product.title}</h3>
                <img src="img/${product.image}" alt="${product.title}">
                <p>${product.description}</p>
                <div class="button-container">
                    <button class="button card-button">Info</button>
                    <button class="button card-button">${product.price} - Buy</button>
                </div>
            </article>`
    }
}

function fetchAndRenderProducts(order) {
    fetch('products.json')
      .then( response => response.json() )
      .then( products => renderProducts(products, order) );
}

fetchAndRenderProducts('ascending');

const sortAscendingButton = document.querySelector('.sort-asc');
const sortDescendingButton = document.querySelector('.sort-desc');

sortAscendingButton.addEventListener('click', sortProductAscending);
sortDescendingButton.addEventListener('click', sortProductDescending);

function sortProductAscending() {
    sortDescendingButton.classList.remove('active');
    sortAscendingButton.classList.add('active');
fetchAndRenderProducts('ascending');
}

function sortProductDescending() {
    sortDescendingButton.classList.add('active');
    sortAscendingButton.classList.remove('active');
    renderProducts(JSON.parse(productsJSON), 'descending');
}
