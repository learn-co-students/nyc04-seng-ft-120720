import React, { useState } from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

// TODO: replace this with a fetch request (eventually)
import projectData from "../data/projects";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState(projectData);

  console.log(projects);

  function handleToggleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleAddProject(newProject) {
    // projects.push(newProject);
    // const updatedProjects = [...projects, newProject];
    setProjects([...projects, newProject]);
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header
        name="Flatiron Projects"
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />
      <ProjectForm onAddProject={handleAddProject} />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
