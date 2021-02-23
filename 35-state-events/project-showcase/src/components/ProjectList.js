import React, { useState } from "react";
import ProjectItem from "./ProjectItem";

// .map, .filter, .find, .sort

function ProjectList({ projects }) {
  const [search, setSearch] = useState("");
  // const [phase, setPhase] = useState("")

  console.log(search); // You

  // Assembly Line
  // [{},{},{},{}] => [{},{}]
  // [{},{}] => [<ProjectItem/>, <ProjectItem/>]
  const projectItems = projects
    .filter((project) => {
      return project.name.toUpperCase().includes(search.toUpperCase());
    })
    .map((project) => {
      return <ProjectItem key={project.id} project={project} />;
    });

  function handleSearchChange(event) {
    setSearch(event.target.value);
    // re-render our component with new search value
  }

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input
        onChange={handleSearchChange}
        type="text"
        placeholder="Search..."
      />

      <ul className="cards">{projectItems}</ul>
    </section>
  );
}

export default ProjectList;
