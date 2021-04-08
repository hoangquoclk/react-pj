import React from "react";
// import components
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    // console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo 
                    todos={todos} 
                    setTodos={setTodos} 
                    key={todo.id} 
                    todo={todo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;