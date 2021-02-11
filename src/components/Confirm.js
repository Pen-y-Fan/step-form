import React from "react";
import AppBar from '@material-ui/core/AppBar';
import {List, ListItem} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";

class Confirm extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {values} = this.props;
    return (
      <div>
        <AppBar color="default">
          Confirm Details are correct
        </AppBar>

        <FormGroup>
          <Grid container spacing={16}>
            <Grid item xs={12} md={6}>
              <div>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={values.firstName}
                      secondary="First name"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={values.lastName}
                      secondary="Last name"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={values.email}
                      secondary="Email"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={values.occupation}
                      secondary="Occupation"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={values.city}
                      secondary="City"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={values.bio}
                      secondary="Bio"
                    />
                  </ListItem>
                </List>
              </div>
            </Grid>
          </Grid>
        </FormGroup>
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
          Send
        </Button>
      </div>
    )
  }
}

export default Confirm;
