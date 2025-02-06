



// // import React from 'react';
// // import { shoesData } from '../utils/shoesData';
// // import { Link } from 'react-router-dom';
// // import HeroBanner from './HeroBanner';

// // const Body = () => {
// //   return (
// //     <div>
// //       {/* Hero Banner placed at the top */}
// //       <HeroBanner />

// //       {/* Container for shoe cards */}
// //       <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
// //         {/* Responsive grid: 1 column on small, 2 on sm, 3 on md, 4 on lg screens */}
// //         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
// //           {shoesData.map((shoe) => (
// //             <Link to={`shoedetails/${shoe.id}`} key={shoe.id}>
// //               <div className="bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
// //                 <div className="relative">
// //                   <img
// //                     className="w-full h-48 object-cover"
// //                     src={shoe.image}
// //                     alt={shoe.name}
// //                   />
// //                   <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
// //                   <p className="absolute bottom-3 left-3 text-xl text-white shadow-xl font-extrabold">
// //                     {shoe.price}
// //                   </p>
// //                 </div>
// //                 <div className="px-4 py-3">
// //                   <p className="font-bold text-xl text-gray-800 dark:text-white truncate">
// //                     {shoe.name}
// //                   </p>
// //                   <p className="text-lg text-gray-600 dark:text-gray-300">
// //                     {shoe.type}
// //                   </p>
// //                 </div>
// //               </div>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Body;


// import React from 'react';
// import { shoesData } from '../utils/shoesData';
// import { Link } from 'react-router-dom';
// import HeroBanner from './HeroBanner';

// const Body = () => {
//   return (
//     <div>
//       {/* Hero Banner placed at the top */}
//       <HeroBanner />

//       {/* Container for shoe cards */}
//       <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
//         {/* Responsive grid: 1 column on small, 2 on sm, 3 on md, 4 on lg screens */}
//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {shoesData.map((shoe) => {
//             // Parse the price number (assuming shoe.price is a number or a string representing a number)
//             const priceNumber =
//               typeof shoe.price === 'number'
//                 ? shoe.price
//                 : parseFloat(shoe.price);
//             // Generate a random discount percentage between 20 and 50
//             const discountPercentage =
//               Math.floor(Math.random() * (50 - 20 + 1)) + 20;
//             // Calculate the discounted price
//             const discountedPrice = Math.round(
//               priceNumber * (1 - discountPercentage / 100)
//             );

//             return (
//               <Link to={`shoedetails/${shoe.id}`} key={shoe.id}>
//                 <div className="bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
//                   <div className="relative">
//                     <img
//                       className="w-full h-48 object-cover"
//                       src={shoe.image}
//                       alt={shoe.name}
//                     />
//                     <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
//                     <div className="absolute bottom-3 left-3 text-white shadow-xl font-extrabold">
//                       <span className="block text-sm line-through">
//                         ₹{priceNumber}
//                       </span>
//                       <span className="block text-sm">-{discountPercentage}%</span>
//                       <span className="block text-lg">
//                         ₹{discountedPrice}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="px-4 py-3">
//                     <p className="font-bold text-xl text-gray-800 dark:text-white truncate">
//                       {shoe.name}
//                     </p>
//                     <p className="text-lg text-gray-600 dark:text-gray-300">
//                       {shoe.type}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Body;


import React, { useEffect } from 'react';
import { shoesData } from '../utils/shoesData';
import { Link } from 'react-router-dom';
import HeroBanner from './HeroBanner';
import { useState } from 'react';
import Search from './Search';
const Body = () => {
   const [filteredResult, setFilteredResults]=useState(shoesData);

   const handleSearchResults=(filteredData)=>{
            setFilteredResults(filteredData)
   }
  return (
    <div>
      {/* Hero Banner placed at the top */}
      <HeroBanner />
      <Search onSearchResults={handleSearchResults}/>
      {/* Container for shoe cards */}
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Responsive grid: 1 column on small, 2 on sm, 3 on md, 4 on lg screens */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredResult.map((shoe) => {
            // Parse the price (assumed to be a number or numeric string)
            console.log(shoe.price);
            console.log(shoe.discount)
            console.log(shoe.finalPrice)
            const priceNumber =
              typeof shoe.price === 'number'
                ? shoe.price
                : parseFloat(shoe.price);
            // Generate a random discount percentage between 20 and 50
            const discountPercentage =
              Math.floor(Math.random() * (50 - 20 + 1)) + 20;
            // Calculate the discounted price
            const discountedPrice = Math.round(
              priceNumber * (1 - discountPercentage / 100)
            );

            return (
              <Link to={`shoedetails/${shoe.id}`} key={shoe.id}>
                <div className="bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover"
                      src={shoe.image}
                      alt={shoe.name}
                    />
                    <div className="absolute bottom-3 left-3 flex items-center space-x-2 bg-black bg-opacity-50 px-2 py-1 rounded">
                      <span className="text-sm text-red-400 line-through">
                        ₹{shoe.price}
                      </span>
                      <span className="text-sm text-green-400">
                        -{shoe?.discount}%
                      </span>
                      <span className="text-lg text-white font-bold">
                        ₹{shoe?.finalPrice}
                      </span>
                    </div>
                  </div>
                  <div className="px-4 py-3">
                    <p className="font-bold text-xl text-gray-800 dark:text-white truncate">
                      {shoe.name}
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {shoe.type}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
