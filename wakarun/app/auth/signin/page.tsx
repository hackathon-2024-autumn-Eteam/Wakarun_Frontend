import LittleHeader from "@/app/components/layout/LittleHeader";
import SigninBackground from "@/public/images/signinbackground.png";
import Image from "next/image";
import Link from "next/link";

export default function SigninPage() {
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
          <form className="space-y-14 relative">
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
                placeholder="PASSWORD"
                className="relative w-full h-full px-4 bg-transparent border-none focus:ring-0 focus:outline-none placeholder:text-gray-400 placeholder:text-xl text-xl"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-center mt-[7vh]">
          <button className="relative h-20 overflow-hidden rounded-full bg-yellow-200 px-16 py-2.5 ring-yellow-300 ring-4 text-black transition-all duration-300 hover:bg-yellow-100 hover:ring-4 hover:ring-yellow-300 hover:ring-offset-4">
            <span className="relative text-3xl font-black">SIGN IN</span>
          </button>
        </div>
      </div>
    </>
  );
}
