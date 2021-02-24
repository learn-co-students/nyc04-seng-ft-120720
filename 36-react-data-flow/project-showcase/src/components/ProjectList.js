import React, { useState } from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const [search, setSearch] = useState("");
  const [phase, setPhase] = useState("All");

  // Assembly Line
  // [{},{},{},{}] => [{},{}] => [<ProjectItem/>, <ProjectItem/>]
  const projectItems = projects
    .filter((project) => {
      return project.name.toUpperCase().includes(search.toUpperCase());
    })
    .filter((project) => {
      return phase === "All" || project.phase === phase;
    })
    .map((project) => {
      return <ProjectItem key={project.id} project={project} />;
    });

  return (
    <section>
      <h2>Projects</h2>

      {/* TODO: make FilterBar component */}
      <div className="filter">
        <button onClick={() => setPhase("All")}>All</button>
        <button onClick={() => setPhase(5)}>Phase 5</button>
        <button onClick={() => setPhase(4)}>Phase 4</button>
        <button onClick={() => setPhase(3)}>Phase 3</button>
        <button onClick={() => setPhase(2)}>Phase 2</button>
        <button onClick={() => setPhase(1)}>Phase 1</button>
      </div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search..."
      />

      <ul className="cards">{projectItems}</ul>
    </section>
  );
}

export default ProjectList;
