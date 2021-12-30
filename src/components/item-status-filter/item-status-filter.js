import React, {Component} from "react";

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ];

    render() {

        let {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            let isActive = filter === name;

            let clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

            return (<button
                        key={name}
                        type="button"
                        className={`btn ${clazz}`}
                        onClick={() => onFilterChange(name)}
                    >{label}</button>);
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}
