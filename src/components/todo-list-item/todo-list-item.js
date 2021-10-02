import React from "react";

import './todo-list-item.css';

const TodoListItem = ({label, important = false}) => { // це типу {label, important} = props

  const style = {
    color: important ? 'tomato' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  }

  return (
      <span className="todo-list-item">
        <span className="todo-list-item-label" style={style}>
          {label}
        </span>

        <button type="button" className="btn btn-outline-success btn-sm">
            <i className="fa fa-exclamation">Important</i>
        </button>

        <button type="button" className="btn btn-outline-danger btn-sm">
            <i className="fa fa-trash-o">Trash</i>
        </button>
      </span>
  );
}

export default TodoListItem;