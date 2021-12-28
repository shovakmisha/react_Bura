import React from "react";

import TodoListItem from "../todo-list-item";

import './todo-list.css'

const TodoList = ({todos, onDeleted2}) => {

    return (
        <ul className="list-group todo-list">
            {
                todos.map(item => {

                    const {id, ...items} = item;

                    return (
                        <li key={id} className="list-group-item">
                            {/*<TodoListItem label={items.label} important={items.important} /> Тобто в JSX якщо свойство обєкта рівне його значенню, то можна просто розвернути його */}
                            <TodoListItem {...items} onDeleted={function name2() { onDeleted2(id) }} />
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default TodoList;