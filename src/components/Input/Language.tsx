"use client";

import { usePathname, useRouter } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { CaretDown } from "phosphor-react";
import { useState, ChangeEvent, useTransition } from "react";

const ToggleLanguage: React.FC = () => {
  const localeActive = useLocale();
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [language, setLanguage] = useState<string>();

  const pathname = usePathname();
  const params = useParams();

  const handleChange = (text: string) => {
    console.log(text);

    // setLanguage(newLocale);
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: text }
      );
    });
  };

  const [isChecked, setIsChecked] = useState<boolean>(false);

   return (
    <div className="flex flex-row justify-center min-h-10 min-w-screen  text-sm font-medium rounded-lg text-black ">
      <div className="flex-none">
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-row justify-between w-52 px-2 py-2 capitalize text-gray-700 dark:bg-gray-800 bg-white border-b border-gray-300 dark:text-gray-200 dark:border-gray-600"
        >
          <span className="select-none">
            {localeActive == "id" ? (
              <span className="flex items-center gap-2">Indonesia</span>
            ) : (
              <span className="flex items-center gap-2">English</span>
            )}
          </span>

          <CaretDown size={20} weight="bold" />
        </button>
        <div
          id="options"
          className={`w-52 py- absolute  ${open ? "hidden" : "block"}`}
        >
          <button
            onClick={() => {
              // theme == "dark" ? setTheme("light") : setTheme("dark");
              setOpen(!open);
            }}
            className="block text-left capitalize px-2 w-full py-2 text-gray-800 border border-t-0 border-gray-300 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800 bg-white"
          >
            {localeActive == "en" ? (
              <span
                onClick={() => handleChange("ID")}
                className="flex items-center gap-2"
              >
                Indonesia
              </span>
            ) : (
              <span
                onClick={() => handleChange("EN")}
                className="flex items-center gap-2"
              >
                English
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToggleLanguage;
