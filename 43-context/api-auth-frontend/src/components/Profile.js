import React, { useState } from "react";
import { useAuth } from "../context/auth";

function Profile() {
  const { currentUser, setCurrentUser } = useAuth();
  const [formData, setFormData] = useState({
    image: currentUser.image,
    bio: currentUser.bio,
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: update the user's profile
    // request => PATCH /me { image, bio }
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/me", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      })
        .then((r) => r.json())
        .then((user) => {
          // response => update the user in state
          setCurrentUser(user);
        });
    }
  }

  const { image, bio } = formData;

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <h1>Username's Profile</h1>

      <label>Profile Image</label>
      <input type="text" name="image" value={image} onChange={handleChange} />
      <img
        src={
          image && image.length
            ? image
            : "https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png"
        }
        alt={"Username"}
      />

      <label>Bio</label>
      <textarea name="bio" value={bio} onChange={handleChange} />

      <input type="submit" value="Update" />
    </form>
  );
}

export default Profile;
