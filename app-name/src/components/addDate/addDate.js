import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { AddDate } from "./../../reducers/addDate";

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
            console.log("....new post ....", newDate);
            if (!name || !date || !phone || !user_id) {
                setMessage("Please full information date");
            } else {
                await axios.post("/addDate", newDate).then((response) => {
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
        axios.get("/listBuyer").then((response) => {
          setState1(response.data);
        });
      };

    const handelSubmit = (e) => {
        e.preventDefault();
        addNewDate();
    };

    return (
        <div>
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
                        type="text"
                        placeholder="Url photo here"
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

                <Form.Group size="lg" controlId="formBasicEmail">
                    <Form.Label>Seller name: </Form.Label>
                    <Form.Label>
                        <select
                            className="input select"
                            type="select"
                            onClick={async (e) => {
                                Seller();
                                await setUser_id(e.target.value);
                            }}
                        >
                            { }
                            {state1.map((ele, i) => {
                                return (
                                    <option value={ele.user_id} key={i}>
                                        {ele.type}
                                    </option>
                                );
                            })}
                        </select>
                    </Form.Label>
                </Form.Group>


                <div>
                    <Button  size="lg" variant="outline-dark" type="submit">
                        Add Date
                    </Button>
                </div>
                <div className="tostMassage3">
                    <Form.Label>{message && <div>{message}</div>}</Form.Label>
                </div>
            </Form>
        </div>
    );
};

export default Post;

