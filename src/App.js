import React from "react";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div
        style={{
          padding: "50px",
          borderRadius: "10px",
          backgroundColor: "Yellow",
          margin: "50px",
          color: "Black",
          fontSize: "50px",
          fontFamily: "Arial",
          fontWeight: "700",
        }}
      >
        Hello World!
      </div>
      <div
        style={{
          padding: "50px",
          borderRadius: "10px",
          backgroundColor: "Yellow",
          margin: "50px",
          color: "Black",
          fontSize: "20px",
          fontFamily: "Arial",
          fontWeight: "600",
        }}
      >
        <h2>About Me</h2>I am learning to build web application, which is bit
        hard, but I will reach there.
      </div>
    </React.Fragment>
  );
}

export default App;
