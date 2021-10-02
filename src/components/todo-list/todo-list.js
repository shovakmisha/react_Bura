import React from "react";

import TodoListItem from "../todo-list-item";

import './todo-list.css'

const TodoList = ({todos}) => {

    return (
        <ul className="list-group todo-list">
            {
                todos.map(item => {

                    const {id, ...items} = item;

                    return (
                        <li key={id} className="list-group-item">
                            {/*<TodoListItem label={items.label} important={items.important} />*/}
                            <TodoListItem {...items} />
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default TodoList;