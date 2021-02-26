import React from "react";

function Purse({ shake, stopShake, gold }) {
  return (
    <div className={shake ? "purse shake" : "purse"} onAnimationEnd={stopShake}>
      <img
        className="coin"
        alt="coin"
        src="https://i.pinimg.com/originals/32/f8/ee/32f8ee1f68495231452451a2edfe9b7b.gif"
      />
      <strong>x {gold}</strong>
    </div>
  );
}

export default Purse;
