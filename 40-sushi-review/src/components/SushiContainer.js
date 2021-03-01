import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis }) {
  const [startIndex, setStartIndex] = useState(0);

  const sushiComponents = sushis
    .slice(startIndex, startIndex + 4)
    .map((sushi) => {
      return <Sushi key={sushi.id} sushi={sushi} />;
    });

  function handleMoreClick() {
    setStartIndex((startIndex) => startIndex + 4);
  }

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
