import type { Education as EducationType } from "../../types/education";

const EducationItem = ({ year, title, school }: EducationType) => {
  return (
    <article className="mb-4 rounded-md bg-zinc-200 dark:bg-zinc-700 p-2 grid grid-cols-[6rem_1fr] gap-x-3">
        <h3 className="text-base md:text-lg font-semibold text-black/70 dark:text-white/70">
          {year}
        </h3>
        <h3 className="text-base md:text-lg font-semibold text-black/70 dark:text-white/70">{title}</h3>
        <p className="col-span-2 text-md text-black/70 dark:text-white/70">
          {school}
        </p>
    </article>
  );
};

export default EducationItem;
