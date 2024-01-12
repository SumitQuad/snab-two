import React from "react";
import './App.css';
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
