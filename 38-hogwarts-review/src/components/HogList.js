import { useState } from "react";
import Filter from "./Filter";
import HogTile from "./HogTile";

function HogList({ hogs }) {
  const [isShowingOnlyGreased, setIsOnlyShowingGreased] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  // map over the hogs, and create a HogTile component
  // filter fn on the hogs, ternary - if the state is true, return the greased hogs, otherwise return true

  // assemeby line - [{},{},{},{}] => [{},{},{}] => [{1},{2},{3}] => [<>,<>,<>]
  const filteredHogs = hogs.filter((hog) => {
    if (isShowingOnlyGreased) {
      return hog.greased;
    } else {
      return true;
    }
  });

  // sort is destructive and sorts in-place!
  filteredHogs.sort((hogA, hogB) => {
    // return -1, 0, 1 (this will either flip the order of the hogs or leave them the same)
    if (sortBy === "weight") {
      return hogA.weight - hogB.weight;
    } else {
      return hogA.name.localeCompare(hogB.name);
    }
  });

  const hogTiles = filteredHogs.map((hog) => (
    <HogTile key={hog.name} hog={hog} />
  ));

  return (
    <div>
      <Filter
        isShowingOnlyGreased={isShowingOnlyGreased}
        setIsOnlyShowingGreased={setIsOnlyShowingGreased}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <div className="ui grid container">{hogTiles}</div>
    </div>
  );
}

export default HogList;
