"use client";
import Link from "next/link";
import styles from "../Navbar/Navbar.module.css";
import { UserAuth } from "@/context/AuthProvider";

const Navbar = () => {
  const { user, logout } = UserAuth();
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_con}>
        <div className={styles.navbar_logo}>
          <Link href={"/"}>QuickFacts</Link>
        </div>

        <div className={styles.nav_links}>
          {user ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <>
              <Link href="/register">Register</Link>
              <Link href="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
