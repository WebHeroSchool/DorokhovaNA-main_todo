import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    items: [
        {
          value: 'Проанализировать партнерский и зарплатный канал',
          isDone: true,
          id: 1
        },
        {
          value: 'Учесть конвертацию заявок в разрезе каждого канала',
          isDone: true,
          id: 2
        },
        {
          value: 'Подготовить аналитическую отчетность',
          isDone: true,
          id: 3
        }
    ],
    count: 3
  };

  onClickDone = id => {
      const newItemList = this.state.items.map(item => {
          const newItem = { ...item};
          if (item.id === id) {
              newItem.isDone = !item.isDone;
          }
          return newItem;
      });
      this.setState({ items: newItemList })
  };

  onClickDelete = id => {
      const newItemList = this.state.items.filter(item => item.id !== id);
      this.setState({ items: newItemList })
  };

  onClickAdd = value => this.setState(state => ({
    items: [
      ...state.items,
      {
        value: value,
        isDone: false,
        id: state.count + 1
      }
    ],
    count: state.count + 1
}));

  onClickAdd = value => console.log(value);

  render() {
    return (
      <div className={styles.wrap}>
        <Card variant="outlined">
            <CardContent>
                <h1 className={styles.title}>Важные дела:</h1>
                <InputItem OnClickAdd={this.OnClickAdd}/>
                <ItemList items={this.state.items}
                    onClickDone={this.onClickDone}
                    onClickDelete={this.onClickDelete}
                />
                <Footer count={this.state.items.filter(item => !item.isDone).length} />
            </CardContent>
        </Card>
      </div>);
  }
};

export default App;
