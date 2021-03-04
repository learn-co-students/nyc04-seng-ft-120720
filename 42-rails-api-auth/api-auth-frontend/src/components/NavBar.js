import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <button>Logout</button>
      </div>
    </header>
  );
}

export default NavBar;
