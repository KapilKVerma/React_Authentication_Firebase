import React from "react";
import fire from "./fire";

const Hero = (props) => {
  const handleLogOut = () => {
    fire.auth().signOut();
  };
  return (
    <section style={{ padding: "50px" }}>
      <h2>Welcome! React App</h2>
      <p>If you make to thid screen then you are a hero!</p>
      <button onClick={handleLogOut}>Logout</button>
    </section>
  );
};

export default Hero;
