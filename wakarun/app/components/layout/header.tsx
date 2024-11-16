import { FaSquarePlus } from 'react-icons/fa6';
import { GiBookCover } from 'react-icons/gi';
import { FaUserEdit } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <header className="flex">
        <div className="header-left">
          <div className="header-logo bg-green">
            <a>
              <Image
                src="/images/logo.png"
                alt="ロゴ"
                width={207}
                height={68.48}
              />
            </a>
          </div>
        </div>
        <div className="header-center flex bg-green">
          <a className="flex">
            <FaSquarePlus />
            問題作成
          </a>
          <a className="flex">
            <GiBookCover />
            マイ問題集
          </a>
          <a className="flex">
            <FaUserEdit />
            作成した問題
          </a>
        </div>
        <div className="header-right bg-green">
          <a>sign out</a>
        </div>
      </header>
    </>
  );
}
