import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTemp, setSearchTemp] = useState('');
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async() => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTemp}`);
      const data = await response.json();
      const {drinks} = data; // object trả về mảng drinks gọi vậy để chỉ lấy mảng thôi
      if(drinks) {
        const newCocktails = drinks.map((drink) => {
          const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = drink;
          return {id: idDrink, 
            name: strDrink, 
            image: strDrinkThumb, 
            info: strAlcoholic, 
            glass: strGlass}
        });
        setCocktails(newCocktails);
      }
      else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTemp]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTemp, fetchDrinks]);

  return <AppContext.Provider value={{
    loading, 
    cocktails, 
    setSearchTemp, 
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
