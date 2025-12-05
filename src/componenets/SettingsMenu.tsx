import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";

interface SettingsMenuProps {
  theme: string;
  handleChangeTheme: () => void;
  handleLanguage: () => void;
  onClose: () => void;
}

export default function SettingsMenu({
  theme,
  handleChangeTheme,
  handleLanguage,
  onClose,
}: SettingsMenuProps) {
  const {t, i18n } = useTranslation();
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="absolute bottom-30 left-1/2 flex w-52 -translate-x-1/2 flex-col gap-2 rounded-lg border border-neutral-content/20 bg-base-100 p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {theme === "dark" ? (
              <MdDarkMode size={20} />
            ) : (
              <MdLightMode size={20} />
            )}
            <p>{t('theme')}</p>
          </div>
          <input
            type="checkbox"
            className="toggle"
            checked={theme === "dark"}
            onChange={handleChangeTheme}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IoLanguage size={20} />
            <p>{t('language')}</p>
          </div>
          <button className="btn btn-sm" onClick={handleLanguage}>
            {i18n.language === "ar" ? "En" : "Ar"}
          </button>
        </div>
      </div>
    </div>
  );
}
