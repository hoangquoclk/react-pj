import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if(list) {
    return JSON.parse(localStorage.getItem("list"));
  }
  else {
    return [];
  }
}

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({show: false, msg: '', type: ''});
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) {
      // display alert
      showAlert(true, "danger", "please enter value");
    }
    else if(value && isEditing) {
      //deal with edit
      setList(list.map((item) => {
        if(item.id === editId) {
          return {...item, title: value};
        }
        return item;
      }));
      showAlert(true, "success", "item edited success");
      setValue("");
      setIsEditing(false);
      setEditId(null);
    }
    else {
      // show alert
      showAlert(true, "success", "item added to the list");
      const newItem = {id: new Date().getTime().toString(), title:value};
      setList([...list, newItem]);
      setValue("");
    }
  }

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({show, type, msg});
  }

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  }

  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setValue(specificItem.title);
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return <section className="section-center">
    <form className="grocery-form" onSubmit={handleSubmit}>
    
    {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

      <h3>grocery bud</h3>
      <div className="form-control">
        <input type="text" className="grocery" 
        placeholder="e.g. eggs" value={value} 
        onChange={(e) => {setValue(e.target.value)}} />
        <button type="submit" className="submit-btn">
          {isEditing ? "Edit" : "Submit"}
        </button>
      </div>
    </form>
    
    {list.length > 0 && 
      <div className="grocery-container">
        <List list={list} 
        removeItem={removeItem}
        editItem={editItem}
        />
        <button className="clear-btn" onClick={clearList}>Clear items</button>
      </div>
    }
  </section>
}

export default App
