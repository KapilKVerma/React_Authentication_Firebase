import React, { useState } from "react";
import fire from "./fire";

import { Form, Button, Card, Modal } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="loginForm">
      <Card style={{ width: "25rem", margin: "0 auto", padding: "50px 20px" }}>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                autoFocus
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>

            <Button
              variant="dark"
              type="submit"
              style={{ width: "100%" }}
              className="mt-3"
              onClick={login}
            >
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
