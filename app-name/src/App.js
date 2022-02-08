import React, {useEffect} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SignUp from "./components/auth/signup";
import Login from "./components/auth/login";
import AddDate from "./components/addDate/addDate";
import ListBuyer from "./components/listBuyer/listBuyer"
import ListSeller from "./components/listDate/listDate";
import DeleteDate from "./components/deleteDate/deleteDate";
import { useDispatch, connect } from "react-redux";


const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const getUser = () => {
    let user = sessionStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      dispatch({ "type": "SET_TOKEN", "payload": user });
    }
    console.log("aaaaaaaaaaaa");
  }

  useEffect( ()=>{
  getUser();
  },[location])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/AddDate"  element={<AddDate />} />
        <Route path="/listBuyer"  element={<ListBuyer />} />
        <Route path="/listDate"  element={<ListSeller />} />
        <Route path="/deleteDate"  element={<DeleteDate />} />
      </Routes>

    </div>
  );
}

export default App;
