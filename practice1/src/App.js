import "./App.css";
import React from "react";

function App() {
  const name = "SMITH";

  return (
    <div>
    <div className="App styled-div">
   <h1 className = "heading">{name}</h1>
    </div>
    <div className = "styled-div">
    <h1 className = "heading"> GALLERY </h1>
   </div>
   </div>
  );
}
export default App;