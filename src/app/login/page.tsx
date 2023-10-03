"use client";
// react
import React, { useState } from "react";

// styles
import styles from "../register/page.module.css";

// typescript type
import { IUserFrom } from "@/types/types";

//firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebaseConfig";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/navigation";

// initilaize
const init = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginFrom, setLoginFrom] = useState<IUserFrom>(init);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFrom((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(
        auth,
        loginFrom.email,
        loginFrom.password
      ).then((res) => {
        alert("Login Successful!");
        setLoading(false);
        router.push("/");
      });
    } catch (error: any) {
      setLoading(false);
      console.log("Error while Login", error.message);
      throw new Error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.register}>
        <div className={styles.registerContainer}>
          <h1>Login</h1>
          <form className={styles.signupForm} onSubmit={handleSubmit}>
            <label>
              Email
              <input
                type="email"
                required
                name="email"
                value={loginFrom.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                required
                name="password"
                value={loginFrom.password}
                onChange={handleChange}
              />
            </label>

            <input
              type="submit"
              value={!loading ? "Login" : "loading..."}
              disabled={loading}
            />
          </form>
          <p className={styles.usertext}>
            New to QuickFacts? <Link href="register">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

//pub_304597bc54fc7ad722d25407d5258dddf8429
