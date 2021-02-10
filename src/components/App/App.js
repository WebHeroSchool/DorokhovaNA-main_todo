import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

const todoItem = 'Проанализировать партнерский и зарплатный канал';
const App = () => {
  const items = [
      {
        value: 'Проанализировать партнерский и зарплатный канал'
      },
      {
        value: 'Учесть конвертацию заявок в разрезе каждого канала'
      },
      {
        value: 'Подготовить аналитическую отчетность'
      }
  ];
  return (
  <div className="wrap">
        <h1 className="wrap__title">Важные дела</h1>
        <ItemList items={items} />
        <Footer count={3} />
  </div>);
  }

export default App;
