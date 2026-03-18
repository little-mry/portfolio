import type { PortfolioItem as PortfolioItemType } from "../../types/PortfolioItem";

const PortfolioItem = ({
  title,
  image,
  role,
  description,
  tags = [],
  liveUrl,
  repoUrl,
}: PortfolioItemType) => {
  return (
    <article className="flex flex-col mb-14 md:flex-row h-[85vh] shadow-xl shadow-zinc-900/30 bg-white dark:bg-zinc-800 shadow-md overflow-hidden">
      <div className="w-full md:w-[50%] aspect-video md:aspect-auto shrink-0">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 p-6 md:p-8 flex flex-col gap-3">
        <div>
          <h3 className="text-xl md:text-2xl font-bold uppercase">{title}</h3>
          {role && (
            <p className="text-sm italic text-zinc-500 dark:text-zinc-400">{role}</p>
          )}
        </div>

        {description && (
          <p className="text-sm md:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            {description}
          </p>
        )}

        <div className="mt-auto flex flex-col gap-2">
          {tags.length > 0 && (
            <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
              {tags.join(", ")}
            </p>
          )}

          {(liveUrl || repoUrl) && (
            <div className="flex gap-4">
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noreferrer" className="text-sm font-medium hover:underline">
                  Live →
                </a>
              )}
              {repoUrl && (
                <a href={repoUrl} target="_blank" rel="noreferrer" className="text-sm font-medium hover:underline">
                  Repo →
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default PortfolioItem;
