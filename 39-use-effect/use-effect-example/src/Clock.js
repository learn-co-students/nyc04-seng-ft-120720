import React, { useEffect, useState } from "react";

// Clock() -> useEffect callback() -> setInterval() -> set state
// unmount Clock -> React calls cleanup()

// setCount() -> Clock() -> useEffect cleanup() -> useEffect callback()
function Clock() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  // TODO: when the component FIRST LOADS,
  // set an interval to run every 1 second (using setInterval)
  // every 1 second, update the time by setting state with new Date()
  useEffect(() => {
    console.log("useEffect called");
    const intervalId = setInterval(() => {
      console.log("timer running");
      setTime(new Date());
    }, 1000);

    return function cleanup() {
      console.log("cleanup");
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {time.toString()}
    </div>
  );
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
