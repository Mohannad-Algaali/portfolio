import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Dock, { type DockItemData } from "./componenets/Dock";
import { FaCode, FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import SettingsMenu from "./componenets/SettingsMenu";
import OverView from "./componenets/OverView";
import About from "./componenets/About";
import Experience from "./componenets/Experience";
import Projects from "./componenets/Projects";
import Skills from "./componenets/Skills";
import Footer from "./componenets/Footer";

export default function Home() {
  //@ts-ignore
  const { t, i18n } = useTranslation();
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);

  const iconSize = 35;

  const goToPage = (pageUrl: string) => {
    window.location.assign(pageUrl);
  };

  const dockItems: DockItemData[] = [
    {
      icon: <FaHome size={iconSize} />,
      label: "Home",
      onClick: () => {
        // goToSection("/");
      },
    },
    {
      icon: <FaCode size={iconSize} />,
      label: "Projects",
      onClick: () => {
        goToPage("/projects");
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
    <div className="w-full sm:w-[40rem] m-auto p-5">
      {isSettingsMenuOpen && (
        <SettingsMenu
          theme={theme}
          handleChangeTheme={handleChangeTheme}
          handleLanguage={handleLanguage}
          onClose={() => setIsSettingsMenuOpen(false)}
        />
      )}

      <div id="display" className="min-h-[100dvh] w-full ">
        <OverView></OverView>
        <About></About>
        <Experience></Experience>
        <Skills></Skills>
        <Projects numProjects={3}></Projects>
        <Footer></Footer>
        <div
          className={`fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center`}
        >
          <Dock items={dockItems} theme={theme}></Dock>
        </div>
      </div>
    </div>
  );
}
