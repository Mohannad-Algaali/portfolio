import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Dock, { type DockItemData } from "./componenets/Dock";
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import SettingsMenu from "./componenets/SettingsMenu";
import OverView from "./componenets/OverView";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);

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
      onClick: () => {
        setIsSettingsMenuOpen(!isSettingsMenuOpen);
      },
    },
  ];

  const [theme, setTheme] = useState(
    localStorage.getItem("data-theme") || "dark"
  );

  useEffect(() => {
    document.getElementById("display")!.addEventListener("click", () => {
      setIsSettingsMenuOpen(false);
    });
  }, []);
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
      <div
        className={`fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center`}
      >
        {isSettingsMenuOpen && (
          <SettingsMenu
            theme={theme}
            handleChangeTheme={handleChangeTheme}
            handleLanguage={handleLanguage}
            onClose={() => setIsSettingsMenuOpen(false)}
          />
        )}
        <Dock items={dockItems} theme={theme}></Dock>
      </div>

      <div id="display" className="w-full min-h-[100dvh]">
        <OverView></OverView>
      </div>
    </div>
  );
}
