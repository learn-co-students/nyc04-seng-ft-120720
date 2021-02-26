import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("useEffect callback");
  });

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
