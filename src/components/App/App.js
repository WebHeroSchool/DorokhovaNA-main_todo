import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './App.module.css';


class App extends React.Component {
  render() {
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
        <Card variant="outlined">
            <CardContent>
                <h1 className={styles.title}>Важные дела:</h1>
                <InputItem />
                <ItemList items={items} />
                <Footer count={3} />
            </CardContent>
        </Card>
    </div>);
  }
};

export default App;
