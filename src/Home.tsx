import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Dock, { type DockItemData } from "./componenets/Dock";
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export default function Home() {
  const { t, i18n } = useTranslation();

  const iconSize = 35;

  const goToSection = (sectionId: string) => {
    const link = document.createElement("a");
    link.setAttribute("href", `#${sectionId}`);
    link.click();
  };

  const dockItems: DockItemData[] = [
    {
      icon: <FaHome size={iconSize} />,
      label: "Home",
      onClick: () => {
        goToSection("");
      },
    },
    {
      icon: <IoMdSettings size={iconSize} />,
      label: "Settings",
      onClick: () => {},
    },
  ];

  const [theme, setTheme] = useState(
    localStorage.getItem("data-theme") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("data-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleLanguage = () => {
    if (i18n.language === "ar") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ar");
    }
  };

  const handleChangeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div>
      <h1 className="text-5xl">{t("home")}</h1>
      <button className="btn" onClick={handleLanguage}>
        Change Language
      </button>

      <button className="btn" onClick={handleChangeTheme}>
        Change Theme
      </button>

      <Dock items={dockItems} theme={theme}></Dock>
    </div>
  );
}
