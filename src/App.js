import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import fire from "./fire";
import Login from "./Login";
import Hero from "./Hero";

import "./App.css";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    authListener();
  }, []);

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  return (
    <Router>
      <Route path="/" exact>
        <div className="App">{user ? <Hero /> : <Login />}</div>
      </Route>
    </Router>
  );
}

export default App;
