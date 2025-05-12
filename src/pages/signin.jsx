import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import Loading from "../components/loading";
import EmailPass from "../components/signin-components/Email-Pass";
import SocialLogins from "../components/signin-components/SocialLogins";

export default function SignInPage() {
  const user = useContext(AuthContext);
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (user) {
        navigate("/user/dashboard");
        location.reload();
      } else {
        setIsChecking(false);
      }
    }, 700);

    return () => clearTimeout(timeout);
  }, [user, navigate]);

  if (user && isChecking) {
    return <Loading message="Checking your session..." size="w-16 h-16" />;
  }

  return (
    <div className="min-h-screen pt-[8vh] flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white">
      <div className="w-full max-w-sm p-8 bg-white shadow-md rounded-xl">
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
  );
}
