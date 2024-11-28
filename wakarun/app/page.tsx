import "@/app/styles/global.css";
import logo from "@/public/images/logo2.png";
import Image from "next/image";
import Link from "next/link";

export default function TitlePage() {
  return (
    <>
      <div className="absolute top-[15%] right-0 left-0 flex items-center justify-center gap-8">
        <Image src={logo} alt="logo" />
      </div>
      <div className="min-h-screen w-full">
        <div className="flex flex-con absolute top-[70%] right-0 left-0 gap-[20%] justify-center">
          <Link href="/auth/signup">
            <button className="relative h-20 overflow-hidden rounded-full bg-teal-200 px-16 py-2.5 ring-teal-300 ring-4 text-black transition-all duration-300 hover:bg-teal-100 hover:ring-4 hover:ring-teal-300 hover:ring-offset-4">
              <span className="relative text-3xl font-black">SIGN UP</span>
            </button>
          </Link>
          <Link href="/auth/signin">
            <button className="relative h-20 overflow-hidden rounded-full bg-yellow-200 px-16 py-2.5 ring-yellow-300 ring-4 text-black transition-all duration-300 hover:bg-yellow-100 hover:ring-4 hover:ring-yellow-300 hover:ring-offset-4">
              <span className="relative text-3xl font-black">SIGN IN</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
