import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import AddItem from "../add-item";

import './app.css';

class App extends Component{

    state = {
        todoData : [
            {label: "Drink Coffee", important: false, done:false, id: 1},
            {label: "Todo React App", important: true, done:false, id: 2},
            {label: "Have a lunch", important: false, done:false, id: 3}
        ],
        term: '',
        filter: 'all' // all, active done
    }

    filter (items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter(item => !item.done);
            case 'done':
                return items.filter(item => item.done);
            default:
                return items;
        }
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

     addItem = (itemText) => {
          this.setState( ({todoData}) => {

              todoData.push({label: itemText, important: false, id: todoData.length+1})

              return {
                  todoData
              }
          })
     }

     onToggleImportant = (id) => {
        this.setState(({todoData}) => {

            let index = todoData.findIndex((el) => el.id === id);

            //todoData[index].important = !todoData[index].important;

            let oldItem = todoData[index];
            let newItem = {...oldItem, important: !oldItem.important}; // тобто я перекриваю старе значення important новим

            let newArray = [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)];

            return {
                todoData: newArray
            };
            
        });
     }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {

            let index = todoData.findIndex((el) => el.id === id);

            todoData[index].done = !todoData[index].done

            return {
                todoData
            }

        });
    }

    search = (items, term) => {

        if (term === '')
            return items;

        return items.filter(item => {
           return  item.label.indexOf(term) > -1;
        });
    }

    onSearchChange = (term) => {
        this.setState({term});
    }

    onFilterChange = (filter) => {
        this.setState({filter});
    }

    render() {

        let {todoData, term, filter} = this.state;

        let visibleItems = this.filter(this.search(todoData, term), filter);

        let doneCount = this.state.todoData.filter(item => item.done === true).length;
        let todoCount = this.state.todoData.length - doneCount;

        return (
            <div className="wrap-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="search-panel">
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange} />
                </div>
                <TodoList
                    todos={visibleItems}
                    onDeleted2={ this.deleteItem }
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddItem addItem={ this.addItem } />
            </div>
        )
    }
}

export default App;
