import type { PortfolioItem as PortfolioItemType } from "../../types/PortfolioItem";

const PortfolioItem = ({
  title,
  image,
  description,
  tags = [],
  liveUrl,
  repoUrl,
}: PortfolioItemType) => {
  return (
    <article className="group flex flex-col rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-neutral-800">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-contain group-hover:scale-[1.01] transition-transform duration-300"
        />
      </div>
      <header className="mt-4">
        <h3 className="text-xl font-bold">{title}</h3>
        {description && (
          <p className="mt-1 text-md font-medium text-black/70 dark:text-white/70">
            {description}
          </p>
        )}
      </header>

      {tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2 font-medium">
          {tags.map((t) => (
            <li
              key={t}
              className="text-sm  px-2 py-1 rounded-full border border-black/10 dark:border-white/10"
            >
              {t}
            </li>
          ))}
        </ul>
      )}

      {(liveUrl || repoUrl) && (
        <div className="mt-auto pt-4 flex gap-2 font-medium">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10"
            >
              Live
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10"
            >
              Repo
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default PortfolioItem;
