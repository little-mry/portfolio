import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="w-full md:hidden flex justify-center">
        <button
          aria-label={t("nav.openMenu")}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="inline-flex items-center justify-center h-9 w-9 border border-gray-900/70 dark:border-zinc-200/40 rounded-md"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <FontAwesomeIcon className="text-gray-700 dark:text-zinc-200" icon={faBars} />
        </button>
      </div>

      <nav aria-label={t("nav.mainMenu")} className="hidden md:block">
        <ul className="flex items-center gap-10">
          <li><button className="hover:underline" onClick={() => scrollTo("skillset")}>{t("nav.techstack")}</button></li>
          <li><button className="hover:underline" onClick={() => scrollTo("portfolio")}>{t("nav.projects")}</button></li>
          <li><button className="hover:underline" onClick={() => scrollTo("about")}>{t("nav.about")}</button></li>
          <li><button className="hover:underline" onClick={() => scrollTo("contact")}>{t("nav.contact")}</button></li>
        </ul>
      </nav>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={t("nav.mainMenu")}
            className="fixed z-50 md:hidden inset-x-2 sm:inset-x-4 top-27 rounded-xl bg-orange-50 dark:bg-zinc-800 p-5 shadow-lg ring-1 ring-black/10 dark:ring-white/10"
          >
            <button
              aria-label={t("nav.closeMenu")}
              className="grid place-items-center h-10 w-10 mb-4 mx-auto rounded-md border border-zinc-700/40 dark:border-zinc-200/30 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/50"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <ul className="space-y-2 text-center text-2xl sm:text-3xl">
              <li><button className="w-full hover:underline py-1.5" onClick={() => scrollTo("home")}>{t("nav.home")}</button></li>
              <li><button className="w-full hover:underline py-1.5" onClick={() => scrollTo("about")}>{t("nav.about")}</button></li>
              <li><button className="w-full hover:underline py-1.5" onClick={() => scrollTo("portfolio")}>{t("nav.projects")}</button></li>
              <li><button className="w-full hover:underline py-1.5" onClick={() => scrollTo("cv")}>{t("nav.cv")}</button></li>
              <li><button className="w-full hover:underline py-1.5" onClick={() => scrollTo("contact")}>{t("nav.contact")}</button></li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Nav;
