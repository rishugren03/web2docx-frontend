import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../../../config/firebase";
import { saveFbUser } from "../../utils/api";

const SocialLogins = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;

      // console.log("Google Login Success:", firebaseUser);

      const addUser = getAdditionalUserInfo(result);
      console.log(addUser);

      const { isNewUser } = getAdditionalUserInfo(result);
      if (isNewUser) {
        await saveFbUser(firebaseUser.accessToken, firebaseUser.reloadUserInfo);
      }

      // Continue to dashboard or wherever
    } catch (err) {
      console.error("Google Login Error:", err);
    }
  };

  const handleGithubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const firebaseUser = result.user;

      // console.log("GitHub Login Success:", firebaseUser);

      const { isNewUser } = getAdditionalUserInfo(result);
      if (isNewUser) {
        await saveFbUser(firebaseUser.accessToken, firebaseUser.reloadUserInfo);
      }
    } catch (err) {
      console.error("GitHub Login Error:", err);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center space-x-2 w-full border border-gray-300 text-gray-900 py-3 rounded-lg hover:bg-gray-100 cursor-pointer">
        <FaGoogle className="h-5 w-5 text-indigo-600" />
        <span>Google</span>
      </button>

      <button
        onClick={handleGithubLogin}
        className="flex items-center justify-center space-x-2 w-full border border-gray-300 text-gray-900 py-3 rounded-lg hover:bg-gray-100 cursor-pointer">
        <FaGithub className="h-5 w-5 text-gray-800" />
        <span>GitHub</span>
      </button>
    </div>
  );
};

export default SocialLogins;
