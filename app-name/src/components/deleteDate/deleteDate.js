import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const mapStateToDrops = (state) => state.loginReducer;
const DeleteDate = (state) => {
    const [state1, setState1] = useState([]);

    const deleteD = (date_id) => {
        axios.put(`http://localhost:5000/deleteDate`, { "date_id": date_id }).then((response) => {
            Seller();
        });
    };
    const Seller = () => {
        axios.post(`http://localhost:5000/listDate/${state.user.user_id}`).then((response) => {
            setState1(response.data);
            console.log("response", response.data);
            console.log("state", state);
            console.log("map state", mapStateToDrops);
        });
    };


    useEffect(() => {
        Seller();
    }, []);

    return (
        <div>
            <div className="navbarStyle AllClassNavbar">
                <img src="https://i.ibb.co/7VxS53w/logo.png" width={100} height={80} />
                <div className="styleNav"> <Link to="/listDate">Appointment details </Link> </div>
                <div className="styleNav"> <Link to="/deleteDate">Appointment Status </Link> </div>
                <div className="styleNav"> <Link to="/">Log Out </Link> </div>
            </div>
            <div className="AllClassListDate">
                {state1.map((ele, i) => {
                    return (
                        <div className="card" key={i}>
                            <img src="https://www.kentac.org.uk/wp-content/uploads/2016/10/calendar-icon-blue_sm.png" alt="Avatar" />
                            <div className="container" >
                                Name: {ele.name} <br />
                                Date: {ele.date} <br />
                                Phone: {ele.phone}
                            </div>
                            <Button style={{ "marginTop": "1rem" }} size="lg" variant="outline-dark" type="button" onClick={() => {
                                deleteD(ele.date_id);
                            }}>
                                Delete
                            </Button>
                        </div>
                    );
                })}
            </div>
        </div >
    );
};

export default connect(mapStateToDrops, null)(DeleteDate);