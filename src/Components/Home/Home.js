import React from "react";
import Header from "../Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../HomeScreen/HomeScreen";
import DetailScreen from "../Profile/DetailScreen";
import Register from "../Auth/Register";
import SignIn from "../Auth/Signin";
import ResetPassword from "../Auth/ResetPassword";
import NewPassword from "../Auth/NewPassword";

const Home = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/DetailScreen" element={<DetailScreen />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/requestReset" element={<ResetPassword />} />
        <Route path="/newPassword" element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
