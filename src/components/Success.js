import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from "@material-ui/core/Button";

class Success extends React.Component {
  restart = e => {
    e.preventDefault();
    this.props.reset();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    return (
      <div>
        <AppBar color="default">
          Form successfully submitted!
        </AppBar>
        <br/>
        <Button
          variant="contained"
          color="primary"
          onClick={this.restart}
        >
          Restart
        </Button>
      </div>
    )
  }
}

export default Success;
