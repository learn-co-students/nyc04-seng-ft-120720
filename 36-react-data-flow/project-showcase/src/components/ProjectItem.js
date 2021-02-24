import React, { useState } from "react";

function ProjectItem({ project }) {
  const [claps, setClaps] = useState(0);

  function handleClapClick() {
    setClaps((claps) => claps + 1);
  }

  const { image, name, about, link, phase } = project;
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
