import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 px-12 ">
      <h1 className="font-bold text-3xl py-2">{title}</h1>
      <h3 className="w-2/4 py-4 text-md">{overview}</h3>
      <div>
        <button className="py-2 px-6 bg-gray-400 text-white rounded-md text-lg">
          ▶ play
        </button>
        <button className="py-2 mx-2 px-6 bg-gray-400 text-white rounded-md text-lg opacity-60">
          ℹ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
