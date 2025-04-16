const products = [
  {
    id: 1,
    title: "Men's T-Shirt",
    category: "Men",
    image: "../images/New folder/1.jpg",
    rate: 4.5,
    price: 19.99
  },
  {
    id: 2,
    title: "Women's Blouse",
    category: "Women",
    image: "../images/New folder/2.jpg",
    rate: 4.2,
    price: 24.99
  },
  {
    id: 3,
    title: "Men's Jeans",
    category: "Men",
    image: "../images/New folder/3.webp",
    rate: 4.3,
    price: 39.99
  },
  {
    id: 4,
    title: "Women's Dress",
    category: "Women",
    image: "../images/New folder/4.avif",
    rate: 4.8,
    price: 59.99
  },
  {
    id: 5,
    title: "Kid's T-Shirt",
    category: "Kids",
    image: "../images/New folder/5.jpg",
    rate: 4.6,
    price: 12.99
  },
  {
    id: 6,
    title: "Men's Jacket",
    category: "Men",
    image: "../images/New folder/6.webp",
    rate: 4.7,
    price: 79.99
  },
  {
    id: 7,
    title: "Women's Skirt",
    category: "Women",
    image: "../images/New folder/7.webp",
    rate: 4.4,
    price: 34.99
  },
  {
    id: 8,
    title: "Kid's Shorts",
    category: "Kids",
    image: "../images/New folder/8.webp",
    rate: 4.5,
    price: 14.99
  },
  {
    id: 9,
    title: "Men's Hoodie",
    category: "Men",
    image: "../images/New folder/9.jpg",
    rate: 4.6,
    price: 49.99
  },
  {
    id: 10,
    title: "Women's Tank Top",
    category: "Women",
    image: "../images/New folder/10.webp",
    rate: 4.3,
    price: 19.99
  },
  {
    id: 11,
    title: "Kid's Hoodie",
    category: "Kids",
    image: "../images/New folder/11.webp",
    rate: 4.7,
    price: 29.99
  },
  {
    id: 12,
    title: "Men's Shoes",
    category: "Men",
    image: "../images/New folder/12.jpg",
    rate: 4.8,
    price: 69.99
  },
  {
    id: 13,
    title: "Women's Heels",
    category: "Women",
    image: "../images/New folder/13.jpg",
    rate: 4.5,
    price: 49.99
  },
  {
    id: 14,
    title: "Kid's Sneakers",
    category: "Kids",
    image: "../images/New folder/14.webp",
    rate: 4.8,
    price: 39.99
  },
  {
    id: 15,
    title: "Men's Watch",
    category: "Men",
    image: "../images/New folder/15.webp",
    rate: 4.9,
    price: 99.99
  },
  {
    id: 16,
    title: "Women's Bracelet",
    category: "Women",
    image: "../images/New folder/16.jpg",
    rate: 4.7,
    price: 29.99
  },
  {
    id: 17,
    title: "Kid's Hat",
    category: "Kids",
    image: "../images/New folder/17.webp",
    rate: 4.4,
    price: 9.99
  },
  {
    id: 18,
    title: "Men's Belt",
    category: "Men",
    image: "../images/New folder/18.jpg",
    rate: 4.5,
    price: 19.99
  },
  {
    id: 19,
    title: "Women's Scarf",
    category: "Women",
    image: "../images/New folder/19.avif",
    rate: 4.6,
    price: 24.99
  },
  {
    id: 20,
    title: "Kid's Mittens",
    category: "Kids",
    image: "../images/New folder/20.jpg",
    rate: 4.3,
    price: 8.99
  },
  {
    id: 21,
    title: "Men's Gloves",
    category: "Men",
    image: "../images/New folder/21.jpg",
    rate: 4.6,
    price: 14.99
  },
  {
    id: 22,
    title: "Women's Necklace",
    category: "Women",
    image: "../images/New folder/22.webp",
    rate: 4.9,
    price: 39.99
  },
  {
    id: 23,
    title: "Kid's Shoes",
    category: "Kids",
    image: "../images/New folder/23.avif",
    rate: 4.7,
    price: 24.99
  },
  {
    id: 24,
    title: "Men's Sunglasses",
    category: "Men",
    image: "../images/New folder/24.webp",
    rate: 4.8,
    price: 29.99
  },
  {
    id: 25,
    title: "Women's Sunglasses",
    category: "Women",
    image: "../images/New folder/25.jpg",
    rate: 4.9,
    price: 34.99
  },
  {
    id: 26,
    title: "Kid's Cap",
    category: "Kids",
    image: "../images/New folder/26.webp",
    rate: 4.5,
    price: 12.99
  },
  {
    id: 27,
    title: "Men's Socks",
    category: "Men",
    image: "../images/New folder/27.webp",
    rate: 4.4,
    price: 9.99
  },
  {
    id: 28,
    title: "Women's Boots",
    category: "Women",
    image: "../images/New folder/28.jpg",
    rate: 4.7,
    price: 79.99
  },
  {
    id: 29,
    title: "Kid's Sandals",
    category: "Kids",
    image: "../images/New folder/29.avif",
    rate: 4.3,
    price: 15.99
  },
  {
    id: 30,
    title: "Men's Cap",
    category: "Men",
    image: "../images/New folder/30.webp",
    rate: 4.5,
    price: 13.99
  },
  {
    id: 31,
    title: "Women's Sweater",
    category: "Women",
    image: "../images/New folder/31.webp",
    rate: 4.6,
    price: 44.99
  },
  {
    id: 32,
    title: "Men's Polo Shirt",
    category: "Men",
    image: "../images/New folder/32.jpg",
    rate: 4.7,
    price: 27.99
  }];


 
