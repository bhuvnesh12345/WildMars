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
      {/* No Results Found Message */}
      {filteredResult.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 mt-8 bg-gradient-to-r from-red-400 to-red-600 rounded-xl shadow-xl text-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m0 0l3-3m-3 3l-3-3"
              />
            </svg>
            <h2 className="text-3xl font-semibold">No Results Found</h2>
            <p className="mt-4 text-lg">Try searching with different keywords or categories.</p>
          </div>
        )}
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
