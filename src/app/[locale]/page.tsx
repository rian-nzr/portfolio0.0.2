import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("IndexPage");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-semibold">{t("title")}</h1>
    </main>
  );
}
