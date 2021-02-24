import React, { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [phase, setPhase] = useState("5");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");

  // object initializer shorthand (create an object with the keys as the same names as the variables)
  // console.log({ name, about, phase, link, image });

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length > 0) {
      // persist the data and update state
      const formData = {
        name,
        about,
        phase,
        link,
        image,
      };
      // TODO: make a post request and save this to database
      onAddProject(formData);
    } else {
      alert("You must enter a name!");
    }
    // get the data out of input fields
    // uncontrolled form!
    // const formData = {
    //   name: e.target.name.value,
    //   about: e.target.about.value,
    //   phase: e.target.phase.value,
    // };
    // console.log(formData);
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Please enter a name!"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name.length === 0 ? <p>You must enter a name!</p> : null}

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />

        <label htmlFor="phase">Phase</label>
        <select
          name="phase"
          id="phase"
          value={phase}
          onChange={(e) => setPhase(e.target.value)}
        >
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <label htmlFor="image">Screenshot</label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default ProjectForm;
