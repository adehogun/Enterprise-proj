import React, { useState } from 'react';

// SearchBar component
function SearchBar ({onSearch}) {
  const [searchTerm, setSearchTerm] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    console.log("search term:", searchTerm);
    onSearch(searchTerm);
  };
    

  return (
    <div>
      <input
        type="text" 
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search products..."
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default SearchBar;