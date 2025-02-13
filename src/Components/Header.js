import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "./Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const User = useSelector((store) => store.User);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-gray-800 z-10 flex justify-between">
      <img
        className="w-52"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix-logo"
      />
      {User && (
        <div className="flex">
          <img
            className="w-12 h-12 mt-2 border "
            src={User.photoURL}
            alt="luffy-icon"
          />
          <button
            className="text-white font-bold mb-4 "
            onClick={handleSignOut}
          >
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
