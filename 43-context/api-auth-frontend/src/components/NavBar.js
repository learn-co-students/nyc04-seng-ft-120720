import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";

function NavBar() {
  const { currentUser, setCurrentUser } = useAuth();

  function handleLogout() {
    setCurrentUser(null);
    localStorage.removeItem("token");
  }

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {currentUser ? (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
