import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSigninForm,setIsSigninForm]=useState(true);
  const toggleSignIn=()=>{
    setIsSigninForm(!isSigninForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg_image" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-85" >
        <h1 className="font-bold text-3xl py-4 ">{isSigninForm?"Sign In" : "Sign Up"}</h1>
        {!isSigninForm && (<input type="email" placeholder="Full Name" className="p-3 my-2 w-full bg-[#333] rounded-md" />)}
        <input type="email" placeholder="Email or phone number" className="p-3 my-2 w-full bg-[#333] rounded-md" />
        <input type="password" placeholder="Password" className="p-3 my-2 w-full bg-[#333] rounded-md" />
        <button className="py-4 my-2 bg-[#e50914] w-full rounded-md">{isSigninForm?"Sign In" : "Sign Up"}</button>
        <p className="py-4 text-[#737373] cursor-pointer" onClick={toggleSignIn}>{isSigninForm?"New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
