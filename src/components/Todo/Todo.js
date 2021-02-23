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
    items: [
        {
          value: 'Проанализировать партнерский и зарплатный канал',
          isDone: true,
          id: 1
        },
        {
          value: 'Учесть конвертацию заявок в разрезе каждого канала',
          isDone: false,
          id: 2
        },
        {
          value: 'Подготовить аналитическую отчетность',
          isDone: true,
          id: 3
        },
    ],
    count: 6
  };

  const [items, setItems] = useState(initialState.items);

	const [count, setCount] =  useState(initialState.count);

	useEffect( () => {
    console.log("update");
  });

  useEffect( () => {
      console.log('mount');
    }, []);

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

  return (
      <div className={styles.wrap}>
        <Card variant="outlined">
            <CardContent>
                <h1 className={styles.title}>Важные дела:</h1>
                <InputItem onClickAdd={onClickAdd}/>
                <ItemList items={items}
                    onClickDone={onClickDone}
                    onClickDelete={onClickDelete}
                />
                <Footer count={items.filter(item => !item.isDone).length} />
            </CardContent>
        </Card>
      </div>);
}

Todo.propTypes = {
    onClickAdd: PropTypes.func
};

export default Todo;
