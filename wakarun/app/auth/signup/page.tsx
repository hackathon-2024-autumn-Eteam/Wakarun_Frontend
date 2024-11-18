import LittleHeader from "@/app/components/layout/LittleHeader";
import SignupBackground from "@/public/images/signupbackground.png";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <>
      <Link href="/">
        <button className="hover:opacity-60 transition-opacity">
          <LittleHeader/>
        </button>
      </Link>
      
      <div className="relative w-full max-w-[850px] mx-auto p-6">     
        {/* フォーム */}
        <form className="space-y-14 relative">
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
              name="name"
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
              placeholder="RECONFIRM PASSWORD"
              className="relative w-full h-full px-4 bg-transparent border-none focus:ring-0 focus:outline-none placeholder:text-gray-400 placeholder:text-xl text-xl"
            />
          </div>
        </form>
      </div>
      <div className="flex justify-center mt-[5vh]">
        <button className="relative h-20 overflow-hidden rounded-full bg-teal-200 px-16 py-2.5 ring-teal-300 ring-4 text-black transition-all duration-300 hover:bg-teal-100 hover:ring-4 hover:ring-teal-300 hover:ring-offset-4">
          <span className="relative text-3xl font-black">SIGN UP</span>
        </button>
      </div>
    </>
  );
}
