import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);

  console.log(sushis);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushis) => setSushis(sushis));
  }, []);

  return (
    <div className="app">
      <SushiContainer sushis={sushis} />
      <Table />
    </div>
  );
}

export default App;
