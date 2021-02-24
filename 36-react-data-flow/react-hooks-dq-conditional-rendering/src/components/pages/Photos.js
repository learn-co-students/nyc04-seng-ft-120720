import React from "react";
import { Card, Image } from "semantic-ui-react";
import { photo } from "../../data.js";

function Photos() {
  return (
    <Card fluid>
      <Card.Content textAlign="center">
        <h2>{photo.title}</h2>
        <Image src={photo.url} />
      </Card.Content>
    </Card>
  );
}

export default Photos;
