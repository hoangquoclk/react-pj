import React from 'react'

const imgPath = "https://image.tmdb.org/t/p/w1280";

const Movie = ({image, title, vote, overview, backdrop_path}) => {
    const getClassByRate = (vote) => {
        if(vote >= 8) {
            return "green";
        }
        else if(vote >= 5) {
            return "orange";
        }
        return "red";
    }

    return (
        <div className="movie">
            <img src={image ? imgPath + image : imgPath + backdrop_path} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={getClassByRate(vote)}>{vote}</span>
            </div>
            <div className="overview">
                <h3>Overview: </h3>
                    {overview ? overview : "Dont have overview"}
                
            </div>
        </div>
    );
}

export default Movie;