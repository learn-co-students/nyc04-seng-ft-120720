import React, { useState } from "react";

/* <MyComponent name="Ian" age={99} bio="an absolute fool" />
function MyComponent({ name, age, bio }) {
} */

function ProjectItem({ project }) {
  const [claps, setClaps] = useState(0);

  const { image, name, about, link, phase } = project;

  function handleClapClick() {
    setClaps(claps + 1);
  }

  return (
    <li className="card">
      <div className="image">
        <img src={image} alt={name} />
        <button className="claps" onClick={handleClapClick}>
          👏{claps}
        </button>
      </div>

      <div className="details">
        <h4>{name}</h4>
        <p>{about}</p>

        {/* conditional rendering! */}
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </div>

      <div className="extra">
        <span className="badge blue">Phase {phase}</span>
      </div>
    </li>
  );
}

export default ProjectItem;
