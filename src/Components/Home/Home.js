import React from "react";
import Header from "../Header/Header";
import { BrowserRouter } from "react-router-dom";
import HomeScreen from "../HomeScreen/HomeScreen";

const Home = () => {
  return (
    <BrowserRouter>
      <Header />
      <HomeScreen />
    </BrowserRouter>
  );
};

export default Home;
