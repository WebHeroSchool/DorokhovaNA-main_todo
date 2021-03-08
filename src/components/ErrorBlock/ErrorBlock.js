import React from 'react';
import styles from './ErrorBlock.module.css';
import errorImg from '../../img/error.png';

const ErrorBlock = () => (

  <div>

    <img src={errorImg} alt='Error' />

      <div className={styles.text}>
        <h2>Что-то пошло не так...</h2>
        <p>Попробуйте
            <button className={styles.btnLink} onClick={() => window.location.reload()}> загрузить </button>
        еще раз</p>
      </div>
    }
  </div>
);


export default ErrorBlock;
