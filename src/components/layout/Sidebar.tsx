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
    { text: "Home", icon: <House size={32} /> },
    { text: "About", icon: <User size={32} /> },
    { text: "Services", icon: <Wrench size={32} /> },
    { text: "Contact", icon: <PhoneCall size={32} /> },
    { text: "Blog", icon: <File size={32} /> },
  ];
  return (
    <main>
      <div className="flex items-center px-3 pt-5 mb-7 pb-2">
        <div className="w-14 h-14">
          <Image src="/logo/3.svg" alt="logo" width={1000} height={1000} />
        </div>
        <h1 className={`text-4xl font-extrabold ${averia.className}`}>Ryan</h1>
      </div>
      <div className="px-5">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 py-2 text-lg font-semibold"
            >
              {item.icon}
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
