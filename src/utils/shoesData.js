// Original shoesData array (you can keep your current objects)
const originalShoesData = [
    { id: 1, name: "Genuine Leather", price: "1500 Rs", image: "/shoes/IMG-20241219-WA0000.jpg", type: "boot" },
    { id: 2, name: "Genuine Leather", price: "1600 Rs", image: "/shoes/IMG-20241219-WA0001.jpg", type: "sneaker" },
    { id: 3, name: "Genuine Leather", price: "1700 Rs", image: "/shoes/IMG-20241219-WA0002.jpg", type: "loafer" },
    { id: 4, name: "Genuine Leather", price: "1800 Rs", image: "/shoes/IMG-20241219-WA0004.jpg", type: "boots" },
    { id: 5, name: "Genuine Leather", price: "1900 Rs", image: "/shoes/IMG-20241219-WA0005.jpg", type: "formal" },
    { id: 6, name: "Genuine Leather", price: "2000 Rs", image: "/shoes/IMG-20241219-WA0006.jpg", type: "sneaker" },
    { id: 7, name: "Genuine Leather", price: "2100 Rs", image: "/shoes/IMG-20241219-WA0007.jpg", type: "casual" },
    { id: 8, name: "Genuine Leather", price: "2200 Rs", image: "/shoes/IMG-20241219-WA0008.jpg", type: "loafer" },
    { id: 9, name: "Genuine Leather", price: "2300 Rs", image: "/shoes/IMG-20241219-WA0009.jpg", type: "boots" },
    { id: 10, name: "Genuine Leather", price: "2400 Rs", image: "/shoes/IMG-20241219-WA0010.jpg", type: "formal" },
    { id: 11, name: "Genuine Leather", price: "2500 Rs", image: "/shoes/IMG-20241219-WA0011.jpg", type: "sneaker" },
    { id: 12, name: "Genuine Leather", price: "1500 Rs", image: "/shoes/IMG-20241219-WA0012.jpg", type: "shoes" },
    { id: 13, name: "Genuine Leather", price: "1600 Rs", image: "/shoes/IMG-20241219-WA0014.jpg", type: "boots" },
    { id: 14, name: "Genuine Leather", price: "1700 Rs", image: "/shoes/IMG-20241219-WA0015.jpg", type: "loafers" },
    { id: 15, name: "Genuine Leather", price: "1800 Rs", image: "/shoes/IMG-20241219-WA0017.jpg", type: "formal" },
    { id: 16, name: "Genuine Leather", price: "1900 Rs", image: "/shoes/IMG-20241219-WA0018.jpg", type: "sneakers" },
    { id: 17, name: "Genuine Leather", price: "2000 Rs", image: "/shoes/IMG-20241219-WA0019.jpg", type: "casual" },
    { id: 18, name: "Genuine Leather", price: "2100 Rs", image: "/shoes/IMG-20241219-WA0020.jpg", type: "boots" },
    { id: 19, name: "Genuine Leather", price: "2200 Rs", image: "/shoes/IMG-20241219-WA0021.jpg", type: "shoes" },
    { id: 20, name: "Genuine Leather", price: "2300 Rs", image: "/shoes/IMG-20241219-WA0022.jpg", type: "formal" },
    { id: 21, name: "Genuine Leather", price: "2400 Rs", image: "/shoes/IMG-20241219-WA0023.jpg", type: "loafers" },
    { id: 22, name: "Genuine Leather", price: "2500 Rs", image: "/shoes/IMG-20241219-WA0024.jpg", type: "sneakers" },
    { id: 23, name: "Genuine Leather", price: "1500 Rs", image: "/shoes/IMG-20241219-WA0025.jpg", type: "casual" },
    { id: 24, name: "Genuine Leather", price: "1600 Rs", image: "/shoes/IMG-20241219-WA0026.jpg", type: "formal" },
    { id: 25, name: "Genuine Leather", price: "1700 Rs", image: "/shoes/IMG-20241219-WA0027.jpg", type: "boots" },
    { id: 26, name: "Genuine Leather", price: "1800 Rs", image: "/shoes/IMG-20241219-WA0028.jpg", type: "sandals" },
    { id: 27, name: "Genuine Leather", price: "1900 Rs", image: "/shoes/IMG-20241219-WA0029.jpg", type: "loafers" },
    { id: 28, name: "Genuine Leather", price: "2000 Rs", image: "/shoes/IMG-20241219-WA0030.jpg", type: "casual" },
    { id: 29, name: "Genuine Leather", price: "2100 Rs", image: "/shoes/IMG-20241219-WA0031.jpg", type: "sneakers" },
    { id: 30, name: "Genuine Leather", price: "2200 Rs", image: "/shoes/IMG-20241219-WA0032.jpg", type: "boots" },
    { id: 31, name: "Genuine Leather", price: "2300 Rs", image: "/shoes/IMG-20241219-WA0033.jpg", type: "shoes" },
    { id: 32, name: "Genuine Leather", price: "2400 Rs", image: "/shoes/IMG-20241219-WA0034.jpg", type: "formal" },
    { id: 33, name: "Genuine Leather", price: "2500 Rs", image: "/shoes/IMG-20241219-WA0035.jpg", type: "loafers" },
    { id: 34, name: "Genuine Leather", price: "1500 Rs", image: "/shoes/IMG-20241219-WA0036.jpg", type: "boots" },
    { id: 35, name: "Genuine Leather", price: "1600 Rs", image: "/shoes/IMG-20241219-WA0037.jpg", type: "sneakers" },
    { id: 36, name: "Genuine Leather", price: "1700 Rs", image: "/shoes/IMG-20241219-WA0038.jpg", type: "shoes" },
    { id: 37, name: "Genuine Leather", price: "1800 Rs", image: "/shoes/IMG-20241219-WA0039.jpg", type: "casual" },
    { id: 38, name: "Genuine Leather", price: "1900 Rs", image: "/shoes/IMG-20241219-WA0040.jpg", type: "formal" },
    { id: 39, name: "Genuine Leather", price: "2000 Rs", image: "/shoes/IMG-20241219-WA0041.jpg", type: "loafers" },
    { id: 40, name: "Genuine Leather", price: "2100 Rs", image: "/shoes/IMG-20241219-WA0042.jpg", type: "sneakers" },
    { id: 41, name: "Genuine Leather", price: "2200 Rs", image: "/shoes/IMG-20241219-WA0043.jpg", type: "boots" },
    { id: 42, name: "Genuine Leather", price: "2300 Rs", image: "/shoes/IMG-20241219-WA0044.jpg", type: "shoes" },
    { id: 43, name: "Genuine Leather", price: "2400 Rs", image: "/shoes/IMG-20241219-WA0045.jpg", type: "casual" },
    { id: 44, name: "Genuine Leather", price: "2500 Rs", image: "/shoes/IMG-20241219-WA0046.jpg", type: "formal" },
    { id: 45, name: "Genuine Leather", price: "1500 Rs", image: "/shoes/IMG-20241219-WA0047.jpg", type: "loafers" },
    { id: 46, name: "Genuine Leather", price: "1600 Rs", image: "/shoes/IMG-20241219-WA0048.jpg", type: "boots" },
    { id: 47, name: "Genuine Leather", price: "1700 Rs", image: "/shoes/IMG-20241219-WA0049.jpg", type: "sneakers" },
    { id: 49, name: "Genuine Leather", price: "1900 Rs", image: "/shoes/IMG-20241219-WA0051.jpg", type: "casual" },
  ];
  


// Predefined discount percentages (fixed values based on `id`)
const discountOptions = [20, 25, 30, 35, 40, 45];

// Function to get a fixed discount based on `id`
const getFixedDiscount = (id) => {
  return discountOptions[id % discountOptions.length]; // Cycles through discountOptions
};

// Map over original data and add discount & finalPrice
export const shoesData = originalShoesData.map((shoe) => {
  const priceNumber = parseInt(shoe.price, 10); // Extract price
  const discount = getFixedDiscount(shoe.id); // Get fixed discount
  const finalPriceNumber = Math.round(priceNumber * (1 - discount / 100)); // Calculate final price

  return {
    ...shoe,
    discount, // e.g., 25
    finalPrice: `${finalPriceNumber} Rs`, // e.g., "1125 Rs"
  };
});
