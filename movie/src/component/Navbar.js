import React from 'react'
import {useGlobalContext} from '../context'

const Navbar = () => {
    const {setSearch} = useGlobalContext();
    const searchValue = React.useRef('');

    const handleChange = () => {
        setSearch(searchValue.current.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <header>
            <form id="form" onSubmit={handleSubmit}>
                <input type="text" id="search" 
                placeholder="search" className="search" autoComplete="off" onChange={handleChange} ref={searchValue}/>
            </form>
        </header>
    );
}

export default Navbar;