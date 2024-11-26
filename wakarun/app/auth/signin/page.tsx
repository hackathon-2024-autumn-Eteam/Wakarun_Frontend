'use client'

import LittleHeader from "@/app/components/layout/LittleHeader";
import SigninBackground from "@/public/images/signinbackground.png";
import Image from "next/image";
import Link from "next/link";
import { signin } from "@/app/api/auth/signin";
import React,{ useState } from "react";
import { useRouter } from "next/navigation";

export default function SigninPage() {

  const router = useRouter();

  const [ formData, setFormData] = useState({
    email:"",
    password:"",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signin({
        email:formData.email,
        password:formData.password
      }
      )

      router.push("../timeline");
    } catch(error) {
      console.error("サインインエラー",error)
      alert("サインインエラー");
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return{
        ...prev,
        [e.target.name]:e.target.value
      }
    })

  }

  return (
    <>
      <Link href="/">
        <button className="hover:opacity-60 transition-opacity">
          <LittleHeader/>
        </button>
      </Link>

      <div className="flex flex-col justify-center min-h-[70vh]">
        <div className="relative w-full max-w-[850px] mx-auto p-6">     
          {/* フォーム */}
          <form onSubmit={handleSubmit} className="space-y-14 relative">
            {/* EMAIL入力フィールド */}
            <div className="relative h-[85px] overflow-hidden rounded-[30px]">
              <div className="absolute inset-0">
                <Image
                  src={SigninBackground}
                  alt=""
                  fill
                  className="object-cover object-[center_33%]"
                  priority
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E-MAIL"
                className="relative w-full h-full px-4 bg-transparent border-none focus:ring-0 focus:outline-none placeholder:text-gray-400 placeholder:text-xl text-xl"
              />
            </div>

            {/* PASSWORD入力フィールド */}
            <div className="relative h-[85px] overflow-hidden rounded-[30px]">
              <div className="absolute inset-0">
                <Image
                  src={SigninBackground}
                  alt=""
                  fill
                  className="object-cover object-[center_100%]"
                  priority
                />
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="PASSWORD"
                className="relative w-full h-full px-4 bg-transparent border-none focus:ring-0 focus:outline-none placeholder:text-gray-400 placeholder:text-xl text-xl"
              />
            </div>        
            <div className="flex justify-center mt-[7vh]">
              <button type="submit" className="relative h-20 overflow-hidden rounded-full bg-yellow-200 px-16 py-2.5 ring-yellow-300 ring-4 text-black transition-all duration-300 hover:bg-yellow-100 hover:ring-4 hover:ring-yellow-300 hover:ring-offset-4">
                <span className="relative text-3xl font-black">SIGN IN</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
