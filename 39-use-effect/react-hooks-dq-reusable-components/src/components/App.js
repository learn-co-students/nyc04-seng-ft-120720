import React, { useEffect, useState } from "react";
import Inventory from "./Inventory";
import Shop from "./Shop";
import potions from "../data";

function App() {
  const [gold, setGold] = useState(500);
  const [inventory, setInventory] = useState([]);
  const [shake, setShake] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    if (sound) {
      const audio = new Audio(sound);
      audio.play();
      audio.addEventListener("ended", () => setSound(null));
    }
  }, [sound]);

  function stopShake() {
    setShake(false);
  }

  function addToInventory(potionID) {
    const potion = potions.find((potion) => potion.id === potionID);

    if (gold - potion.buyCost >= 0) {
      setGold(gold - potion.buyCost);

      const foundItem = inventory.find((potion) => {
        return potion.id === potionID;
      });

      if (foundItem) {
        const updatedPotion = { ...foundItem, amount: foundItem.amount + 1 };

        const newInventory = inventory.map((potion) => {
          if (potion.id === potionID) {
            return updatedPotion;
          } else {
            return potion;
          }
        });

        setInventory(newInventory);
      } else {
        let newInventory = [...inventory, { id: potionID, amount: 1 }];

        setInventory(newInventory);
      }
      setSound("./pickup.wav");
    } else {
      setShake(true);
      setSound("./wrong.wav");
    }
  }

  function sell(potionID) {
    const potion = potions.find((potion) => potion.id === potionID);

    setGold(gold + potion.sellPrice);

    const foundItem = inventory.find((potion) => {
      return potion.id === potionID;
    });
    const updatedPotion = { ...foundItem, amount: foundItem.amount - 1 };

    if (updatedPotion.amount === 0) {
      const newInventory = inventory.filter((potion) => potion.id !== potionID);

      setInventory(newInventory);
    } else {
      const newInventory = inventory.map((potion) => {
        if (potion.id === potionID) {
          return updatedPotion;
        } else {
          return potion;
        }
      });
      setInventory(newInventory);
    }

    setSound("./coins.wav");
  }

  return (
    <div className="app">
      <div className="potion-shop">
        <Shop potions={potions} addToInventory={addToInventory} />
        <Inventory
          stopShake={stopShake}
          shake={shake}
          gold={gold}
          sell={sell}
          potions={potions}
          inventory={inventory}
        />
      </div>
    </div>
  );
}

export default App;
