import React from "react";
import Header from "../Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../HomeScreen/HomeScreen";
import DetailScreen from "../Profile/DetailScreen";

const Home = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/DetailScreen" element={<DetailScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
