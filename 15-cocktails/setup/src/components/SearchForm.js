import React, {useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTemp} = useGlobalContext();
  const searchValue = React.useRef('');

  const searchCocktail = () => {
    setSearchTemp(searchValue.current.value);
    // setSearchTemp(e.target.value);
  }

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input type="text" id="name" ref={searchValue} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
