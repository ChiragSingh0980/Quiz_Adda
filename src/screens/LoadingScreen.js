import React from "react";
import Loader from "react-loader-spinner";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading">
      <Loader color="#29455a" width={130} height={130} type="TailSpin" />
    </div>
  );
};
export default LoadingScreen;
