import React from "react";

function Header({ name, logo = "//", isDarkMode, onToggleDarkMode }) {
  return (
    <header>
      <h1>
        <span className="logo">{logo}</span>
        {name}
      </h1>
      <button onClick={() => onToggleDarkMode()}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
