import React, { useEffect, useState } from "react";

// App() -> render (JSX -> DOM) -> useEffect callback()
// setState() -> App() -> render (JSX -> DOM) -> useEffect callback()

// default behavior:
// 1 arg: run the callback after EVERY render
// 2 arg: dependencies array
// - empty array: only run the callback on the first render
// - [variables]: run the callback any time those variables change

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("my title");
  const [something, setSomething] = useState("hi");

  useEffect(() => {
    console.log("useEffect callback");
    document.title = `Title: ${text} | ${count}`;
  }, [text, count]);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicks: {count}</button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Input says: {text}</p>
    </div>
  );
}

export default App;
