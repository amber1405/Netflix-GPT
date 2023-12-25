import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { FaSearch } from "react-icons/fa";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGPTSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleGPTSearch = () => {
    // Toggle GPT Search
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-4 mt-2 gap-4 items-center">
  {showGPTSearch && (
    <select
      id="language"
      name="language"
      className="py-2 px-4 border hover:bg-gray-100 border-gray-300 focus:outline-none focus:ring focus:border-indigo-500 text-sm rounded-md"
      onChange={handleLanguageChange}
    >
      {SUPPORTED_LANGUAGES.map((language) => (
        <option key={language.identifier} value={language.identifier}>
          {language.name}
        </option>
      ))}
    </select>
  )}
  <button
    className="py-2 px-4 bg-purple-600 rounded-md text-white transition duration-300 ease-in-out hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-700"
    onClick={handleGPTSearch}
  >
    {showGPTSearch ? "Home Page" : "GPT Search"}
  </button>
  <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="userIcon" />
  <button
    onClick={handleSignOut}
    className="font-bold text-white transition duration-300 ease-in-out hover:underline focus:outline-none focus:ring focus:border-purple-700"
  >
    Sign Out
  </button>
</div>
      )}
    </div>
  );
};

export default Header;
