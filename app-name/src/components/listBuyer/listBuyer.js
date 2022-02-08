import React, { useState, useEffect } from "react";
import axios from "axios";

const ListBuyer = () => {
    const [state1, setState1] = useState([]);

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


    useEffect(() => {
        Seller();
    }, []);

    return (
        <div>
            {state1.map((ele, i) => {
                return (
                    <p key={i}>
                        {ele.firstName} {ele.lastName} 
                        {ele.phone} 
                        {ele.email} 
                    </p>
                );
            })}
        </div>
    );
};

export default ListBuyer;