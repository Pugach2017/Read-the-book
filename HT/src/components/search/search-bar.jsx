import React from 'react';

const SearchBar = ({ onChange, filter }) => (
  <div >
    <form>
    <label >
      Filter books by title
      <input  
        value={ filter } 
        onChange={ onChange } 
        />
    </label>
    </form>
  </div>
);

export default SearchBar;