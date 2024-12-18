"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import { FaSquarePlus } from "react-icons/fa6";
import { GiBookCover } from "react-icons/gi";
import { FaUserEdit } from "react-icons/fa";
import { signout } from "@/app/api/signout";
import React from "react";

const menuItems = [
  {
    href: "/create_questions",
    icon: <FaSquarePlus size={55} />,
    label: "問題作成",
  },
  {
    href: "/created-questions",
    icon: <GiBookCover size={55} />,
    label: "マイ問題集",
  },
  {
    href: "/my-collections",
    icon: <FaUserEdit size={55} />,
    label: "作成した問題",
  },
];

const handleSignout = (e: React.MouseEvent) => {
  try {
    signout();
  } catch (error) {
    e.preventDefault();
    console.error("サインアウトエラー", error);
  }
};

export default function Header() {
  return (
    <header className="pb-28">
      <ul className="flex">
        <li className={`flex-1 pt-5 ${styles['header-left']}`}>
          <Link href="/timeline" className="flex justify-start pl-14">
            <Image
              src="/images/logo.png"
              alt="ロゴ"
              width={227.7}
              height={75.33}
            />
          </Link>
        </li>

        {menuItems.map((item, index) => (
          <li key={index} className={`flex-1 pt-8 ${styles["header-center"]}`}>
            <Link href={item.href} className="flex justify-center">
              {item.icon}
              <span className="text-4xl pl-4 self-center">{item.label}</span>
            </Link>
          </li>
        ))}

        <li className={`flex-1 pt-10 ${styles["header-right"]}`}>
          <Link
            href="/"
            onClick={handleSignout}
            className="flex justify-center"
          >
            <span className="text-4xl">SIGN OUT</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
