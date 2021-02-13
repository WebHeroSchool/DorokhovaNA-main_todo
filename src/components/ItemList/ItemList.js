import React from 'react';
import Item from '../Item/Item';


const ItemList = ({ items, onClickDone }) => (<ul>
  {items.map(item => <li key={item.value}>
    <Item value={item.value} isDone = {item.isDone} onClickDone={onClickDone} /></li>)}
</ul>);

export default ItemList;
