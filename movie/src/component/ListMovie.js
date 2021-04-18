import React from 'react'
import {useGlobalContext} from '../context'
import Movie from './Movie'
import Loading from './Loading'

const ListMovie = () => {
    const {movies, loading} = useGlobalContext();
    
    console.log(movies);
    if(loading) {
        return <Loading />
    }

    return (
        <main>
            {movies.map((movie, index) => {
                return <Movie key={index} {...movie}/>
            })}
        </main>
    );
}

export default ListMovie;