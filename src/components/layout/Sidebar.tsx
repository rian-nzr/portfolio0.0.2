"use client";

import Image from "next/image";
import { Montserrat, Averia_Serif_Libre } from "next/font/google";
import { File, House, MagnifyingGlass, PhoneCall, User, Wrench } from "phosphor-react";
import SelectMenu from "../Input/selectMenu";
import { useTheme } from "next-themes";
import ToggleLanguage from "../Input/Language";

const averia = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function Sidebar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const menuItems = [
    { text: "Home", icon: <House size={20} weight="fill" /> },
    { text: "About", icon: <User size={20} weight="fill" /> },
    { text: "Services", icon: <Wrench size={20} weight="fill" /> },
    { text: "Contact", icon: <PhoneCall size={20} weight="fill" /> },
    { text: "Blog", icon: <File size={20} weight="fill" /> },
  ];
  return (
    <main className="flex flex-col justify-between h-screen dark:bg">
      <div className="">
        <div className="flex items-center px-3 pt-5 mb-7 pb-2">
          <div className="w-14 h-14">
            {theme == "dark" ? (
              <Image src="/logo/4.svg" alt="logo" width={1000} height={1000} />
            ) : (
              <Image src="/logo/3.svg" alt="logo" width={1000} height={1000} />
            )}
          </div>
          <h1 className={`text-4xl font-extrabold ${averia.className}`}>
            Ryan
          </h1>
        </div>
        <div className="relative mx-3 my-5">
          <span className="absolute inset-y-0 left-0 flex items-center py-4">
            <button type="submit" className="p-2 focus:outline-none focus:ring">
             <MagnifyingGlass/>
            </button>
          </span>
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            className="w-full py-2 pl-10 text-sm dark:border- border-b rounded-md focus:outline-none dark:bg-gray-800 bg-white  dark:text-gray-800 focus:dark:bg-gray-50"
          />
        </div>
        <div className="">
          <ul className="flex flex-col gap-4 px-2 font-medium rounded-lg text-black">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 py-2 ml-1 text-sm font-medium rounded-lg text-black dark:text-gray-200 px-2 hover:bg-gray-300 dark:hover:text-gray-700 hover:text-gray-800"
              >
                {item.icon}
                {item.text}
              </li>
            ))}
            <li className="border-t py-2">
              <span className="text-sm ml-1 px-2 dark:text-gray-200 ">
                Theme
              </span>
              <SelectMenu />
            </li>
            <li className="border-t py-2">
              <ToggleLanguage />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center p-2 mt-12 mb-5  space-x-4 justify-self-end">
        <img
          src="https://i.pinimg.com/564x/24/6e/11/246e113d041f6e3c2d521a421c879fae.jpg"
          alt=""
          className="w-12 h-12 rounded-lg dark:bg-gray-500"
        />
        <div>
          <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
          <span className="flex items-center space-x-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-xs hover:underline dark:text-gray-600"
            >
              View profile
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}
