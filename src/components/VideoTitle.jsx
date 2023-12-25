import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex"></div>
      <div className="flex">
        <button className="bg-white text-black py-3 px-7 h-14 text-xl rounded-md hover:bg-opacity-80 m-4 flex gap-2">
          <FaPlay className="h-7"/> Play
        </button>
        <button className="bg-gray-700 text-white py-3 px-3 h-14 text-xl rounded-md hover:bg-opacity-80 flex mt-4 gap-2">
          <MdOutlineInfo className="size-7"/> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
