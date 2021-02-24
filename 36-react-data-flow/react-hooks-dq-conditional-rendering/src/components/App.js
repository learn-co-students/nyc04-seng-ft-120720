import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import MainBox from "./MainBox";

function App() {
  return (
    <Grid centered column={1}>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row>
        <Grid.Column width={10}>
          <Segment>
            <MainBox />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
