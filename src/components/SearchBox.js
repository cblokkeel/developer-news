import React from 'react'

const SearchBox = ({ searchContent, handleChange }) => {
    return (
        <section className='grid place-items-center'>
            <input type="text" value={searchContent} onChange={handleChange} placeholder='Search for articles...' className='outline-none bg-gray-500 py-2 px-3 rounded-md shadow-md w-72'/>
        </section>
    );
};

export default SearchBox;