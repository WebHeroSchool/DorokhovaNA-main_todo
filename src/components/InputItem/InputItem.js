import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
  <TextField
      id="standard-full-width"
      label="Добавить задачу"
      style={{ margin: 8 }}
      placeholder="just do it!"
      helperText=""
      fullWidth
      margin="normal"
  />

</div>);

export default InputItem;
