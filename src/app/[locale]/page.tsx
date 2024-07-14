import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("IndexPage");
  return (
    <main className="flex flex-col items-center justify-between p-2">
      <h1 className="text-3xl font-semibold">{t("title")}</h1>
    </main>
  );
}
