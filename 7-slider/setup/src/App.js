import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  // const updateIndex = (indexCurrent) => {
  //   if(indexCurrent === -1) {
  //     return people.length - 1;
  //   }
  //   else if(indexCurrent === people.length) {
  //     return 0;
  //   }
  //   return indexCurrent;
  // }
  

  // Mỗi lần thay đổi index hoặc people thì sẽ chạy lại
  useEffect(() => {
    const lastIndex = people.length - 1;
    if(index < 0) {
      setIndex(lastIndex);
    }
    if(index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // sử dụng tự chạy
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    // hàm này là hàm call back sau khi mỗi lần click thì nó sẽ xóa đi inteval
    // xóa nó đi sẽ biết bị gặp lỗi sau khi click nhiều lần vào nút next, prev
    return () => clearInterval(slider); 
  }, [index]);

  return <section className="section">
    <div className="title">
      <h2>
        <span>/</span>reviews
      </h2>
    </div>
    <div className="section-center">
      {people.map((person, personIndex) => {
        const {id, image, name, title, quote} = person;

        // more stuff coming up
        let position = 'nextSlide';
        if(personIndex === index) {
          position = 'activeSlide';
        }
        if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
          position = 'lastSlide';
        }
        return <article className={position} key={id}>
          <img src={image} alt={name} className="person-img"/>
          <h4>{name}</h4>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className="icon"/>
        </article>
      })}
      <button className="prev" onClick={() => {setIndex(index - 1)}}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => {setIndex(index + 1)}}>
        <FiChevronRight />
      </button>
    </div>
  </section>;
}

export default App;
