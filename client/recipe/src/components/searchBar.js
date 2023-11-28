import React, { useState, useEffect } from 'react';
import ReactSearchBox from 'react-search-box';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from your API
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/recipes');
                const result = await response.json();
                console.log(result);
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    const handleSearch = (record) => {
        console.log(record);
        // Add your logic for handling the selected record here
    };

    return (
        <ReactSearchBox
            placeholder="Search..."
            value={searchTerm}
            data={data}
            callback={handleSearch}
            searchKey="name" // Specify the key in the API response that you want to use for searching
            autoComplete="true"
            debounceRate={200}
            onChange={(value) => setSearchTerm(value)}
            leftIcon={
                <IconButton aria-label="search">
                    <SearchIcon sx={{ paddingLeft: "4px"}}/>
                </IconButton>
            }
        />
    );
}

export default SearchBar;
