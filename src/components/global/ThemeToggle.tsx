import { useState } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
 const [checked, setChecked] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.checked;
    setChecked(v);
    document.documentElement.classList.toggle("dark", v);
  };

  
  return (
    <div className={className}>
      <label className="inline-flex items-center gap-1 cursor-pointer select-none">
        <span className="text-xs sm:text-xs ">Dark mode</span>

        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          onChange={onChange}
          aria-label="Växla mörkt läge"
        />

        {/* Track + knob (knoppen som pseudo-element) */}
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
