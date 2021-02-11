import React, {Component} from "react";
import {withStyles} from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1,
  }
};

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const {values, handleChange} = this.props;

    return (
      <div>
        <AppBar color="default">
          Enter User Details
        </AppBar>
        <TextField
          required
          id="first-name"
          label="Enter your first name"
          // className={classes.textField}
          value={values.firstName}
          onChange={handleChange('firstName')}
          margin="normal"
          variant="filled"
        />
        <br/>
        <TextField
          required
          id="last-name"
          label="Enter your last name"
          // className={classes.textField}
          value={values.lastName}
          onChange={handleChange('lastName')}
          margin="normal"
          variant="filled"
        />
        <br/>
        <TextField
          required
          id="filled-email"
          type="email"
          label="Enter your email"
          name="email"
          autoComplete="email"
          // className={classes.textField}
          value={values.email}
          onChange={handleChange('email')}
          margin="normal"
          variant="filled"
        />
        <br/>
        <Button
          variant="contained"
          color="primary"
          onClick={this.continue}
        >
          Continue
        </Button>

      </div>
    )
  }
}

export default withStyles(styles)(FormUserDetails)
