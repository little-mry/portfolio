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
        className="inline-flex items-center justify-between
          bg-transparent border-0 px-0 py-2 gap-2
          font-bold text-3xl
          focus:outline-none 
          dark:focus:ring-zinc-600"
      >
        <span className="font-bold text-2xl md:text-3xl">{title}</span>
        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
      </button>

      <div
        className={`overflow-hidden transition-[max-height] duration-300
          ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <ul
          className="mt-2 list-none pl-0
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
  );
}
