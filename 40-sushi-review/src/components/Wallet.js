import { useState } from "react";

function Wallet({ onAddMoney }) {
  const [money, setMoney] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddMoney(parseInt(money));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Add some money"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
      />
      <button type="submit">Add to budget</button>
    </form>
  );
}

export default Wallet;
