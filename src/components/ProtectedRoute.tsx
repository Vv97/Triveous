"use client";

//react
import { ReactNode, useEffect } from "react";
import { UserAuth } from "@/context/AuthProvider";

// nextjs
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { user } = UserAuth();
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;

    if (!user) {
      timeoutId = setTimeout(() => {
        router.push(`/login`);
      }, 2000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [user, router]);

  return user ? <>{children}</> : null;
};

export default ProtectedRoute;
