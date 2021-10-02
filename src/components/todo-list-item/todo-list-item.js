import React from "react";

const TodoListItem = ({label, important = false}) => { // це типу {label, important} = props

  const style = {
    color: important ? 'tomato' : 'black'
  }

  return (
      <span style={style}>{label}</span>
  );
}

export default TodoListItem;