import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];
  let number = 0;

  const checkNumber = (number) => {
    if(number > people.length - 1) {
      return 0;
    }
    else if(number < 0) {
      return people.length - 1;
    }
    return number;
  }
  
  const nextClickHandler = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  }

  const prevClickHandler = () => {
    setIndex((index) => {  
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if(randomNumber === index) {
      randomNumber += 1;
    }
    setIndex(checkNumber(randomNumber));
  }

  return <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>

    <div className="button-container">
      <button onClick={prevClickHandler} className="prev-btn">
        <FaChevronLeft />
      </button>
      <button onClick={nextClickHandler} className="next-btn">
        <FaChevronRight />
      </button>
    </div>
    <button onClick={randomPerson} className="random-btn">
      Random
    </button>
  </article>;
};

export default Review;
