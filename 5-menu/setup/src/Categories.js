import React from 'react';

const Categories = ({filterItems, categories}) => {
  return <div className="btn-container">
    {
      categories.map((category, index) => {
        return (<button 
                  type="button"
                  key={index} 
                  onClick={() => filterItems(category)} 
                  className="filter-btn">
                  {category}
                </button>);
      })
    }
    {/* <button onClick={() => filterItems("breakfast")} className="filter-btn">Breakfast</button>
    <button onClick={() => filterItems("lunch")} className="filter-btn">Lunch</button>
    <button onClick={() => filterItems("shakes")} className="filter-btn">Shakes</button> */}
  </div>;
};

export default Categories;
