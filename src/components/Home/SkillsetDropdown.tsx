import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

type Props = {
  title: string;
  items: string[];
};

export default function SkillsetDropdown({ title, items }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        className="inline-flex w-full items-center justify-between
          bg-transparent border-0 px-0 py-2 gap-2
          focus:outline-none 
          dark:focus:ring-zinc-600"
      >
        <span className="font-bold text-2xl md:text-3xl leading-tight">{title}</span>
        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
      </button>
        <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >

      
      <div
        className="overflow-hidden "
      >
        <ul
          className="pt-2 list-none pl-0
            grid grid-cols-3 md:grid-cols-2
            gap-x-5 gap-y-0.5
            text-lg leading-relaxed"
        >
          {items.map((item) => (
            <li key={item} className="py-0.5">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}
