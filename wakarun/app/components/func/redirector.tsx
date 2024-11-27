"use client";
import useAuth from "@/utils/useAuth";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Redirector({
  children,
}: {
  children: React.ReactNode;
}) {
  const publicRoute = ["/", "/auth/signin", "/auth/signup"];
  const loginUser = useAuth();
  const pathName = usePathname();
  const router = useRouter();
  const [allowRender, setAllowRender] = useState(false);

  useEffect(() => {
    if (loginUser.validated) {
      if (!publicRoute.includes(pathName) && loginUser.exp == 0) {
        router.push("/auth/signin");
      }

      if (publicRoute.includes(pathName) && loginUser.exp != 0) {
        router.push("/timeline");
      }

      setAllowRender(true);
    }
  }, [loginUser.validated, router]);

  return <>{allowRender && <>{children}</>}</>;
}
