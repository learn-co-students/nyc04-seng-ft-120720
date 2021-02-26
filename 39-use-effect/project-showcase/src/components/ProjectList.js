import React, { useState } from "react";
import Filter from "./Filter";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const [search, setSearch] = useState("");
  const [phase, setPhase] = useState("All");

  // Assembly Line
  // [{},{},{},{}] => [{},{}] => [<ProjectItem/>, <ProjectItem/>]
  const projectItems = projects
    .filter((project) =>
      project.name.toUpperCase().includes(search.toUpperCase())
    )
    .filter((project) => phase === "All" || project.phase === phase)
    .map((project) => <ProjectItem key={project.id} project={project} />);

  return (
    <section>
      <h2>Projects</h2>

      <Filter
        search={search}
        setSearch={setSearch}
        phase={phase}
        setPhase={setPhase}
      />

      <ul className="cards">{projectItems}</ul>
    </section>
  );
}

export default ProjectList;
