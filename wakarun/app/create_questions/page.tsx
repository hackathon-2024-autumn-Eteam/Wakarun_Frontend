import Link from "next/link";
import { FaPenAlt } from "react-icons/fa";
import { BsHandIndexThumb } from "react-icons/bs";
export default function createQuestions() {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="my-8 text-center font-bold text-lg">
          問題形式を選択してください
        </div>
        <Link href="/dashboard">
          <div className="my-8 h-36 text-3xl w-[50vw] rounded-3xl flex items-center justify-center bg-cover bg-[url('../../public/images/bg_button_green.png')]">
            <FaPenAlt/>
            <span className="ml-5">記述式</span> 
          </div>
        </Link>
        <Link href="/dashboard">
          <div className="my-8 h-36 text-3xl w-[50vw] rounded-3xl flex items-center justify-center bg-cover bg-[url('../../public/images/bg_button_yellow.png')]">
            <BsHandIndexThumb/>
            <span className="ml-5">選択式</span> 
          </div>
        </Link>
      </div>
    </>
  );
}
