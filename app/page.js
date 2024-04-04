'use client'
import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import { onAuthStateChanged } from 'firebase/auth';

import { useRouter } from "next/navigation";

import { useEffect } from "react";

import { auth, db } from "./utils/firebaseconfig";


export default function Home() {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User Signed in");
      } else {
        router.push('/login');
      }
    });
  }, [router]);
  return (
    <main  className='flex flex-col gap-20 md:gap-10' >
      <Header />
      <Landing />
      <Newsletter />
      <Footer />
    </main>
  );
}
