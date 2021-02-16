import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const InputItem = ({ OnClickAdd }) => (<Grid>
  <TextField
      id="standard-full-width"
      label="Добавь задачу"
      style={{ margin: 8 }}
      placeholder="just do it!"
      helperText=""
      fullWidth
      margin="normal"
  />
  <Button
      href=""
      variant="contained"
      color="secondary"
      fullWidth
      OnClick={() => this.OnClickAdd()}
  >
      Добавить
  </Button>

</Grid>);

export default InputItem;
