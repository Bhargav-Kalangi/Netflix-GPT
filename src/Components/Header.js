import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useRef } from "react";
import { auth } from "./Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { LOGO, SUPPORTED_LANGUAGES } from "./Utils/constants";
import { addUser, removeUser } from "./Redux/Userslice";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "./Redux/gptSlice";
import { changeLanguage } from "./Redux/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
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

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  const handleGPTsearch = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-gray-800 z-10 flex justify-between">
      <img className="w-52" src={LOGO} alt="Netflix-logo" />

      {user && (
        <div className="flex">
          {gpt && (
            <select
              className=" px-2 h-12 mr-4 mt-2 rounded-lg bg-slate-500 text-white font-semibold"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}
          <button
            className="text-white font-semibold bg-blue-300 mr-4 mt-2 px-2 h-12 rounded-lg"
            onClick={handleGPTsearch}
          >
            {gpt ? "HomePage" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 mt-2 border "
            src={user.photoURL}
            alt="usopp-icon"
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
