import { getAuth } from "firebase/auth";

/**
 * Utility function to check if a user is currently signed in.
 * @returns {User|null} - Returns the user object if signed in, otherwise null.
 */
export const checkIfUserIsSignedIn = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  return user;
};
