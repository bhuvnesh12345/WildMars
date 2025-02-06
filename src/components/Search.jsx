import React, { useState } from 'react';
import { shoesData } from '../utils/shoesData';

const Search = ({  onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredData = shoesData.filter(shoe =>
      shoe.type.toLowerCase().includes(e.target.value.toLowerCase())
    );
    onSearchResults(filteredData); // Pass filtered results to parent component
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <input
        type="text"
        placeholder="Search for sneakers, loafers, boots, etc."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-4 pl-10 pr-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
      />
    </div>
  );
};

export default Search;
