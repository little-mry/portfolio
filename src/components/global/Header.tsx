import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSettingsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "sv" ? "en" : "sv";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
  };

  return (
    <header className="relative w-full">
      <div className="max-w-[80vw] mx-auto px-4 py-3 flex flex-col-reverse md:flex-row gap-6 md:items-center md:justify-between">
        <div className="flex justify-center md:w-auto md:justify-end">
          <Nav />
        </div>
      </div>
      <div ref={settingsRef} className="absolute right-2 bottom-2 self-start">
        <button
          aria-label={t("header.openSettings")}
          aria-expanded={isSettingsOpen}
          aria-controls="settings-menu"
          className="inline-flex items-center justify-end h-9 w-9"
          onClick={() => setIsSettingsOpen((v) => !v)}
        >
          <FontAwesomeIcon className="text-gray-700 dark:text-zinc-200" icon={faGear} />
        </button>
        {isSettingsOpen && (
          <div id="settings-menu" role="menu" className="absolute right-0 mt-2 p-3 w-max bg-white dark:bg-zinc-800 rounded shadow-lg z-10 flex flex-col gap-3">
            <ThemeToggle />
            <button
              onClick={toggleLanguage}
              className="text-sm font-medium text-left hover:underline"
            >
              {i18n.language === "sv" ? "English" : "Svenska"}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
