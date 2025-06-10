function toggleMenu () {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('open');
    }

    
const ProductList = [
    {productName: "MINI CONSOLE",
     productDescription: "Ideal for everyday shortcuts. Adaptable to any workflow.",
     productImg1:"./Everyday-Bundle-Mocks-final_750x500_crop_center.jpg.webp",
     productImg2: "./Everyday-Bundle-Mocks-horizontal_750x500_crop_center.jpg.webp",
     status: "Sold Out",
     price: "$99"
    },
   {
    productName: "AUDIO CONSOLE",
    productDescription: "Ideal for music & audio. Adaptable to any workflow.",
    productImg1: "./22222.webp",
    productImg2: "./-01b4-.webp",
    status: "Sold Out",
    price: "$149"
  },
  {
    productName: "PHOTO CONSOLE",
    productDescription: "Ideal for Photo & Video. Adaptable to any workflow.",
    productImg1: "./66.webp",
    productImg2: "./55.webp",
    status: "Sold Out",
    price: "$129"
  },
  {
    productName: "VIDEO CONSOLE",
    productDescription: "Ideal for Video & Film. Adaptable to any workflow.",
    productImg1: "./77.webp",
    productImg2: "./888.webp",
    status: "Sold Out",
    price: "$139"
  },
  {
    productName: "Monogram Keyboard + Multipad",
    productDescription: "Adaptable to any workflow.",
    productImg1: "./keyyy2.webp",
    productImg2: "./keyboard1.webp",
    status: "Sold Out",
    price: "$179"
  }
];

const productGrid = document.getElementById("productGrid");

ProductList.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `

    <div class ="badge-first">Pre-Order</div>
    <div class ="image-wrapper">
         <img src="${product.productImg1}" class="product-img default" />
         <img src="${product.productImg2}" class="product-img hover" />
    </div>
    <div class = "product-details">
        <h3>${product.productName}</h3>
        <span class = "sold-out">${product.status}</span>
    </div>
    <p class ="paragraph">${product.productDescription}</p>
    `;

    productGrid.appendChild(productCard);
     
});