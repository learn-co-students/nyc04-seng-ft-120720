import React from "react";

// function SomeComponent({ anything }) {
//   return <p>{anything}</p>;
// }

function Header({ name, logo = "++" }) {
  return (
    <header>
      <h1>
        <span className="logo">{logo}</span>
        {name}
      </h1>
      <button>Dark Mode</button>
    </header>
  );
}

export default Header;
