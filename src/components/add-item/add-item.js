import React, {Component} from "react";

export default class AddItem extends Component {

    // let addItemValue = document.querySelectorAll('.add-item__input')[0].value;

    state = {
        label: ''
    }

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
           label: ''
        });
    }

    render() {
        return (
            <form action="" className="add-item" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Insert type text"
                    className="add-item__input class-control"
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
                <input type="submit" value="Add Item" className="add-item__button btn btn-outline-secondary" />
            </form>
        )
    }

}
