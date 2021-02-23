import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './Contacts.module.css';

const title = (<h1 className={styles.title}>Контакты: </h1>);

const Contacts = () => (
  <Card variant="outlined">
      <CardContent>
          {title}
      </CardContent>
  </Card>
);

export default Contacts;
