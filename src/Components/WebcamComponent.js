import React from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => {
  const videoConstraints = {
    width: 800,
    height: 600,
    aspectRatio: 0.6666666667,
  };

  return (
    <div className="webcam flex justify-center items-center">
      <Webcam height={600} width={800} />
    </div>
  );
};

export default WebcamComponent;
