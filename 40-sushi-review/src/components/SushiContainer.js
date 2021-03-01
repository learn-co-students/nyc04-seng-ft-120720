import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEatSushi, budget }) {
  const [startIndex, setStartIndex] = useState(0);

  const sushiComponents = sushis
    .slice(startIndex, startIndex + 4)
    .map((sushi) => {
      return (
        <Sushi
          key={sushi.id}
          budget={budget}
          sushi={sushi}
          onEatSushi={onEatSushi}
        />
      );
    });

  function handleMoreClick() {
    setStartIndex((startIndex) => {
      // there's another trick with %
      if (startIndex === sushis.length - 4) {
        return 0;
      } else {
        return startIndex + 4;
      }
    });
  }

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