function displayProducts(products) {
  var cartona = "";

  for (var i = 0; i < products.length; i++) {
    cartona += `<div class="col-lg-3 col-md-6 col-sm-12">
        <div class="product">
        <a href="../HTML/description.html" onclick="saveProduct(${i});">
         <img src="${products[i].image}" />
            <h3>${products[i].newtitle ? products[i].newtitle : products[i].title}</h3>
            <h3>${products[i].category}</h3>

            <div class="price position-relative d-flex justify-content-between">
                <span>$${products[i].price}</span>
                <span>${products[i].rate}</span>
            </div>
        </a>
           
            <button class="btn d-block w-100 addToCart" onclick="addToCart(${products[i].id})">Add to Cart</button>
        </div>
        </div>`
  };
  document.getElementById("display").innerHTML = cartona
};

displayProducts(products);
function saveProduct(i) {
  localStorage.setItem("selectedProduct", JSON.stringify(products[i]));
}

document.addEventListener("DOMContentLoaded", function () {
  const product = JSON.parse(localStorage.getItem("selectedProduct"));

  if (product) {
      document.getElementById("product-details").innerHTML = `
          <h2>${product.title}</h2>
          <img src="${product.image}" alt="${product.title}">
          <p>Category: ${product.category}</p>
          <p>Price: $${product.price}</p>
          <p>Rating: ${product.rate}</p>
      `;
      console.log(product);
      
  } else {
      document.getElementById("product-details").innerHTML = "<p>No product found.</p>";
  }
});
  


function search(searchValue) {
  var searchResults = [];
  for (var i = 0; i < products.length; i++) {
    var item = products[i];
    if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
      item.newtitle = item.title.toLowerCase().replace(
        searchValue.toLowerCase(),
        `<span class=" fs-2">${searchValue}</span>`
      );
      searchResults.push(item);
    }
  }
  displayProducts(searchResults)
}









function addToCart(id){


  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  var cartproduct = products.find(function (item) {
    return item.id == id;
  });

  var item = cart.find(function (item) {
    return item.id == id;
  });

  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ ...cartproduct, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}



