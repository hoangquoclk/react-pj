import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
    const searchValue = React.createRef();
    const {setSearch} = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        // document.getElementById("search").value = "";
    }

    const handleChange = () => {
        setSearch(searchValue.current.value);
    }

    useEffect(() => {
        setSearch(searchValue.current.value);
    }, []);

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input type="text" 
                name="search" 
                id="search" 
                placeholder="Search..." 
                autoComplete="off" 
                ref={searchValue}
                onChange={handleChange}
                />
            </form>
        </div>
    );
}

export default Search;