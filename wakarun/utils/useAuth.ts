"use client";
import { jwtVerify } from "jose";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [loginUser, setLoginUser] = useState({
    id: "",
    exp: 0,
    validated: false,
  });

  const router = useRouter();
  const pathName = usePathname();
  const publicRoute = ["", "auth/signin", "auth/signup"];

  const checkToken = async () => {
    //1:トークを取得する
    const token = localStorage.getItem("access_token");

    //2:トークンがあるかどうか
    if (!token) {
      setLoginUser({ id: "", exp: 0, validated: true });
      console.log("token unexist");
    }

    //3:トークンがある場合は有効性をチェック
    try {
      const secretKey = new TextEncoder().encode(
        "django-insecure-sn*06)^_&(4i5jk3b8hy2@^mzvr9a%fij9%zp-9p97%4ordq^0"
      );
      const decodedJWT = await jwtVerify<{ user_id: string; exp: number }>(
        token!,
        secretKey
      );

      //ログインユーザーをセット
      setLoginUser({
        id: decodedJWT.payload.user_id,
        exp: decodedJWT.payload.exp!,
        validated: true,
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      //トークンが不正な場合はログイン画面に遷移
      setLoginUser({ id: "", exp: 0, validated: true });
      console.log("token is fraud");
    }
  };

  useEffect(() => {
    if (!publicRoute.includes(pathName)) {
      checkToken();
    } else {
      setLoginUser({ ...loginUser, validated: true });
    }
  }, [router]);

  return loginUser;
};

export default useAuth;
