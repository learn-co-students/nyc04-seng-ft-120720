import ProjectItem from "./ProjectItem";

const projects = [
  "Fludoku",
  "NextFlix",
  "Die Mad Libs",
  "Recipe Book",
  "The Weather App",
  "DraftQueens",
  "Escape",
];

function ProjectList() {
  // const style = {
  //   color: "red",
  // };

  // h1.className = "list-class"
  // h1.classList.add()
  // style="color: red;"

  function callMe() {
    console.log("called");
  }

  return (
    <div
      id="list"
      className="list-class"
      style={{
        color: "red",
      }}
    >
      <h1>ProjectList</h1>
      <ProjectItem title={projects[0]} isGreatProject={true} callMe={callMe} />
      {/* ProjectItem({ title: projects[0], isGreatProject: true }) */}
      <ProjectItem title={projects[1]} isGreatProject={true} callMe={callMe} />
      <ProjectItem title={projects[2]} isGreatProject={true} callMe={callMe} />
    </div>
  );
}

export default ProjectList;
