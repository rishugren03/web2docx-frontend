/**
 * Extracts the specific error message from Firebase auth errors
 * @param {string} errorMessage - Full error message from Firebase
 * @returns {string} - Clean, user-friendly error message
 */
export const getFirebaseAuthErrorMessage = (errorMessage) => {
  // Match the content between parentheses after "auth/"
  const matches = errorMessage.match(/auth\/([^)]+)/);

  if (!matches || matches.length < 2) {
    return "An unknown error occurred. Please try again.";
  }

  const errorCode = matches[1];

  // Map Firebase error codes to user-friendly messages
  const errorMessages = {
    "invalid-credential": "Invalid email or password",
    "email-already-in-use": "This email is already in use",
    "user-not-found": "No account found with this email",
    "wrong-password": "Incorrect password",
    "weak-password": "Password should be at least 6 characters",
    "too-many-requests": "Too many attempts. Please try again later",
    "network-request-failed": "Network error. Please check your connection",
    // Add more error codes as needed
  };

  return errorMessages[errorCode] || `Error: ${errorCode.replace(/-/g, " ")}`;
};
