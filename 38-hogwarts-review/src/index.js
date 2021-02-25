import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

console.hog = (...args) => console.log("🐖🐖🐖", ...args, "🐖🐖🐖");

ReactDOM.render(<App />, document.getElementById("root"));
