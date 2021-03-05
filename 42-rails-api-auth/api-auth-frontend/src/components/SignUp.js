import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignUp({ setCurrentUser }) {
  const [formData, setFormData] = useState({
    username: "",
    image: "",
    bio: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: sign up as a new user
    // request => POST /signup
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            throw data;
          });
        }
      })
      .then((data) => {
        // set the user in state
        setCurrentUser(data.user);
        // save the token!
        localStorage.setItem("token", data.token);
        // redirect
        history.push("/");
      })
      .catch((data) => {
        setErrors(data.errors);
      });
  }

  const { username, image, bio, password } = formData;

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <h1>Signup</h1>

      <label>Username</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />

      <label>Profile Image</label>
      <input type="text" name="image" value={image} onChange={handleChange} />
      <img
        src={
          image.length
            ? image
            : "https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png"
        }
        alt={username}
      />

      <label>Bio</label>
      <textarea name="bio" value={bio} onChange={handleChange} />

      <label>Password</label>
      <input
        type="password"
        name="password"
        autoComplete="current-password"
        value={password}
        onChange={handleChange}
      />

      {errors.map((error) => (
        <p key={error} style={{ color: "red" }}>
          {error}
        </p>
      ))}
      <input type="submit" value="Signup" />
    </form>
  );
}

export default SignUp;
