import React from "react";
import { BG_URL } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";


const GPTSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
          <img src={BG_URL} alt="bg_image" />
        </div>
        <GPTSearchBar />
    </div>
  );
};

export default GPTSearch;
