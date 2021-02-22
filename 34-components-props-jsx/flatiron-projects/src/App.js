// import React from "react";
import "./App.css";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Header />
      <ProjectForm />
      <ProjectList />
    </div>
  );
}

// starts with a capital letter!
// returns JSX (JavaScript XML)
// function App() {
//   return React.createElement(
//     "div",
//     {
//       className: "App",
//     },
//     React.createElement("h1", null, "App")
//   );
// }

export default App;
