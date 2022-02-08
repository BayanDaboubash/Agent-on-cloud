import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "./listBuyer.css";
import { Link } from "react-router-dom";

const ListBuyer = () => {
    const [state1, setState1] = useState([]);
    const [nameState, setNameState] = useState([]);
    const [search1, setSearch1] = useState("");

    const  Seller = async() => {
        await axios.get("http://localhost:5000/listBuyer").then((response) => {
            const arr = response.data.filter((elem) => {
                return elem.role_id == 1;
            });
            setState1(arr);
            setNameState(arr);
            console.log("arr", arr);
            console.log("response", response.data);
        });
    };

    const search = async() => {
        const arr1 = nameState;
        console.log("arr1:",arr1);
        const filterArr= arr1.filter((ele)=>{
            if(`${ele.firstName} ${ele.lastName}`.toLowerCase().includes(search1.toLowerCase())){
               return ele;
            }
        }) 
        setState1(filterArr);
    }

    useEffect(() => {
        Seller();
    }, []);

    return (
        <div>
            <div className="navbarStyleB AllClassNavbarB">
                <img src="https://i.ibb.co/7VxS53w/logo.png" width={100} height={80} />
                <div className="styleNavB"> <a href="/listBuyer">Seller details</a> </div>
                <div className="styleNavB"> <a href="/addDate">Add appointment </a> </div>
                    <Form className="searchStyle">
                <div>
                    <Form.Group size="lg" controlId="formBasicEmail">
                            <Form.Control
                                type="text"
                                placeholder="Search ..."
                                onChange={(e) => setSearch1(e.target.value)}
                                required
                                style={{"marginTop":"1.3rem"}}
                            />
                        </Form.Group>
                </div>
                <div>
                            <Button style={{"marginTop":"1rem"}} size="lg" variant="outline-dark" type="button"  onClick={search}>
                                Search
                            </Button>
                </div>
                            </Form>
                    <div className="styleNavB"> <a href="/">Log Out </a> </div>
                </div>
                <div className="AllClassListDateB">
                    {state1.map((ele, i) => {
                        return (
                            <div className="cardB">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGkBYKlhh4LCUr2zn-5tEIk0d8sEinw1-wIxRc07tjD1AaTbRsIMERsypNh55W3Up0ko&usqp=CAU" alt="Avatar" />
                                <div className="containerB" key={i}>
                                    Name: {ele.firstName} {ele.lastName} <br />
                                    Phone: {ele.phone} <br />
                                    Email: {ele.email} <br />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            );
};

            export default ListBuyer;