import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import styles from './Footer.module.css';
import Item from '../Item/Item';


const Footer = ({ count, itemActive, itemDone, onClickFilter }) => {
    return (
        <div>
            <p className={styles.text}>Осталось выполнить вот столько дел: { count }</p>
            <div className={styles.footer}>
                <div onClick={() => onClickFilter('all')}>
                    <Chip label="Все задачи"
                      variant="outlined"
                      size="small"
                      component="a"
                      href="#chip"
                      clickable
                    />
                </div>
                <div onClick={() => onClickFilter('done')}>
                    <Chip label="Активные"
                      variant="outlined"
                      size="small"
                      component="a"
                      href="#chip"
                      clickable
                     />
                </div>
                <div onClick={() => onClickFilter('active')}>
                    <Chip label="Выполнены"
                      variant="outlined"
                      size="small"
                      component="a"
                      href="#chip"
                      clickable />
                </div>
            </div>
        </div>);

}

  Footer.propTypes = {
    count: PropTypes.number.isRequired
  };
export default Footer;
