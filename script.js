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
    },
   {
    productName: "AUDIO CONSOLE",
    productDescription: "Ideal for music & audio. Adaptable to any workflow.",
    productImg1: "./22222.webp",
    productImg2: "./-01b4-.webp",
    status: "Sold Out",
  },
  {
    productName: "PHOTO CONSOLE",
    productDescription: "Ideal for Photo & Video. Adaptable to any workflow.",
    productImg1: "./66.webp",
    productImg2: "./55.webp",
    status: "Sold Out",
  },
  {
    productName: "VIDEO CONSOLE",
    productDescription: "Ideal for Video & Film. Adaptable to any workflow.",
    productImg1: "./77.webp",
    productImg2: "./888.webp",
    status: "Sold Out",
  },
  {
    productName: "Monogram Keyboard + Multipad",
    productDescription: "Adaptable to any workflow.",
    productImg1: "./keyyy2.webp",
    productImg2: "./keyboard1.webp",
    status: "Sold Out",
    isWide: true
  }
];

const productGrid = document.getElementById("productGrid");

ProductList.forEach(product => {
    const isWide = product.isWide;
    const productCard = document.createElement("div");
    productCard.className = isWide ? "product-card-wide" : "product-card";

    const imageWrapperClass = isWide ? "image-Wrapper-Wide" : "image-wrapper";
    

    productCard.innerHTML = `
    <div class ="badge-first">Pre-Order</div>
    <div class ="${imageWrapperClass}">
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

const ProductList2 = [
    {
    productName2: "Monogram Keyboard",
    productImg1_2: "./Monogram_Keyboardv2_750x748_crop_center.png.webp",
    productImg2_2: "./d1564dbc344144d594c1e602d3ab46d7.thumbnail.0000000000_750x422_crop_center.jpg.webp",
    status2: "Sold Out",
    },
    {
     productName2: "Monogram Multipad",
     productImg1_2: "./MonogramMultipad_750x545_crop_center.png.webp",
     productImg2_2: "./Monogram_Keyboard_3_45ca86e3-ee84-48a0-b55d-c991d2e57e3c_750x422_crop_center.jpg.webp",
     status2:"Sold Out",

    },
    {
     productName2: "Monogram Core",
     productImg1_2: "./Packaging_CoreBracket1_Monogram_May20204545_ccb8b10a-0772-448b-9857-a14fa83bd5b7_750x500_crop_center.jpg.webp" ,
     productImg2_2: "./Consoles_CoreBracket1_Monogram_May2020_4578_6683fd8e-be63-45bb-9fbd-dd82a4838db8_750x500_crop_center.jpg.webp",
     status2: "$159",
    },
    {
     productName2: "Slider Module",
     productImg1_2: "./Packaging_SliderHeroBracket1_Monogram_May20204536_8b0e1987-0315-491e-9951-a9404031b55a_750x500_crop_center.jpg.webp",
     productImg2_2: "./Consoles_SliderBracket1_Monogram_May2020_4565_f941e8d9-d194-47ee-a54a-79132f105e34_750x500_crop_center.jpg.webp",
     status2: "Sold Out",
    },
    {
     productName2: "Orbiter Module",
     productImg1_2: "./Packaging_OrbiterBracket1_Monogram_May20204542_50105ec2-8b68-4ed5-ac4e-ac261c36459c_1080x720_crop_center.jpg.webp",
     productImg2_2: "./Consoles_OrbiterHero_Monogram_May2020_4568_3d64e8b3-71ce-441a-9fcd-2b054c423310_1080x720_crop_center.jpg.webp",
     status2: "Sold Out",
    },
    {
     productName2: "Essential Keys Module",
     productImg1_2: "./Packaging_KeysBracket1_Monogram_May20204548_c26eef0c-c95c-40e6-8fd3-abe1f59abfcd_1080x720_crop_center.jpg.webp",
     productImg2_2: "./Consoles_KeysBracket1_Monogram_May2020_4571_43b65ca9-4fde-4f55-9f0e-32374554ce76_1920x1280_crop_center.jpg.webp",
     status2: "Sold Out",
    },
    {
     productName2: "Dial Module",
     productImg1_2: "./Packaging_DialHeroBracket1_Monogram_May20204539_375e79fb-32f0-447b-b606-3dd0ac8318f6_1080x720_crop_center.jpg.webp",
     productImg2_2: "./Consoles_DialBracket1_Monogram_May2020_4575_981a6401-f834-4094-9a6e-6cd7d0b374ca_1080x720_crop_center.jpg.webp",
     status2: "Sold Out",
    },
    {
     productName2: "Monogram Carrying Case",
     productImg1_2: "./20221018_MonogramCC_Case_06_1080x720_crop_center.jpg.webp",
     productImg2_2: "./20221018_MonogramCC_Case_02_1080x720_crop_center.jpg.webp",
     status2: "Sold Out",
    },
    {
     productName2: "Console Pack: Video",
     productImg1_2: "./SW-box-render-mini-video-final-august_1080x778_crop_center.jpg.webp",
     status2: "$69",
    },
    {
     productName2: "Console Pack: Photo",
     productImg1_2: "./SW-box-render-mini-photo-final-august_1080x778_crop_center.jpg.webp",
     status2: "$39",
    },
    {
     productName2: "Console Pack: Audio",
     productImg1_2: "./SW-box-render-mini-midi-final-august_1080x778_crop_center.jpg.webp",
     status2: "$29",
    },
    {
     productName2: "Monogram Care",
     productImg1_2: "./Care-updated-traveler_1080x714_crop_center.jpg.webp",
     productImg2_2: "./MONO_CONSOLE_CARE_STU_453eaa1a-02d9-4ba7-9d9a-8d05e2915f8f_1080x714_crop_center.jpg.webp",
     status2: "$19-$129",
    },
]

const sliderContainer = document.querySelector(".Multipad-flex");
ProductList2.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("slider-card");

    card.innerHTML = `
    <div class ="badge">Pre-Order</div>
    <div class = "monogram-wrapper ${product.button2 ? "shop" : ""}">
    <img src = "${product.productImg1_2}" class="slider-img default">
    ${product.productImg2_2 ? `<img src = "${product.productImg2_2}" class= "slider-img hover">` : ""}
    </div>
    <div class = "product-details">
    <h3>${product.productName2}</h3>
    <span class ="sold-out ${product.price2 ? "dollar" : ""}">${product.status2}</span>
    ${product.button2 ? `<a href= "#" class= "shop-now-button">Shop Now</a>` : ""}
</div>
`;
sliderContainer.appendChild(card);
});