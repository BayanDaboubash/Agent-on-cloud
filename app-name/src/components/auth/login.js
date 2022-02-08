import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const loginPage = async () => {
    if (email && password) {
      const lowerEmail = email.toLowerCase();
      await axios.post("http://localhost:5000/", { "email": lowerEmail, "password": password }).then((response) => {
        if (response) {
          dispatch({"type":"SET_TOKEN","payload":response.data});
          setMessage("Login successfully ");
          setTimeout(() => {
            navigate('/listDate');
          }, 2000);
        } else {
          setMessage("Error happened while login, please try again");
        }
      });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    loginPage();
  }

  return (
    <div>
      <p>Login</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" >
          Login
        </Button>
        <div>
          <Form.Label>{message && <div>{message}</div>}</Form.Label>
        </div>
      </Form>
    </div>
  );
}

export default Login;
