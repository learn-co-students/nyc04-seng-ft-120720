import React, { useState } from "react";

// what needs to happen to handle a button click in vanilla JS?
/*
- select what you want to add a listener to
- set up the add event listener with the event type
- write a callback function
button.addEventListener("click", () => {
  console.log("clicked")
})

onClick 
onChange
onSubmit
*/

// ClickCounter() => setLikes(1001) => ClickCounter()
/*
ClickCounter {
  hooks: [1001]
}
*/

// clean version
function ClickCounter() {
  const [likes, setLikes] = useState(1000);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>There have been {likes} clicks</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// notes version
// function ClickCounter() {
//   const [likes, setLikes] = useState(1000);
//   console.log(likes);

//   // let likes = 0;

//   function handleClick(event) {
//     // const newValue = likes + 1;
//     setLikes(likes + 1);
//     // set the variable to a new value
//     // re-render our component!

//     // setLikes((likes) => {
//     //   return likes + 1;
//     // });

//     // likes++;
//     // console.log(likes);
//     // const h2 = event.target.parentElement.children[0];
//     // h2.textContent = `There have been ${likes} clicks`;
//   }

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>There have been {likes} clicks</h2>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

export default ClickCounter;
