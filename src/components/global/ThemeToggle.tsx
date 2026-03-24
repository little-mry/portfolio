import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.checked;
    setChecked(v);
    document.documentElement.classList.toggle("dark", v);
  };

  
  return (
    <div className={className}>
      <label className="inline-flex items-center cursor-pointer select-none">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          onChange={onChange}
          aria-label={t("settings.toggleDarkMode")}
        />


        <div
          className="
          relative  rounded-full transition-colors
          bg-zinc-300 peer-checked:bg-zinc-800
          w-10 h-6 sm:w-12 sm:h-7 
          
          before:content-[''] before:absolute before:top-1 before:left-1
          before:rounded-full before:bg-white before:shadow-sm
          before:transition-transform before:duration-200

          before:h-4 before:w-4 sm:before:h-5 sm:before:w-5 
          peer-checked:before:translate-x-4
          sm:peer-checked:before:translate-x-5
         
        "
        />
      </label>
    </div>
  );
}
