import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    // here i can write js code and function 
    const inputTextHandle = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitTodoHandle = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
        // if(e.target.value === 'completed') {
        //     return setTodos(todos.filter((el) => el.completed === 'true'));
        // }
        // else if(e.target.value === 'uncompleted') {
        //     return setTodos(todos.filter((el) => el.completed === 'false'));  
        // }
        // return setTodos(todos);
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandle} type="text" className="todo-input" />
            <button onClick={submitTodoHandle} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div onChange={statusHandler} className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;