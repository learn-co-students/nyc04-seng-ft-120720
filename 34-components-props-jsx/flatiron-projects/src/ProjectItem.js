function ProjectItem(props) {
  console.log(props);
  props.callMe();
  return <h1>{props.title}</h1>;
}

export default ProjectItem;

// react 17 (gets rid of import)
