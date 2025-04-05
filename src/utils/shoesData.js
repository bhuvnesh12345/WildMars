
const originalShoesData = [
  {
    "id": 1,
    "name": "Genuine Leather",
    "type": "boots",
    "price": 1683,
    "image": "/shoes/IMG-20250303-WA0001.jpg"
  },
  {
    "id": 2,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1545,
    "image": "/shoes/IMG-20250303-WA0003.jpg"
  },
  {
    "id": 3,
    "name": "Genuine Leather",
    "type": "boots",
    "price": 1540,
    "image": "/shoes/IMG-20250303-WA0004.jpg"
  },
  {
    "id": 4,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1732,
    "image": "/shoes/IMG-20250304-WA0001.jpg"
  },
  {
    "id": 5,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1667,
    "image": "/shoes/IMG-20250304-WA0002.jpg"
  },
  {
    "id": 6,
    "name": "Genuine Leather",
    "type": "boots",
    "price": 1852,
    "image": "/shoes/IMG-20250304-WA0003.jpg"
  },
  {
    "id": 7,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1770,
    "image": "/shoes/IMG-20250304-WA0005.jpg"
  },
  {
    "id": 8,
    "name": "Genuine Leather",
    "type": "boots",
    "price": 1800,
    "image": "/shoes/IMG-20250304-WA0006.jpg"
  },
  {
    "id": 9,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1895,
    "image": "/shoes/IMG-20250304-WA0007.jpg"
  },
  {
    "id": 10,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1767,
    "image": "/shoes/IMG-20250304-WA0008.jpg"
  },
  {
    "id": 11,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1624,
    "image": "/shoes/IMG-20250304-WA0009.jpg"
  },
  {
    "id": 12,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1583,
    "image": "/shoes/IMG-20250304-WA0010.jpg"
  },
  {
    "id": 13,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1831,
    "image": "/shoes/IMG-20250304-WA0011.jpg"
  },
  {
    "id": 14,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1584,
    "image": "/shoes/IMG-20250304-WA0012.jpg"
  },
  {
    "id": 15,
    "name": "Genuine Leather",
    "type": "boots",
    "price": 1519,
    "image": "/shoes/IMG-20250304-WA0013.jpg"
  },
  {
    "id": 16,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1568,
    "image": "/shoes/IMG-20250304-WA0014.jpg"
  },
  {
    "id": 17,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1704,
    "image": "/shoes/IMG-20250304-WA0015.jpg"
  },
  {
    "id": 18,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1949,
    "image": "/shoes/IMG-20250304-WA0016.jpg"
  },
  {
    "id": 19,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1560,
    "image": "/shoes/IMG-20250304-WA0017.jpg"
  },
  {
    "id": 20,
    "name": "Genuine Leather",
    "type": "boots",
    "price": 1928,
    "image": "/shoes/IMG-20250304-WA0018.jpg"
  },
  {
    "id": 21,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1621,
    "image": "/shoes/IMG-20250304-WA0019.jpg"
  },
  {
    "id": 22,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1530,
    "image": "/shoes/IMG-20250304-WA0020.jpg"
  },
  {
    "id": 23,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1811,
    "image": "/shoes/IMG-20250304-WA0021.jpg"
  },
  {
    "id": 24,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1802,
    "image": "/shoes/IMG-20250304-WA0022.jpg"
  },
  {
    "id": 25,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1929,
    "image": "/shoes/IMG-20250304-WA0023.jpg"
  },
  {
    "id": 26,
    "name": "Genuine Leather",
    "type": "boots",
    "price": 1707,
    "image": "/shoes/IMG-20250304-WA0024.jpg"
  },
  {
    "id": 27,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1919,
    "image": "/shoes/IMG-20250304-WA0025.jpg"
  },
  {
    "id": 28,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1622,
    "image": "/shoes/IMG-20250304-WA0026.jpg"
  },
  {
    "id": 29,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1818,
    "image": "/shoes/IMG-20250304-WA0027.jpg"
  },
  {
    "id": 30,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1872,
    "image": "/shoes/IMG-20250304-WA0028.jpg"
  },
  {
    "id": 31,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1611,
    "image": "/shoes/IMG-20250304-WA0029.jpg"
  },
  {
    "id": 32,
    "name": "Genuine Leather",
    "type": "boots",
    "price": 1533,
    "image": "/shoes/IMG-20250304-WA0030.jpg"
  },
  {
    "id": 33,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1705,
    "image": "/shoes/IMG-20250306-WA0003.jpg"
  },
  {
    "id": 34,
    "name": "Genuine Leather",
    "type": "boots",
    "price": 1920,
    "image": "/shoes/IMG-20250306-WA0004.jpg"
  },
  {
    "id": 35,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1721,
    "image": "/shoes/IMG-20250306-WA0005.jpg"
  },
  {
    "id": 36,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1937,
    "image": "/shoes/IMG-20250306-WA0006.jpg"
  },
  {
    "id": 37,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1974,
    "image": "/shoes/IMG-20250306-WA0008.jpg"
  },
  {
    "id": 38,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1586,
    "image": "/shoes/IMG-20250311-WA0001.jpg"
  },
  {
    "id": 39,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1767,
    "image": "/shoes/IMG-20250311-WA0002.jpg"
  },
  {
    "id": 40,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1563,
    "image": "/shoes/IMG-20250311-WA0003.jpg"
  },
  {
    "id": 41,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1576,
    "image": "/shoes/IMG-20250311-WA0004.jpg"
  },
  {
    "id": 42,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1973,
    "image": "/shoes/IMG-20250311-WA0006.jpg"
  },
  {
    "id": 43,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1829,
    "image": "/shoes/IMG-20250311-WA0007.jpg"
  },
  {
    "id": 44,
    "name": "Genuine Leather",
    "type": "boots",
    "price": 1516,
    "image": "/shoes/IMG-20250311-WA0008.jpg"
  },
  {
    "id": 45,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1732,
    "image": "/shoes/IMG-20250311-WA0009.jpg"
  },
  {
    "id": 46,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1761,
    "image": "/shoes/IMG-20250311-WA0010.jpg"
  },
  {
    "id": 47,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1805,
    "image": "/shoes/IMG-20250311-WA0012.jpg"
  },
  {
    "id": 48,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1614,
    "image": "/shoes/IMG-20250311-WA0013.jpg"
  },
  {
    "id": 49,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1985,
    "image": "/shoes/IMG-20250311-WA0014.jpg"
  },
  {
    "id": 50,
    "name": "Genuine Leather",
    "type": "boots",
    "price": 1712,
    "image": "/shoes/IMG-20250311-WA0015.jpg"
  },
  {
    "id": 51,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1857,
    "image": "/shoes/IMG-20250311-WA0016.jpg"
  },
  {
    "id": 52,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1874,
    "image": "/shoes/IMG-20250311-WA0017.jpg"
  },
  {
    "id": 53,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1658,
    "image": "/shoes/IMG-20250311-WA0018.jpg"
  },
  {
    "id": 54,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1528,
    "image": "/shoes/IMG-20250311-WA0019.jpg"
  },
  {
    "id": 55,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1699,
    "image": "/shoes/IMG-20250311-WA0020.jpg"
  },
  {
    "id": 56,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1519,
    "image": "/shoes/IMG-20250311-WA0021.jpg"
  },
  {
    "id": 57,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1546,
    "image": "/shoes/IMG-20250311-WA0022.jpg"
  },
  {
    "id": 58,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1850,
    "image": "/shoes/IMG-20250311-WA0023.jpg"
  },
  {
    "id": 59,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1932,
    "image": "/shoes/IMG-20250311-WA0024.jpg"
  },
  {
    "id": 60,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1889,
    "image": "/shoes/IMG-20250311-WA0025.jpg"
  },
  {
    "id": 61,
    "name": "Genuine Leather",
    "type": "boots",
    "price": 1979,
    "image": "/shoes/IMG-20250311-WA0026.jpg"
  },
  {
    "id": 62,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1721,
    "image": "/shoes/IMG-20250311-WA0028.jpg"
  },
  {
    "id": 63,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1834,
    "image": "/shoes/IMG-20250311-WA0029.jpg"
  },
  {
    "id": 64,
    "name": "Genuine Leather",
    "type": "boots",
    "price": 1864,
    "image": "/shoes/IMG-20250311-WA0030.jpg"
  },
  {
    "id": 65,
    "name": "Genuine Leather",
    "type": "boots",
    "price": 1547,
    "image": "/shoes/IMG-20250311-WA0031.jpg"
  },
  {
    "id": 66,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1861,
    "image": "/shoes/IMG-20250311-WA0032.jpg"
  },
  {
    "id": 67,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1687,
    "image": "/shoes/IMG-20250311-WA0033.jpg"
  },
  {
    "id": 68,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1613,
    "image": "/shoes/IMG-20250311-WA0036.jpg"
  },
  {
    "id": 69,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1698,
    "image": "/shoes/IMG-20250311-WA0037.jpg"
  },
  {
    "id": 70,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1876,
    "image": "/shoes/IMG-20250311-WA0040.jpg"
  },
  {
    "id": 71,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1969,
    "image": "/shoes/IMG-20250311-WA0041.jpg"
  },
  {
    "id": 72,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1908,
    "image": "/shoes/IMG-20250311-WA0042.jpg"
  },
  {
    "id": 73,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1927,
    "image": "/shoes/IMG-20250311-WA0044.jpg"
  },
  {
    "id": 74,
    "name": "Genuine Leather",
    "type": "boots",
    "price": 1828,
    "image": "/shoes/IMG-20250303-WA0001.jpg"
  },
  {
    "id": 75,
    "name": "Genuine Leather",
    "type": "boots",
    "price": 1992,
    "image": "/shoes/IMG-20250303-WA0003.jpg"
  },
  {
    "id": 76,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1977,
    "image": "/shoes/IMG-20250303-WA0004.jpg"
  },
  {
    "id": 77,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1540,
    "image": "/shoes/IMG-20250304-WA0001.jpg"
  },
  {
    "id": 78,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1576,
    "image": "/shoes/IMG-20250304-WA0002.jpg"
  },
  {
    "id": 79,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1733,
    "image": "/shoes/IMG-20250304-WA0003.jpg"
  },
  {
    "id": 80,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1645,
    "image": "/shoes/IMG-20250304-WA0005.jpg"
  },
  {
    "id": 81,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1594,
    "image": "/shoes/IMG-20250304-WA0006.jpg"
  },
  {
    "id": 82,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1536,
    "image": "/shoes/IMG-20250304-WA0007.jpg"
  },
  {
    "id": 83,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1702,
    "image": "/shoes/IMG-20250304-WA0008.jpg"
  },
  {
    "id": 84,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1502,
    "image": "/shoes/IMG-20250304-WA0009.jpg"
  },
  {
    "id": 85,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1771,
    "image": "/shoes/IMG-20250304-WA0010.jpg"
  },
  {
    "id": 86,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1793,
    "image": "/shoes/IMG-20250304-WA0011.jpg"
  },
  {
    "id": 87,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1528,
    "image": "/shoes/IMG-20250304-WA0012.jpg"
  },
  {
    "id": 88,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1941,
    "image": "/shoes/IMG-20250304-WA0013.jpg"
  },
  {
    "id": 89,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1755,
    "image": "/shoes/IMG-20250304-WA0014.jpg"
  },
  {
    "id": 90,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1682,
    "image": "/shoes/IMG-20250304-WA0015.jpg"
  },
  {
    "id": 91,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1610,
    "image": "/shoes/IMG-20250304-WA0016.jpg"
  },
  {
    "id": 92,
    "name": "Genuine Leather",
    "type": "boots",
    "price": 1816,
    "image": "/shoes/IMG-20250304-WA0017.jpg"
  },
  {
    "id": 93,
    "name": "Genuine Leather",
    "type": "boots",
    "price": 1901,
    "image": "/shoes/IMG-20250304-WA0018.jpg"
  },
  {
    "id": 94,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1681,
    "image": "/shoes/IMG-20250304-WA0019.jpg"
  },
  {
    "id": 95,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1541,
    "image": "/shoes/IMG-20250304-WA0020.jpg"
  },
  {
    "id": 96,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1695,
    "image": "/shoes/IMG-20250304-WA0021.jpg"
  },
  {
    "id": 97,
    "name": "Genuine Leather",
    "type": "loafer",
    "price": 1755,
    "image": "/shoes/IMG-20250304-WA0022.jpg"
  },
  {
    "id": 98,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1913,
    "image": "/shoes/IMG-20250304-WA0023.jpg"
  },
  {
    "id": 99,
    "name": "Genuine Leather",
    "type": "casual",
    "price": 1580,
    "image": "/shoes/IMG-20250304-WA0024.jpg"
  },
  {
    "id": 100,
    "name": "Genuine Leather",
    "type": "formal",
    "price": 1737,
    "image": "/shoes/IMG-20250304-WA0025.jpg"
  }
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
