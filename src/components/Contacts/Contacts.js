import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from './Contacts.module.css';

const title = (<h1 className={styles.title}>Контакты: </h1>);

const Contacts = () => (
  <Card variant="outlined">
      <CardContent className={styles.card}>
          {title}
          <a className={styles.contacts} href="mailto:nisan261lib@mail.ru">
          <EmailIcon color="secondary"/>
          nisan261lib@mail.ru</a>
          <a className={styles.contacts} href="instagram.com/dorokhovanina">
          <InstagramIcon color="secondary" /></a>
          <a className={styles.contacts} href="github.com/DorokhovaNA">
          <GitHubIcon color="secondary"/></a>
      </CardContent>
  </Card>
);

export default Contacts;
