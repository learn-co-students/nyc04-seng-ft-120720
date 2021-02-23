import React from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
// TODO: use to demo state/events
import ClickCounter from "./ClickCounter";

// TODO: replace this with a fetch request (eventually)
import projects from "../data/projects";

function App() {
  return (
    <div className="App">
      <Header name="Flatiron Projects" />
      <ClickCounter />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
