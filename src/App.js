import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/Home";
import Login from "./components/login/Login";
import PrivateOutlet from "./components/PrivateOutlet";
import Profile from "./components/profile/Profile";
import Register from "./components/register/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateOutlet />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
