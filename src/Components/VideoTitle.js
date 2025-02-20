import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-20 absolute text-black bg-gradient-to-r from-black">
      <h1 className="font-bold text-3xl py-2 text-white">{title}</h1>
      <h3 className="w-2/4 py-4 text-md text-white">{overview}</h3>
      <div>
        <button className="py-2 px-6  bg-gray-400 rounded-md text-lg hover:bg-slate-500 text-white font-semibold">
          ▶ Play
        </button>
        <button className="py-2 mx-2 px-6 bg-gray-400 text-white rounded-md text-lg opacity-60 hover:bg-gray-300 font-semibold">
          ℹ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
