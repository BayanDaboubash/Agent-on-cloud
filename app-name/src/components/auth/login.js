import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import "./login.css";


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
          dispatch({ "type": "SET_TOKEN", "payload": response.data });
          setMessage("Login Successfully");
          if(response.data.user.role_id == "1"){
            setTimeout(() => {
              navigate('/listDate');
            }, 2000);
          }else{
            setTimeout(() => {
              navigate('/listSeller');
            }, 2000);
          }
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
      <div >
        <img src="https://i.ibb.co/7VxS53w/logo.png" width={100} height={80} />
      </div>
      <div className="AllClassLogin">
        <div>
          <div>
            <h2 className="titleLogin"> Agents On Cloud Assignment</h2>
          </div>
          <div className="LogIn">
            <h2>Login</h2>
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
              <Button className="ButtonLogin" variant="outline-dark" type="submit" >
                Login
              </Button>
              <div className="newAccount">
              Don't have an account? <a href="/register" style={{"fontSize": "15px","color" : "blue"}}>signup</a>
              </div>
              <div>
                <Form.Label>{message && <div className="messageLogin">{message}</div>}</Form.Label>
              </div>
            </Form>
          </div>
        </div>
        <div>
          <img src="https://iszyby.com/admin/images/signup-img.jpg" width={748} height={600} />
        </div>
      </div>
    </div>
  );
}

export default Login;
