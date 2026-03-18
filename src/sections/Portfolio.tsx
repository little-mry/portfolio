import PortfolioItem from "../components/Portfolio/PortfolioItem";
import projects from "../data/projects.json";
import type { PortfolioItem as PortfolioItemType } from "../types/PortfolioItem";

const Portfolio = () => {
  return (
    <section className="w-full">
      <div className="max-w-[80vw] mx-auto min-h-[90vh] px-4 py-8">
        <h2 className="mb-6 lg:mb-16 text-5xl font-regular flex items-baseline gap-4 after:content-[''] after:flex-1 after:h-px after:bg-current">
          PROJEKT JAG BYGGT
        </h2>
        <article className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          {(projects as PortfolioItemType[]).map((p) => (
            <PortfolioItem key={p.title} {...p} />
          ))}
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
