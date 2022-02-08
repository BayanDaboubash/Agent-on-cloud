import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { AddDate } from "./../../reducers/addDate";
import "./addDate.css"

const Post = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [phone, setPhone] = useState("");
    const [state1, setState1] = useState([]);
    const [user_id, setUser_id] = useState(0);
    const [message, setMessage] = useState("");

    async function addNewDate() {
        try {
            const newDate = {
                name,
                date,
                phone,
                user_id
            };
            if (!name || !date || !phone || !user_id) {
                setMessage("Please full information date");
            } else {
                await axios.post("http://localhost:5000/addDate", newDate).then((response) => {
                    if (response) {
                        dispatch(AddDate(response.data));
                        setMessage("The Date has been successfully added");
                    } else {
                        setMessage("Error happened while add date, please try again");
                    }
                });
            }
        } catch (error) {
            setMessage("Error 404 happened while add date, please try again");
            throw error;
        }
    }

    const Seller = () => {
        axios.get("http://localhost:5000/listBuyer").then((response) => {
            const arr = response.data.filter((elem) => {
                return elem.role_id == 2;
            });
            setState1(arr);
            console.log("arr", arr);
            console.log("response", response.data);
        });
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        addNewDate();
    };

    return (
        <div>
            <div className="navbarStyle AllClassNavbar">
                <img src="https://i.ibb.co/7VxS53w/logo.png" width={100} height={80} />
                <div className="styleNav"> <a href="/addDate">Add appointment </a> </div>
                <div className="styleNav"> <a href="/listBuyer">Seller details</a> </div>
                <div className="styleNav"> <a href="/">Log Out </a> </div>
            </div>
            <div className="AllClassAddDate cardAddDate">
                <div className="cardForm">
                    <Form onSubmit={handelSubmit}>
                        <h3> Add New Date </h3>

                        <Form.Group size="lg" controlId="formBasicEmail">
                            <Form.Label>Name : </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name here"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group size="lg" controlId="formBasicEmail">
                            <Form.Label>Date : </Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Date here"
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group size="lg" controlId="formBasicEmail">
                            <Form.Label>Phone : </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="phone here"
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <br />
                        <Form.Group size="lg" controlId="formBasicEmail">
                            <Form.Label>Seller name: </Form.Label>
                            <Form.Label>
                                <select
                                    type="select"
                                    onClick={async (e) => {
                                        Seller();
                                        await setUser_id(e.target.value);
                                    }}
                                >
                                    <option> Choose one</option>
                                    { }
                                    {state1.map((ele, i) => {
                                        return (
                                            <option value={ele.user_id} key={i}>
                                                {ele.firstName} {ele.lastName}
                                            </option>
                                        );
                                    })}
                                </select>
                            </Form.Label>
                        </Form.Group>

                        <br />
                        <div>
                            <Button size="lg" variant="outline-dark" type="submit">
                                Add Date
                            </Button>
                        </div>
                        <div className="tostMassage3">
                            <Form.Label>{message && <div>{message}</div>}</Form.Label>
                        </div>
                    </Form>
                </div>
                <div>
                    <img src="https://iszyby.com/admin/images/signup-img.jpg" height={550} />
                </div>
            </div>
        </div>
    );
};

export default Post;

