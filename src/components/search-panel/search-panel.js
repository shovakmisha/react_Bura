import React, {Component} from "react";

import './search-panel.css'

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onSearchChange = (event) => {

        let term = event.target.value;

        this.setState({term});

        this.props.onSearchChange(term);

    }

    render() {
        return (
            <input className="search-input" type="text" placeholder="search" onChange={this.onSearchChange} value={this.state.term} />
        )
    }


}
