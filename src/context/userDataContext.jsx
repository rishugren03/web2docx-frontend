import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getUser } from "../utils/api";

// Create context
export const UserDataContext = createContext(null);

// Custom hook
export const useUserData = () => useContext(UserDataContext);

// Provider component
export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loadTimeout, setLoadTimeout] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loadingUser) {
        setLoadTimeout(true);
        setLoadingUser(false);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [loadingUser]);

  const fetchUserData = async (user) => {
    try {
      if (!user) {
        setUserData(null);
        return;
      }

      const token = await user.getIdToken();
      const res = await getUser(token);
      setUserData(res.data);
    } catch (err) {
      console.error("Error fetching user data:", err.message);
      setUserData(null);
    } finally {
      setLoadingUser(false);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    // Set up auth state listener
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      await fetchUserData(user);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <UserDataContext.Provider
      value={{ userData, loadingUser, refreshUserData: fetchUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
