import React from "react";

import TodoListItem from "../todo-list-item";

const TodoList = ({todos}) => {

    return (
        <ul>
            {
                todos.map(item => {

                    const {id, ...items} = item;

                    return (
                        <li key={id}>
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