import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Wallet from "./Wallet";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  // const [plates, setPlates] = useState([]);
  const [budget, setBudget] = useState(100);

  const eatenSushi = sushis.filter((sushi) => sushi.eaten);
  const moneyRemaining =
    budget - eatenSushi.reduce((sum, sushi) => sum + sushi.price, 0);

  function handleEatSushi(eatenSushi) {
    if (!eatenSushi.eaten && moneyRemaining >= eatenSushi.price) {
      const updatedSushis = sushis.map((sushi) => {
        if (eatenSushi.id === sushi.id) {
          return { ...sushi, eaten: true };
        } else {
          return sushi;
        }
      });
      setSushis(updatedSushis);
    }
    // const updatedPlates = [...plates, 1];
    // setPlates(updatedPlates);
    // setBudget(budget - sushiPrice);
  }

  function handleAddMoney(money) {
    setBudget(budget + money);
  }

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushis) => {
        const updatedSushis = sushis.map((sushi) => {
          sushi.eaten = false;
          return sushi;
          // return { ...sushi, eaten: false }
        });
        setSushis(updatedSushis);
      });
  }, []);

  return (
    <div className="app">
      <SushiContainer
        budget={budget}
        sushis={sushis}
        onEatSushi={handleEatSushi}
      />
      <Table plates={eatenSushi} budget={moneyRemaining} />
      <Wallet onAddMoney={handleAddMoney} />
    </div>
  );
}

export default App;
