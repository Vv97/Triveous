"use client";
// react
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

//firebase
import { signOut, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/utils/firebaseConfig";

// typescript types
import { AuthContext } from "@/types/types";

// initilaize
const init = {
  user: null,
  error: null,
  setUser: () => {},
  setError: () => {},
  logout: () => {},
};

const authContext = createContext<AuthContext>(init);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>();
  const [error, setError] = useState<any>();

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    // Listen for changes in the user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe; // Cleanup the listener when the component unmounts
  }, []);

  return (
    <authContext.Provider value={{ user, error, setUser, setError, logout }}>
      {children}
    </authContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(authContext);
};
