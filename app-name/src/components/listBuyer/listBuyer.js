import React, { useState, useEffect } from "react";
import axios from "axios";
import "../listDate/listDate.css"

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
        <div className="AllClassListDate">
            {state1.map((ele, i) => {
                return (
                    <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGkBYKlhh4LCUr2zn-5tEIk0d8sEinw1-wIxRc07tjD1AaTbRsIMERsypNh55W3Up0ko&usqp=CAU" alt="Avatar"/>
                    <div className="container" key={i}>
                        Name: {ele.firstName} {ele.lastName} <br />
                        Phone: {ele.phone} <br />
                        Email: {ele.email} <br />
                    </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListBuyer;