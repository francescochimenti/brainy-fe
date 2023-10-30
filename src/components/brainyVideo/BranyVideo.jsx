import React from "react";
import video from "../../assets/logo.mov";

const BranyVideo = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center p-11">
      <video src={video} autoPlay loop muted className="w-96" />
    </div>
  );
};

export default BranyVideo;
