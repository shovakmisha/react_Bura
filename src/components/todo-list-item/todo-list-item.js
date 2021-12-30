import React, {Component} from "react";

import './todo-list-item.css';

class TodoListItem extends Component {

    render () {

        let {label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;


        let classNames = 'todo-list-item';

        if (done)
            classNames += ' done';

        if (important)
            classNames += " important"


        return (
            <div className={classNames}>

                <span className="todo-list-item-label" onClick={onToggleDone} >{label}</span>

                <div className="todo-list-item--controls">
                    <button type="button" className="btn btn-outline-success btn-sm" onClick={onToggleImportant}>
                        <i className="fa fa-exclamation">Important</i>
                    </button>

                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={onDeleted}>
                        <i className="fa fa-trash-o">Trash</i>
                    </button>
                </div>

            </div>
        );

    }
}

export default TodoListItem;