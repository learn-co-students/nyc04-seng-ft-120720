import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Profile from "./Profile";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  console.log(currentUser);

  // auto-login!
  useEffect(() => {
    // TODO: check if a user has already logged in (look for their token)
    // if they've already logged in, use that token to them in again
    const token = true;
    if (token) {
      // request => GET /me
      fetch("http://localhost:3000/me")
        .then((r) => r.json())
        .then((user) => {
          // response => setCurrentUser
          setCurrentUser(user);
        });
    }
  }, []);

  return (
    <>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <main>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/profile">
            {currentUser && (
              <Profile
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            )}
          </Route>
          <Route path="/">
            {currentUser ? (
              <h1>Welcome, {currentUser.username}</h1>
            ) : (
              <h1>Please Login or Sign Up</h1>
            )}
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
