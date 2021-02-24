import React from "react";
import { Card } from "semantic-ui-react";
import { userData } from "../../data.js";

function Profile() {
  return (
    <Card fluid>
      <Card.Content textAlign="center">
        <h3>Hi, my name is {userData.name}</h3>
        <h5>A little about me: </h5>
        <p>{userData.description}</p>
        <p>Favorite phrase: {userData.catchphrase}</p>
        <p>Age: {userData.age}</p>
      </Card.Content>
    </Card>
  );
}

export default Profile;
