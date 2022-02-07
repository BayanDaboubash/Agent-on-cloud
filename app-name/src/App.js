import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SignUp from "./components/auth/signup";
import Login from "./components/auth/login";
import AddDate from "./components/addDate/addDate";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/AddDate" element={<AddDate />} />
      </Routes>

    </div>
  );
}

export default App;
