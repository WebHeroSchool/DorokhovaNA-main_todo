import React from 'react';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './Item.module.css';

const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (<div className = {
    classnames({
        [styles.item]: true,
        [styles.done]: isDone
    })
}>
    <Checkbox
        checked={isDone}
        defaultChecked
        color="secondary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        onClick={() => onClickDone(id)}
     />
     {value}
     <Tooltip title="Delete">
        <IconButton aria-label="delete" color="secondary" onClick={() => onClickDelete(id)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
</div>);

Item.defaultProps = {
	  isDone: true
};

export default Item;
