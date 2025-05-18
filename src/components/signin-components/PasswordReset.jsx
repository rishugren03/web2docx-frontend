import React, { useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { getFirebaseAuthErrorMessage } from "../../utils/firebaseErrorMessage";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const PasswordReset = () => {
  useDocumentTitle("Password Reset - Web2Docx");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();

  const handlePasswordReset = async (email) => {
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent ✅");
      setIsSubmitted(true);
    } catch (error) {
      const errorMessage = getFirebaseAuthErrorMessage(error); // Ensure this function returns a meaningful error message
      setError(errorMessage);
      console.error("Error sending reset email:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      await handlePasswordReset(email);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
            <Mail className="h-6 w-6 text-indigo-600" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 max-w-xs">
            {isSubmitted
              ? "We sent a password reset link to your email"
              : "Enter your email to receive a reset link"}
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow sm:rounded-lg sm:px-10">
          {isSubmitted ? (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Check your email at <span className="font-medium">{email}</span>{" "}
                for instructions to reset your password.
              </p>
              <Link
                to="/signin"
                className="mt-5 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to sign in
              </Link>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 text-center">{error}</p>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send reset link"}
                </button>
              </div>
            </form>
          )}
        </div>

        {!isSubmitted && (
          <div className="text-center">
            <Link
              to="/signin"
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Return to sign in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordReset;
