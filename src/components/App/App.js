import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';


const todoItem = 'Проанализировать партнерский и зарплатный канал';
const App = () => {
  const items = [
      {
        value: 'Проанализировать партнерский и зарплатный канал',
        isDone: true
      },
      {
        value: 'Учесть конвертацию заявок в разрезе каждого канала',
        isDone: false
      },
      {
        value: 'Подготовить аналитическую отчетность',
        isDone: true
      }
  ];
  return (
  <div className={styles.wrap}>
        <h1 className={styles.title}>Важные дела</h1>
        <InputItem />
        <ItemList items={items} />
        <Footer count={3} />
  </div>);
  }

export default App;
