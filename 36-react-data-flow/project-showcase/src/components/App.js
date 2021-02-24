import React, { useState } from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

// TODO: replace this with a fetch request (eventually)
import projects from "../data/projects";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleToggleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header
        name="Flatiron Projects"
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
