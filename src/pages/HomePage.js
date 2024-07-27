import React from "react";
import banner from "../images/banner2.png";
import WebcamComponent from "../Components/WebcamComponent";

const HomePage = () => {
  return (
    <div className="home-body">
      <WebcamComponent />
      <img src={banner} alt="" />
    </div>
  );
};

export default HomePage;
