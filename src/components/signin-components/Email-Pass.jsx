import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../../config/firebase";
import { saveFbUser } from "../../utils/api";
import { getFirebaseAuthErrorMessage } from "../../utils/firebaseErrorMessage";
import { toast, ToastContainer } from "react-toastify";
import { redirect, useNavigate } from "react-router-dom";

const EmailPass = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const sendVerificationEmail = async (user) => {
    try {
      await sendEmailVerification(user);
      toast.success("Email verification link sent");
    } catch (error) {
      console.error("Error sending email verification:", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = isSignup
        ? await createUserWithEmailAndPassword(auth, email, password)
        : await signInWithEmailAndPassword(auth, email, password);

      const firebaseUser = userCredential.user;
      // Only save user in DB if it's a signup
      if (isSignup) {
        await sendVerificationEmail(userCredential.user);
        navigate("/user/dashboard");
        await saveFbUser(firebaseUser.accessToken, firebaseUser.reloadUserInfo);
        toast.success("Sign up successful.");
      }
      navigate("/user/dashboard");
      toast.success("Sign in successful.");

      // You can redirect or do something after login/signup here
    } catch (err) {
      console.error(err);
      const errorMessage = getFirebaseAuthErrorMessage(err.message);
      setError(errorMessage);
      // toast.error(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700">
            Password
          </label>
          {!isSignup && (
            <button
              type="button"
              onClick={() => {
                navigate("/user/reset-password");
              }}
              className="text-xs text-indigo-600 hover:underline focus:outline-none cursor-pointer">
              Forgot password?
            </button>
          )}
        </div>
        <div className="relative mt-2">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none">
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-600 text-center mb-4">{error}</p>
      )}

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 text-lg rounded-lg hover:bg-indigo-700 cursor-pointer">
        {isSignup ? "Sign Up" : "Sign In"}
      </button>

      <p className="mt-4 text-sm text-center text-gray-600">
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <span
          onClick={() => setIsSignup((prev) => !prev)}
          className="text-indigo-600 cursor-pointer hover:underline">
          {isSignup ? "Sign in" : "Sign up"}
        </span>
      </p>
      <ToastContainer />
    </form>
  );
};

export default EmailPass;
