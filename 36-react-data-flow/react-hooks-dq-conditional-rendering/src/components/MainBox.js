import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  const [page, setPage] = useState("Photos");
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

  // function handlePageClick(newPage) {
  //   setPage(newPage);
  // }

  let componentToDisplay;
  if (page === "Profile") {
    componentToDisplay = <Profile />;
  } else if (page === "Photos") {
    componentToDisplay = <Photos />;
  }

  return (
    <div>
      <MenuBar page={page} onPageClick={setPage} />
      {componentToDisplay}
    </div>
  );
}

export default MainBox;
