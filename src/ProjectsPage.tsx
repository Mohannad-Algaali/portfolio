import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCode, FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import SettingsMenu from "./componenets/SettingsMenu";
import Projects from "./componenets/Projects";
import Footer from "./componenets/Footer";
import type { DockItemData } from "./componenets/Dock";
import Dock from "./componenets/Dock";
import { useNavigate} from "react-router-dom";

export default function ProjectsPage() {
	//@ts-ignore
	const { t, i18n } = useTranslation();
	const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);

	const navigate =useNavigate()
	const iconSize = 35;

	const goToPage = (PageUrl: string) => {
		navigate(PageUrl)
	};

	const dockItems: DockItemData[] = [
		{
			icon: <FaHome size={iconSize} />,
			label: t("home"),
			onClick: () => {
				goToPage("/");
			},
		},
		{
			icon: <FaCode size={iconSize} />,
			label: t("projects"),
			onClick: () => {
				// goToSection("")
			},
		},
		{
			icon: <IoMdSettings size={iconSize} />,
			label: t("settings"),
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
		<div>
			{" "}
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
					<Projects></Projects>
					<Footer></Footer>
					<div
						className={`fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center`}
					>
						<Dock items={dockItems} theme={theme}></Dock>
					</div>
				</div>
			</div>
		</div>
	);
}
