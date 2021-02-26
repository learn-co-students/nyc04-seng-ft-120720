import React, { useEffect, useState } from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

// TODO: replace this with a fetch request
// import projectData from "../data/projects";

// App() -> fetch() -> setProjects() -> App() -> fetch() -> setProjects() -> App() ...

// App() -> render to the DOM -> useEffect callback -> setProjects() -> App() -> no more useEffect callback
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    // all this code is a side effect
    console.log("useEffect");
    fetch(`http://localhost:4000/projects`)
      .then((r) => r.json())
      .then((projectArray) => {
        setProjects(projectArray);
      });
  }, []);

  console.log("rendering");

  function handleToggleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleAddProject(newProject) {
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header
        name="Flatiron Projects"
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />
      <ProjectForm onAddProject={handleAddProject} />
      {projects ? <ProjectList projects={projects} /> : <h2>Loading...</h2>}
    </div>
  );
}

export default App;
