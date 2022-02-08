import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";


const mapStateToDrops = (state) =>state.loginReducer;
const ListSeller = (state) => {
    const [state1, setState1] = useState([]);
    
    const Seller = () => {
        axios.post(`http://localhost:5000/listDate/${state.user.user_id}`).then((response) => {
            setState1(response.data);
            console.log("response", response.data);
            console.log("state",state);
            console.log("map state",mapStateToDrops );
        });
    };


    useEffect(() => {
        Seller();
    }, []);

    return (
        <div>
            {state1.map((ele, i) => {
                return (
                    <p key={i}>
                        {ele.name} {ele.date} 
                        {ele.phone} 
                    </p>
                );
            })}
        </div>
    );
};

export default connect(mapStateToDrops,null)(ListSeller);