'use client'
import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/utils/firebase"; 

const Login = () => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <button
  onClick={handleGoogleSignIn}
  className="flex items-center justify-center space-x-3 w-full py-2 px-4 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
>
  <img
    src="https://th.bing.com/th/id/R.2991eba27a990a1c9eb56d9633343020?rik=gzbdRDysD7sQSA&pid=ImgRaw&r=0"
    alt="Google"
    className="w-5 h-5"
  />
  <span>Sign in with Google</span>
</button>

      </div>
    </div>
  );
};

export default Login;
