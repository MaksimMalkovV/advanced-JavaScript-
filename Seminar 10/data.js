const findContent = document.querySelector('.content');
findContent.classList.add('center');

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(item => item.products.forEach(product => {
        console.log(item.products);

        const productCard = document.createElement('div');
        productCard.classList.add('product_card');
        findContent.append(productCard);

        const productImage = document.createElement('img');
        productImage.classList.add('product__image');
        productImage.src = product.images[0];
        productCard.append(productImage);

        const productContentBox = document.createElement('div');
        productContentBox.classList.add('product__content-box');
        productCard.append(productContentBox);

        const productTitle = document.createElement('h2');
        productTitle.classList.add('product__title');
        productTitle.textContent = product.title;
        productContentBox.append(productTitle);

        const productDescription = document.createElement('p');
        productDescription.classList.add('product__description');
        productDescription.textContent = product.description;
        productContentBox.append(productDescription);

        const productPrice = document.createElement('p');
        productPrice.classList.add('product__price');
        productPrice.textContent = `price: ${product.price} $`;
        productContentBox.append(productPrice);

        const productRating = document.createElement('p');
        productRating.classList.add('product__rating');
        productRating.textContent = `rating: ${product.rating}`;
        productContentBox.append(productRating);

        const productStock = document.createElement('p');
        productStock.classList.add('product__stock');
        productStock.textContent = `stock: ${product.stock}`;
        productContentBox.append(productStock);

        const productBrand = document.createElement('p');
        productBrand.classList.add('product__brand');
        productBrand.textContent = `brand: ${product.brand}`;
        productContentBox.append(productBrand);

        const productCategory = document.createElement('p');
        productCategory.classList.add('product__category');
        productCategory.textContent = `category: ${product.category}`;
        productContentBox.append(productCategory);

        const productId = document.createElement('p');
        productId.classList.add('product__id');
        productId.textContent = `id: ${product.id}`;
        productContentBox.append(productId);

    }));