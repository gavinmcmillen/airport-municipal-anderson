import React, { useState } from 'react';

const SearchBar = () => {
    const [newSearchBar, setNewSearchBar ] =useState();

    const handleSearchBar = (event) => {
        setNewSearchBar(event.target.value);
    };
    return <div>
        <input 
        type='text'
        placeholder='Search...'
        value={newSearchBar}
        onChange={handleSearchBar}
        />
    </div>
};

export default SearchBar;