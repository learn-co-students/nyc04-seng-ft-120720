import React, { useState } from "react";

function Sushi({ budget, sushi, onEatSushi }) {
  const { img_url, name, price, eaten } = sushi;

  function handleEatSushi() {
    onEatSushi(sushi);
    // if (!eaten && budget >= price) {
    //   setEaten(true);
    //   onEatSushi(price);
    // }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
