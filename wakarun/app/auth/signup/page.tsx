'use client'

import LittleHeader from "@/app/components/layout/LittleHeader";
import SignupBackground from "@/public/images/signupbackground.png";
import Image from "next/image";
import Link from "next/link";
import { signup } from "@/app/api/auth/signup";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {

  const router = useRouter();

  const [ formData, setFormData] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("パスワードが一致しません")
      return;
    }

    try {
      await signup({
        username:formData.username,
        email:formData.email,
        password:formData.password
      }
      )

      router.push("../auth/signin");
    } catch(error) {
      console.error("サインアップエラー",error);
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
      
      <div className="relative w-full max-w-[850px] mx-auto p-6">     
        {/* フォーム */}
        <form onSubmit={handleSubmit} className="space-y-14 relative">
          {/* NAME入力フィールド */}
          <div className="relative h-[85px] overflow-hidden rounded-[30px]">
            <div className="absolute inset-0">
              <Image
                src={SignupBackground}
                alt=""
                fill
                className="object-cover object-[center_0%]"
                priority
              />
            </div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              placeholder="NAME"
              className="relative w-full h-full px-4 bg-transparent border-none focus:ring-0 focus:outline-none placeholder:text-gray-400 placeholder:text-xl text-xl"/>
          </div>

          {/* EMAIL入力フィールド */}
          <div className="relative h-[85px] overflow-hidden rounded-[30px]">
            <div className="absolute inset-0">
              <Image
                src={SignupBackground}
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
              required
              placeholder="E-MAIL"
              className="relative w-full h-full px-4 bg-transparent border-none focus:ring-0 focus:outline-none placeholder:text-gray-400 placeholder:text-xl text-xl"
            />
          </div>

          {/* PASSWORD入力フィールド */}
          <div className="relative h-[85px] overflow-hidden rounded-[30px]">
            <div className="absolute inset-0">
              <Image
                src={SignupBackground}
                alt=""
                fill
                className="object-cover object-[center_66%]"
                priority
              />
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="PASSWORD"
              className="relative w-full h-full px-4 bg-transparent border-none focus:ring-0 focus:outline-none placeholder:text-gray-400 placeholder:text-xl text-xl"
            />
          </div>

          {/* RECONFIRM PASSWORD入力フィールド */}
          <div className="relative h-[85px] overflow-hidden rounded-[30px]">
            <div className="absolute inset-0">
              <Image
                src={SignupBackground}
                alt=""
                fill
                className="object-cover object-[center_100%]"
                priority
              />
            </div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              placeholder="RECONFIRM PASSWORD"
              className="relative w-full h-full px-4 bg-transparent border-none focus:ring-0 focus:outline-none placeholder:text-gray-400 placeholder:text-xl text-xl"
            />
          </div>      
          <div className="flex justify-center mt-[5vh]">
            <button type="submit" className="h-20 overflow-hidden rounded-full bg-teal-200 px-16 py-2.5 ring-teal-300 ring-4 text-black transition-all duration-300 hover:bg-teal-100 hover:ring-4 hover:ring-teal-300 hover:ring-offset-4">
              <span className="text-3xl font-black">SIGN UP</span>
            </button>
          </div>
        </form>
      </div>

    </>
  );
}
