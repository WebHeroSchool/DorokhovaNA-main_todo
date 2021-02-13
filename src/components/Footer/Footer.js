import React from 'react';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import styles from './Footer.module.css';

const Footer = ({ count }) => (
  <div className={styles.footer}>
      <p className={styles.text}>Осталось выполнить вот столько дел: { count }</p>
      <Chip label="Все задачи"
        variant="outlined"
        size="small"
        component="a"
        href="#chip"
        clickable />
      <Chip label="Выполнены"
        variant="outlined"
        size="small"
        component="a"
        href="#chip"
        clickable />
      <Chip label="Активные"
        variant="outlined"
        size="small"
        component="a"
        href="#chip"
        clickable />
      <Button className={styles.button} variant="outlined" color="secondary" size="small">
          Удалить выполненные
      </Button>
  </div>);

export default Footer;
