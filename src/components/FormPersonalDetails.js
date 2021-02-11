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

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }


  render() {
    const {values, handleChange} = this.props;

    return (
      <div>
        <AppBar color="default">
          Enter Personal Details
        </AppBar>
        <TextField
          required
          id="occupation"
          label="Enter your occupation"
          // className={classes.textField}
          value={values.occupation}
          onChange={handleChange('occupation')}
          margin="normal"
          variant="filled"
        />
        <br/>
        <TextField
          required
          id="city"
          label="Enter your city"
          // className={classes.textField}
          value={values.city}
          onChange={handleChange('city')}
          margin="normal"
          variant="filled"
        />
        <br/>
        <TextField
          required
          id="bio"
          label="Enter your bio"
          name="bio"
          // className={classes.textField}
          value={values.bio}
          onChange={handleChange('bio')}
          margin="normal"
          variant="filled"
        />
        <br/>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.back}
        >
          back
        </Button>
        &nbsp;
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

export default withStyles(styles)(FormPersonalDetails)
