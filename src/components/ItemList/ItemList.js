import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';


const ItemList = ({ items, onClickDone, onClickDelete }) => (<ul>
  {items.map(item => <li key={item.id}>
      <Item
          value={item.value}
          isDone = {item.isDone}
          id={item.id}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
      />
  </li>)}
</ul>);

ItemList.propTypes = {
    items: PropTypes.array,
    onClickDone: PropTypes.func,
    onClickDelete: PropTypes.func
}

export default ItemList;
