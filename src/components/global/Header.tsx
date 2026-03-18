import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative w-full">
      <div className="max-w-[80vw] mx-auto px-4 py-3 flex flex-col-reverse md:flex-row gap-6 md:items-center md:justify-between">
        <div className="flex justify-center md:w-auto md:justify-end">
          <Nav />
        </div>
      </div>
      <div ref={settingsRef} className="absolute right-2 bottom-[50%] self-start">
        <button
          aria-label={"Öppna inställningar"}
          aria-expanded={isSettingsOpen}
          className="inline-flex items-center justify-end h-9 w-9"
          onClick={() => setIsSettingsOpen((v) => !v)}
        >
          <FontAwesomeIcon
            className="text-gray-700 dark:text-zinc-200"
            icon={faGear}
          />
        </button>
        {isSettingsOpen && (
          <div className="absolute right-0 mt-2 p-3 w-max bg-white dark:bg-zinc-800 rounded shadow-lg z-10">
            <ThemeToggle />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
