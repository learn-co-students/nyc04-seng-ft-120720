import React, { useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  // TODO: when the component FIRST LOADS,
  // set an interval to run every 1 second (using setInterval)
  // every 1 second, update the time by setting state with new Date()

  return <div>{time.toString()}</div>;
}

// parent component decides whether or not to render clock
function App() {
  const [showClock, setShowClock] = useState(true);

  function toggleClock() {
    setShowClock((showClock) => !showClock);
  }

  return (
    <div>
      <button onClick={toggleClock}>{showClock ? "Hide" : "Show"} Clock</button>
      {showClock ? <Clock /> : null}
    </div>
  );
}

export default App;
