import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "400px",
    margin: "0 auto",
    paddingTop: "5px",
  },
}));

export default function CharacterList({ character }) {
  const classes = useStyles();

  return (
    <div>
      <Route
        path="/Characters"
        render={() => (
          <div className={classes.root}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {/* //{characters.map((character) => { */}
                {character.aliases}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                {/* {house.swornMemebers.map((swornMemeber, key) => {
            return  */}
                <Typography>Name: {character.name}</Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <Typography>PlayedBy: {character.playedBy}</Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <Typography>Culture: {character.culture}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        )}
      ></Route>
      <Link to="/" style={{ fontSize: "xxx-large", color: "white" }}>
        Home
      </Link>
    </div>
  );
}

//<ExpansionPanelDetails style={{ flexDirection: "column" }}>

/* {house.swornMemebers.map((swornMemeber, key) => {
            return  */

//  <Typography>Name: {character.name}</Typography>
//  </ExpansionPanelDetails>
