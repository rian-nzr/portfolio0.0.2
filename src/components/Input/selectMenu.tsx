import { useTheme } from "next-themes";
import { CaretDown, Moon, Sun } from "phosphor-react";
import { useState } from "react";

export default function SelectMenu() {
  const [open, setOpen] = useState(true);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log("p", theme);

  return (
    <div className="flex flex-row justify-center min-h-10 min-w-screen  text-sm font-medium rounded-lg text-black ">
      <div className="flex-none">
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-row justify-between w-52 px-2 py-2 capitalize text-gray-700 bg-white border border-gray-300 rounded-lg"
        >
          <span className="select-none">
            {theme == "dark" ? (
              <span className="flex items-center gap-2">
                <Moon size={20} weight="fill" /> Dark Mode
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Sun size={20} weight="fill" /> Light Mode
              </span>
            )}
          </span>

          <CaretDown size={20} weight="bold" />
        </button>
        <div
          id="options"
          className={`w-52 py-1 mt-2 ${open ? "hidden" : "block"}`}
        >
          <button
            onClick={() => {
              theme == "dark" ? setTheme("light") : setTheme("dark");
              setOpen(!open);
            }}
            className="block text-left capitalize px-2 w-full py-2 text-gray-800 border border-gray-300 rounded-lg"
          >
            {theme == "light" ? (
              <span className="flex items-center gap-2">
                <Moon size={20} weight="fill" /> Dark Mode
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Sun size={20} weight="fill" /> Light Mode
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
