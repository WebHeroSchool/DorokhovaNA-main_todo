import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './About.module.css';

const title = (<h1 className={styles.title}>Обо мне: </h1>);

const About = () => (
  <Card variant="outlined">
      <CardContent>
          {title}
      </CardContent>
  </Card>
);

export default About;
