import type { Work as WorkType } from "../../types/work";

const WorkItem = ({ period, title, workplace, description }: WorkType) => {
  return (
    <article className="rounded-md bg-zinc-200 dark:bg-zinc-700 mb-4 p-2">
      <div className="grid grid-cols-[6rem_1fr] gap-x-3">
        <h3 className="text-base md:text-lg font-semibold text-black/70 dark:text-white/70">
          {period}
        </h3>
        <h3 className="text-base md:text-lg font-semibold text-black/70 dark:text-white/70">{title}</h3>
      </div>

      <p className="text-md text-black/70 dark:text-white/70">{workplace}</p>

      {description && (
        <p className="text-sm/4 text-black/70 dark:text-white/70">
          {description}
        </p>
      )}
    </article>
  );
};

export default WorkItem;
