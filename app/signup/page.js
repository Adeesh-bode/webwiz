'use client'
import React, { useState, useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";

import { auth, db, provider } from '../utils/firebaseconfig';

import { useSnackbar } from 'notistack';

// import useCustomSnackbar from '../utils/notistack';

const Signup = () => {
  // const showSnackbar = useCustomSnackbar(); 
  const { enqueueSnackbar } = useSnackbar(); // Directly use useSnackbar here

  const router = useRouter();

  const [credentials, setCredentials] = useState({ email: '', password: '', username: '' });
  const [passwordStrength, setPasswordStrength] = useState(false);
  const [hide, setHide] = useState(false);

  const handleHide = () => {
    setHide(!hide);
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    if (e.target.name === 'password') {
        setPasswordStrength(e.target.value.length >= 6);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, username } = credentials;
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      // await setDoc(doc(db, "users", user.uid), { uid: user.uid, username, email, password });
      console.log("Successfully Signed Up");
      // showSnackbar('Sign Up Successful',3000, 'success');
      enqueueSnackbar('Sign up Successful', { variant: 'success', autoHideDuration: 3000 });
      
    } catch (error) {
      console.error("Error signing up:", error.message);
      if(error.code === "auth/invalid-credential" || error.code === "auth/invalid-email"){
        // showSnackbar('Incorrect E-mail or Password',3000, 'failure');
        enqueueSnackbar('Incorrect E-mail or Password', { variant: 'error', autoHideDuration: 3000 });

      }
        else if(error.code === 'auth/network-request-failed'){
        // showSnackbar('Check Your Network Connection',3000, 'success');
        enqueueSnackbar('Check Your Network Connection', { variant: 'warning', autoHideDuration: 3000 });
      }
    }
  };

  const handleGoogleSignin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { uid, displayName, email } = result.user;
      await setDoc(doc(db, "users", uid), { uid, username: displayName, email, password: "" });
      console.log("Successfully Logged in using Google");
      console.log("User created and todos document initialized!");
    } catch (error) {
      console.error("Error with Google Sign In:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) router.push('/');
        else console.log("User is not signed in");
      });
      return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);

  return (
    <div className="font-serif min-h-screen w-screen flex gap-4 items-center justify-center bg-[#121215]">
      <div className='bg-[#18181C] rounded-xl p-2 md:p-4 w-5/6 md:w-1/2 shadow-md flex flex-col gap-3 md:gap-5 justify-evenly items-center md:flex-row'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2 md:gap-4'>
            <h1 className="py-2 text-4xl text-[#E7A4ED] font-semibold text-center">
              Sign up
            </h1>
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              onChange={handleChange}
              className="py-2 px-4 w-full rounded-lg bg-[#302D36] focus:outline-none caret-slate-100 font-medium text-[#F5F8FF]"
            />

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
              <button className="text-zinc-200 bg-[#84849D] hover:#E7A4ED px-4 py-2 rounded-lg" type="button" onClick={handleHide}>
                {hide? <FaEyeSlash/> : <FaEye />} 
              </button>
            </div>
            
            {!passwordStrength && <div className='text-[10px] text-zinc-200'>Password should be at least 6 characters</div>}
            
            <input
                  type="submit"
                  value='Sign Up' 
                  className="text-zinc-200 #E7A4ED hover:bg-transparent hover: border hover:border-white px-4 py-2 rounded-lg cursor-pointer"/>

<button type='button' onClick={handleGoogleSignin} className='text-white justify-center flex items-center gap-2 #E7A4ED hover:bg-transparent hover: border hover:border-white px-4 py-2 rounded-lg'>
              <FcGoogle size={30} />
              Sign up with Google
            </button>

            <div onClick={() => router.push('/login')} className='text-[#E7A4ED] flex justify-center gap-2 items-center cursor-pointer'>
              <FaExternalLinkAlt />
              Already have an account?
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

export default Signup;