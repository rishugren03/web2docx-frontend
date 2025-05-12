// ProtectedRoute.js
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
import Loading from "./loading";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setChecking(false);
    });
    return () => unsubscribe();
  }, []);

  if (checking)
    return (
      <div>
        {" "}
        <Loading
          message="Verifying your login status..."
          size="w-16 h-16"
        />;{" "}
      </div>
    );

  return user ? children : <Navigate to="/signin" />;
}
