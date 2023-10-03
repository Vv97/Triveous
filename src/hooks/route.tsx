"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { UserAuth } from "@/context/AuthProvider";

interface WithProtectedProps {
  children: ReactNode;
}

export function withProtected<P>(Component: React.ComponentType<P>) {
  return function WithProtected({ children, ...props }: WithProtectedProps) {
    const auth = UserAuth();
    const router = useRouter();

    if (!auth.user) {
      router.replace("/login");
      return <h1>Loading...</h1>;
    }

    return (
      <Component auth={auth} {...(props as P)}>
        {children}
      </Component>
    );
  };
}
