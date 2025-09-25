import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  const handleLanguage = () => {
    if (i18n.language === "ar") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ar");
    }
  };

  return (
    <div>
      <h1 className="text-5xl">{t("home")}</h1>
      <button className="btn" onClick={handleLanguage}>
        Change Language
      </button>
    </div>
  );
}
