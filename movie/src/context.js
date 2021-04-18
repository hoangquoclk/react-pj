import React, { useCallback, useContext, useEffect, useState } from 'react'

const url = "https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const urlSearch = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    const getMovies = useCallback(async(address) => {
        setLoading(true);
        try {
            const response = await fetch(address);
            const data = await response.json();
            const {results} = data;
            
            if(results) {
                const newMovies = results.map((result) => {
                    const {poster_path, title, vote_average, overview, backdrop_path} = result;
                    return {
                        image: poster_path,
                        title,
                        vote: vote_average,
                        overview,
                        backdrop_path
                    }
                });
                setMovies(newMovies);
            }
            else {
                setMovies([]);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [search]);

    useEffect(() => {
        if(search === ''){
            getMovies(url);
        }
        else {
            getMovies(urlSearch + search);
        }
    }, [search, getMovies]);



    return <AppContext.Provider value={{movies, loading, setSearch}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider} 