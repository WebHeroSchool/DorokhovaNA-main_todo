import React, { useState, useEffect } from 'react';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';


const Todo = () => {
	const initialState = {
		items: JSON.parse(localStorage.getItem('items')) || [],
    filter: 'all'
  };

	const [items, setItems] = useState(initialState.items);

	const [count, setCount] =  useState(0);
  const [filter, setFilter] = useState(initialState.filter);
	let itemsFilter;

	useEffect(() => {
	    localStorage.setItem('items', JSON.stringify(items));
	  });

	const itemActive = (items.filter((item) => item.isDone === true)).length;
	const itemDone = (items.filter((item) => item.isDone === false)).length;

    const onClickDone = id => {
  		const newItemList = items.map(item => {

          const newItem = { ...item};
          if (item.id === id) {
              newItem.isDone = !item.isDone;
          }
          return newItem;
      });
      setItems(newItemList);
  };

  const onClickDelete = id => {
      const newItemList = items.filter(item => item.id !== id);

      setItems(newItemList);
  	  setCount(count => count - 1);
  };

  const onClickAdd = value => {
    const newItems = [

      {
        value,
        isDone: false,
        id: count + 1
      },
      ...items,
    ];

    setItems(newItems);
    setCount(count => count + 1);
};

  const onClickFilter = filtered => setFilter(filtered);
	switch (filter) {
			case 'done':
					itemsFilter = items.filter(item => !item.isDone);
					break;
			case 'active':
					itemsFilter = items.filter(item => item.isDone);
					break;
			default:
					itemsFilter = items;
	}

	 return (
      <div className={styles.wrap}>
        <Card variant="outlined">
            <CardContent>
                <h1 className={styles.title}>Важные дела:</h1>
                <InputItem items={items} onClickAdd={onClickAdd} />
                <ItemList items={items}
                    onClickDone={onClickDone}
                    onClickDelete={onClickDelete}
										items={itemsFilter}
                />
                <Footer
										count={items.filter(item => !item.isDone).length}
						        filtered={filter}
						        itemActive={itemActive}
						        itemDone={itemDone}
						        onClickFilter={onClickFilter}
										/>
            </CardContent>
        </Card>
      </div>);
}

Todo.propTypes = {
    onClickAdd: PropTypes.func
};

export default Todo;
