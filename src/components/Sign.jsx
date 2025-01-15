'use client';

import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/utils/firebase";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google User Info:", user);
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { firstName, lastName, password });

  };

  return (
    <div>

      <nav className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyApp</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

 
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
          <form onSubmit={handleFormSubmit} className="space-y-4">
        
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full mt-1 px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
     
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full mt-1 px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
   
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full mt-1 px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded shadow hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>
          <div className="text-center my-4 text-sm text-gray-500">OR</div>
    
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center space-x-3 w-full py-2 px-4 bg-red-600 text-white rounded shadow hover:bg-red-700 transition"
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
    </div>
  );
};

export default Login;
