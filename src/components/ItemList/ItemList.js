import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (<ul>
  <li><Item todoItem={todoItem} /></li>
  <li><Item todoItem={'Учесть конвертацию заявок в разрезе каждого канала'} /></li>
  <li><Item todoItem={'Подготовить аналитическую отчетность'} /></li>
</ul>);

export default ItemList;
