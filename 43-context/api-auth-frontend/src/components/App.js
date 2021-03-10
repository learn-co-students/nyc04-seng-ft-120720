import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Profile from "./Profile";
import { useAuth } from "../context/auth";

function App() {
  const { currentUser } = useAuth();

  return (
    <>
      <NavBar />
      <main>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">{currentUser && <Profile />}</Route>
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
