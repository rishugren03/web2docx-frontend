import React from "react";
import EmailPass from "../components/signin-components/Email-Pass";
import SocialLogins from "../components/signin-components/SocialLogins";
import Navbar from "../shared/Navbar";

export default function SignInPage() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-[8vh] flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white">
        <div className="w-full max-w-sm p-8 bg-white shadow-md rounded-xl">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Sign In
          </h2>

          {/* Email & Password Form */}
          <EmailPass />

          {/* Social Logins */}
          <div className="my-6 text-center text-gray-600">
            <p className="text-sm">Or sign in with</p>
          </div>

          <SocialLogins />
        </div>
      </div>
    </div>
  );
}
