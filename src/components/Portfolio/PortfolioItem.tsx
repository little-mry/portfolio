import { useTranslation } from "react-i18next";
import type { PortfolioItem as PortfolioItemType } from "../../types/PortfolioItem";

const PortfolioItem = ({ id, image, tags = [], liveUrl, repoUrl }: PortfolioItemType) => {
  const { t } = useTranslation();
  const title = t(`portfolio.projects.${id}.title`);
  const role = t(`portfolio.projects.${id}.role`);
  const description = t(`portfolio.projects.${id}.description`);

  return (
    <article className="flex flex-col md:flex-row rounded-xl bg-white dark:bg-zinc-800 shadow-md overflow-hidden">
      <div className="w-full md:w-2/5  h-60 md:h-auto  shrink-0">
        <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover object-top" />
      </div>

      <div className="flex-1 p-6 md:p-8 flex flex-col gap-3">
        <div>
          <h3 className="text-xl md:text-2xl font-bold uppercase">{title}</h3>
          <p className="text-sm italic text-zinc-500 dark:text-zinc-400">{role}</p>
        </div>

        <p className="text-sm md:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          {description}
        </p>

        <div className="mt-auto flex flex-col gap-2">
          {tags.length > 0 && (
            <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
              {tags.join(", ")}
            </p>
          )}
          {(liveUrl || repoUrl) && (
            <div className="flex gap-4">
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noreferrer" aria-label={`${title} – live`} className="text-sm font-medium hover:underline">
                  {t("portfolio.live")}
                </a>
              )}
              {repoUrl && (
                <a href={repoUrl} target="_blank" rel="noreferrer" aria-label={`${title} – repo`} className="text-sm font-medium hover:underline">
                  {t("portfolio.repo")}
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
