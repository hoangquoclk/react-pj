import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({list, removeItem, editItem}) => {

  return (
  <div className="grocery-list">
    {list.map((item) => {
      return (
        <article className="grocery-item" key={item.id}>
          <div className="title">{item.title}</div>
          <div className="btn-container">
            <button className="edit-btn" onClick={() => editItem(item.id)}>
              <FaEdit />
            </button>
            <button className="delete-btn" onClick={() => removeItem(item.id)}>
              <FaTrash />
            </button>
          </div>
        </article>
      );
    })}
  </div>);
}

export default List
