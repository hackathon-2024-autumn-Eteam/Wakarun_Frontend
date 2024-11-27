"use client"
import { jwtVerify } from "jose";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [loginUser, setLoginUser] = useState({
    id:"",
    exp: 0,
  });

  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {

      //1:トークを取得する
      const token = localStorage.getItem("token");

      //2:トークンがあるかどうか
      if (!token) {
        console.log("token unexist")
        router.push("/auth/signin");
      }

      //3:トークンがある場合は有効性をチェック
      try {
        const secretKey = new TextEncoder().encode("django-insecure-sn*06)^_&(4i5jk3b8hy2@^mzvr9a%fij9%zp-9p97%4ordq^0");
        const decodedJWT = await jwtVerify<{user_id:string, exp:number}>(token!, secretKey);

        //ログインユーザーをセット
        setLoginUser({id:decodedJWT.payload.user_id,exp:decodedJWT.payload.exp!});
        
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        //トークンが不正な場合はログイン画面に遷移
        console.log("token is fraud")
        router.push("/auth/signin");

      }
    };

    checkToken();
  }, [router]);

  return loginUser;
};

export default useAuth;

