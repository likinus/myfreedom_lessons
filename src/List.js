import React from 'react';
import ListItem from './ListItem.js';

const items = ['Wash dishes', 'Do hometask', 'Cook food', 'Watch TV', 'Play PS'];

export default () => {
    return (
        <ul>
            <ListItem text={ items[0] }/>
            <ListItem text={ items[1] }/>
            <ListItem text={ items[2] }/>
            <ListItem text={ items[3] }/>
            <ListItem text={ items[4] }/>
        </ul>
    )
}