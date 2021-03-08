import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class InputItem extends React.Component {

      state = {
        inputValue: '',
        errorString: false,
        errorText: ''
    }

    onButtonClick = (event) => {
        event.preventDefault();
        if (this.state.inputValue === '') {
            this.setState ({errorString: true, errorText: 'Поле не может быть пустым'});
        } else if (this.props.items.find(item => item.value === this.state.inputValue)) {
              this.setState ({errorString: true, errorText: 'Данная задача была добавлена ранее'});
          } else {
                this.setState({
                    inputValue: '',
                    errorString: false,
                    errorText: ''
                });
                this.props.onClickAdd(this.state.inputValue);
            }

    };


  render() {

        return (<Grid>
            <TextField
                error={this.state.errorString}
                helperText={this.state.errorText}
                id="standard-full-width"
                label="Добавь задачу"
                style={{ margin: 8 }}
                placeholder="just do it!"
                fullWidth
                margin="normal"
                value={this.state.inputValue}
                onChange={event => this.setState({ inputValue: event.target.value })}
            />
            <Button
                href=""
                variant="contained"
                color="secondary"
                fullWidth
                onClick={this.onButtonClick}
            >
                Добавить
            </Button>

          </Grid>);
    }
}

export default InputItem;
