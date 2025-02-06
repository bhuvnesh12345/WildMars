import React, { useState } from 'react';
import { shoesData } from '../utils/shoesData';
const Search = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredData = shoesData.filter(shoe =>
      shoe.type.toLowerCase().includes(e.target.value.toLowerCase())
    );
    onSearchResults(filteredData); // Pass filtered results to parent component
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <div className="relative flex items-center justify-center">
        <input
          type="text"
          placeholder="Search for sneakers, loafers, boots, etc."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full max-w-lg py-3 pl-12 pr-4 rounded-xl text-lg bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out shadow-md"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 18l6-6M6 10l6-6"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;
