import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "./signup.css";


const Signup = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [role_id, setRoleId] = useState(1);

    async function addNewUser() {
        try {
          const newUser = {
            firstName,
            lastName,
            phone,
            email,
            password,
            role_id
          };
          console.log(newUser);
          if (!firstName || !lastName || !phone || !email || !password || !role_id) {
            setMessage("Please fill all the info");
          } else {
            await axios.post("http://localhost:5000/register", newUser).then((response) => {
              if (response) {
                setMessage("The user has been created successfully ");
                setTimeout( () =>{
                  navigate('/');
                  }, 2000);
              } else {
                setMessage("Error happened while register, please try again");              
              }
            });
          }
        } catch (error) {
          setMessage("Error 5000 happened while register, please try again");
          throw error;
        }
      }

      const handelSubmit = (e) => {
        e.preventDefault();
        addNewUser();
      };


      
    return (
      <div>
        <div>
        <img src="https://i.ibb.co/7VxS53w/logo.png" width={100} height={80} />
      </div>
      <div className="AllClassSignUp">
        <div className="SignUp">
            <Form onSubmit={handelSubmit}>
                <h2> Sign up </h2>
                <Form.Group size="lg" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                        name="firstName"
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Last Name"
                        name="lastName"
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="Number" placeholder="Enter Phone" name="Phone" onChange={(e) => setPhone(e.target.value)} />
                </Form.Group>
                <Form.Group size="lg" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="formUser">
                    <Form.Label>Sign up as:</Form.Label>
                    <select onChange={(e) => setRoleId(e.target.value)} className="form-control form-control-lg">
                        <option value="1" >Seller</option>
                        <option value="2" >Buyer</option>
                    </select>
                </Form.Group>
                <Form.Group>
                  <br/>
                    <Button className="ButtonSignUp" variant="outline-dark" type="submit">
                        Sign up
                    </Button>
                </Form.Group>
                <div>
                    <Form.Label>{message && <div className="messageSignUp">{message}</div>}</Form.Label>
                </div>
            </Form>
        </div>
        <div>
          <img src="https://iszyby.com/admin/images/signup-img.jpg" width={748} height={600}/>
        </div>
      </div>
      </div>
    );
};

export default Signup;
