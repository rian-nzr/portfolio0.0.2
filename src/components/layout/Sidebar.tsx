"use client";

import Image from "next/image";
import { Montserrat, Averia_Serif_Libre } from "next/font/google";
import { File, House, PhoneCall, User, Wrench } from "phosphor-react";

const averia = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function Sidebar() {
  const menuItems = [
    { text: "Home", icon: <House size={20} weight="fill" /> },
    { text: "About", icon: <User size={20} weight="fill" /> },
    { text: "Services", icon: <Wrench size={20} weight="fill" /> },
    { text: "Contact", icon: <PhoneCall size={20} weight="fill" /> },
    { text: "Blog", icon: <File size={20} weight="fill" /> },
  ];
  return (
    <main className="flex flex-col justify-between h-screen">
      <div className="">
        <div className="flex items-center px-3 pt-5 mb-7 pb-2">
          <div className="w-14 h-14">
            <Image src="/logo/3.svg" alt="logo" width={1000} height={1000} />
          </div>
          <h1 className={`text-4xl font-extrabold ${averia.className}`}>
            Ryan
          </h1>
        </div>
        <div className="relative mx-3 my-5">
          <span className="absolute inset-y-0 left-0 flex items-center py-4">
            <button type="submit" className="p-2 focus:outline-none focus:ring">
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-5 h-5 dark:text-gray-600"
              >
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            className="w-full py-2 pl-10 text-sm dark:border- rounded-md focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50"
          />
        </div>
        <div className="">
          <ul className="flex flex-col gap-4 px-2">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 py-2 ml-1 text-sm font-medium rounded-lg text-black px-2 hover:bg-gray-300 "
              >
                {item.icon}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center p-2 mt-12  space-x-4 justify-self-end">
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
