import React, { useRef } from "react";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { Validate } from "./Utils/Validate";
import { auth } from "./Utils/firebase";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./Redux/Userslice";
const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  // const [name, setName] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const handleButtonSubmit = () => {
    const message = Validate(
      name?.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //signup form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://www.comicsense.store/wp-content/uploads/2021/03/usopp_one_piece_bounty_wanted_poster_comicsense.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);

          // ...
        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  const togglesignUp = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_small.jpg"
          alt="Netflix-bg-image"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-8 bg-black my-36 mx-auto right-0 left-0 rounded-sm opacity-80"
      >
        <h1 className="py-4 mx-3 text-4xl text-white font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <div>
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="m-2 py-4 px-2 w-full border border-white text-white bg-black rounded-sm"
            />
          </div>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="m-2 py-4 px-2 w-full border border-white text-white bg-black rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="m-2 py-4 px-2 w-full border border-white text-white bg-black rounded-sm"
        />
        <p className="text-red-700 m-2 font-semibold">{errorMessage}</p>
        <button
          className="m-2 py-3 w-full text-white bg-red-700 rounded-sm font-semibold"
          onClick={handleButtonSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white m-2 py-2 w-full cursor-pointer"
          onClick={togglesignUp}
        >
          {isSignInForm
            ? "New to Netflix?Sign up now"
            : "Already Registered?Sign in now!"}
        </p>
        )
      </form>
    </div>
  );
};

export default Login;
