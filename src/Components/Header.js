import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "./Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { LOGO } from "./Utils/constants";
import { addUser, removeUser } from "./Redux/Userslice";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
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

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-gray-800 z-10 flex justify-between">
      <img className="w-52" src={LOGO} alt="Netflix-logo" />
      {console.log(user)}
      {user && (
        <div className="flex">
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
