"use client";
// react
import React, { useState } from "react";

// styles
import styles from "./page.module.css";

// typescript type
import { IUserFrom } from "@/types/types";

// firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/navigation";

// initilaize
const init = {
  email: "",
  password: "",
};

const Register = () => {
  const [registerFrom, setRegisterFrom] = useState<IUserFrom>(init);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterFrom((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerFrom.email,
        registerFrom.password
      ).then((_) => {
        alert("Registration Successful!");
        setLoading(false);
        router.push("/login");
      });
    } catch (error: any) {
      setLoading(false);
      console.log("Error while Register", error.message);
      throw new Error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.register}>
        <div className={styles.registerContainer}>
          <h1>Register</h1>
          <form className={styles.signupForm} onSubmit={handleSubmit}>
            <label>
              Email
              <input
                type="email"
                required
                name="email"
                value={registerFrom.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                required
                name="password"
                value={registerFrom.password}
                onChange={handleChange}
              />
            </label>

            <input
              type="submit"
              value={!loading ? "Register" : "loading..."}
              disabled={loading}
            />
          </form>
          <p className={styles.usertext}>
            Already have an account? <Link href="login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
