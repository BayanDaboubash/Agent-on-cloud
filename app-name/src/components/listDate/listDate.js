import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Nav } from "react-bootstrap";
import "./listDate.css";

const mapStateToDrops = (state) => state.loginReducer;
const ListSeller = (state) => {
    const [state1, setState1] = useState([]);

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
                        <div className="styleNav"> <a  href="/deleteDate">Appointment Status </a> </div>
                        <div className="styleNav"> <a href="/listDate">Appointment details </a> </div>
                        <div className="styleNav"> <a href="/">Log Out </a> </div>
                    </div>
                    <div className="AllClassListDate">
                        {state1.map((ele, i) => {
                            return (
                                <div className="card">
                                    <img src="https://www.kentac.org.uk/wp-content/uploads/2016/10/calendar-icon-blue_sm.png" alt="Avatar" />
                                    <div className="container" key={i}>
                                        Name: {ele.name} <br />
                                        Date: {ele.date} <br />
                                        Phone: {ele.phone}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div >
                );
};

                export default connect(mapStateToDrops, null)(ListSeller);