import React from "react";
import { Card } from "semantic-ui-react";
import { cocktails } from "../../data.js";

function Cocktails() {
  const cocktailsElements = cocktails.drinks.map((drink) => (
    <li key={drink.name}>
      <h5>Name: {drink.name}</h5>
      <p>Description: {drink.description}</p>
      <br />
    </li>
  ));

  return (
    <Card fluid>
      <Card.Content textAlign="center">
        <ul>{cocktailsElements}</ul>
      </Card.Content>
    </Card>
  );
}

export default Cocktails;
