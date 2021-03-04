import React, { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    image: "",
    bio: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: sign up as a new user
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

      <input type="submit" value="Signup" />
    </form>
  );
}

export default SignUp;
