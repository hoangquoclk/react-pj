import React, { useState } from 'react';

const Tour = ({tour, tours, setTours}) => {
  const [readMore, setReadMore] = useState(false);

  const deleteTours = () => {
    setTours(tours.filter((el) => el.id !== tour.id));  
  }

  return <article className="single-tour">
    <img src={tour.image} alt={tour.name} />
    <footer>
      <div className="tour-info">
        <h4>{tour.name}</h4>
        <h4 className="tour-price">${tour.price}</h4>
      </div>
      <p>
        {readMore ? tour.info : `${tour.info.substring(0,200)}...`}
        <button onClick={() => setReadMore(!readMore)}>{readMore ? "Show less" : "Read more"}</button>
      </p>
      <button onClick={deleteTours} className="delete-btn">not interest</button>
    </footer>
  </article>;
};

export default Tour;
