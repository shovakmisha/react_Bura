import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";

import './app.css';

class App extends Component{

    state = {
        todoData : [
            {label: "Drink Coffee", important: false, id: 1},
            {label: "Todo React App", important: true, id: 2},
            {label: "Have a lunch", important: false, id: 3}
        ]
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {

                let index = todoData.findIndex((el) => el.id === id);

                let before = todoData.slice(0, index);
                let after = todoData.slice(index + 1);

                let newArray = [...before, ...after];

                return {
                    todoData: newArray
                }
            }
        );
    }

    render() {
        return (
            <div className="wrap-app">
                <AppHeader toDo='1' done="3" />
                <div className="search-panel">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todos={this.state.todoData} onDeleted2={ this.deleteItem } />
            </div>
        )
    }
}

export default App;
