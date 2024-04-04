'use client'
import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, provider, db } from "../utils/firebaseconfig"; // Assuming auth, provider, db are exported from firebaseconfig
import { doc, setDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
import { FaExternalLinkAlt } from "react-icons/fa";
// import Connect from "../assets/connect.gif";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import { useRouter } from 'next/navigation';

// import useCustomSnackbar from '../utils/notistack';
import { useSnackbar } from 'notistack';

const Login = () => {
  // const showSnackbar = useCustomSnackbar(); 
  const { enqueueSnackbar } = useSnackbar(); // Directly use useSnackbar here


  const router = useRouter();
  // const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [hide, setHide] = useState(false);

  const handleHide = () => {
    setHide(!hide);
  };

  const handleChange = (e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      console.log("Successfully Logged In");
      // showSnackbar('Log in Successful',3000, 'success');
      enqueueSnackbar('Log in Successful', { variant: 'success', autoHideDuration: 3000 });

    } catch (error) {
      console.error(error.message);

      if(error.code === "auth/invalid-credential" || error.code === "auth/invalid-email"){
        // showSnackbar('Incorrect E-mail or Password',3000, 'failure');
        enqueueSnackbar('Incorrect E-mail or Password', { variant: 'error', autoHideDuration: 3000 });

      }
        else if(error.code === 'auth/network-request-failed'){
        // showSnackbar('Check Your Network Connection',3000, 'success');
        enqueueSnackbar('Check Your Network Connection', { variant: 'warning', autoHideDuration: 3000 });
      }
      else {
        enqueueSnackbar('An unexpected error occurred', { variant: 'error', autoHideDuration: 3000 });
      }
    }
  };

  const handleGoogleSignin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Successfully Logged in using Google", result);
      const { uid, displayName, email } = result.user;
      await setDoc(doc(db, "todos", uid), { data: [] });
      await setDoc(doc(db, "users", uid), {
        uid,
        username: displayName,
        email,
        password: "",
      });
      console.log("Document successfully written!");
    } catch (error) {
      console.error("Error with Google sign-in: ", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
        console.log("User is signed in:", user);
      } else {
        console.log("User is not signed in");
      }
    });
    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);

  return (
   <div className="font-serif min-h-screen flex gap-4 items-center justify-center bg-[#121215]">
      <div className="m-2 bg-[#18181C] rounded-xl p-4 w-full max-w-2xl lg:w-l shadow-md flex gap-6 justify-evenly items-center">
         <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
               <h1 className="py-2 text-4xl text-[#E7A4ED] font-semibold text-center">
               Login
               </h1>
               <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                  className="py-2 px-4 w-full rounded-lg bg-[#302D36] focus:outline-none caret-slate-100 font-medium text-[#F5F8FF]"
               />

               <div className="flex gap-4">
                  <input
                     type={hide ? "text" : "password"}
                     placeholder="Enter password"
                     name="password"
                     onChange={handleChange}
                     className="py-2 px-4 w-full rounded-lg bg-[#302D36] focus:outline-none caret-slate-100 font-medium text-[#F5F8FF]"
                  />
                  {/* <button className="text-zinc-200 bg-[#84849D] hover:bg-[#835FF5] px-4 py-2 rounded-lg" type="button" onClick={handleHide}>
                     {hide ? "Hide" : "Show"}
                  </button> */}
                  <button className="text-zinc-200 bg-[#84849D] hover:#E7A4ED px-4 py-2 rounded-lg" type="button" onClick={handleHide}>
                     {hide ? <FaEye /> : <FaEyeSlash /> }

                  </button>
               </div>

               <input
                  type="submit"
                  value='Login' 
                  className="text-zinc-200 #E7A4ED hover:bg-transparent hover: border hover:border-white px-4 py-2 rounded-lg cursor-pointer"/>
               
               <button type='button' onClick={handleGoogleSignin} className='text-white justify-center flex items-center gap-2 #E7A4ED hover:bg-transparent hover: border hover:border-white  px-4 py-2 rounded-lg'>
                  <FcGoogle size={30} />
                  Sign in with Google
               </button>

               <div onClick={() => router.push('/signup')} className='text-[#E7A4ED] flex justify-center gap-2 items-center cursor-pointer'>
                  <FaExternalLinkAlt />
                  Don't have an account?
               </div>
            </div>
         </form>
         <div className='w-fit h-fit flex flex-col justify-between items-center'>
            <div className="text-[#E7A4ED]">Let's Connect</div>
            <img src={'/connect.gif'} alt='interactive-img' />
         </div>
      </div>
   </div>
   );
};

export default Login;