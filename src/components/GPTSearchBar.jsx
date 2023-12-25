import languages from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[15%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={languages[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 p-2 px-4 bg-red-700 text-white rounded-md">
          {languages[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
