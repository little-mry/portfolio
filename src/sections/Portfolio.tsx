import PortfolioItem from "../components/Portfolio/PortfolioItem";
import projects from "../data/projects.json";
import type { PortfolioItem as PortfolioItemType } from "../types/PortfolioItem";

const Portfolio = () => {
  return (
    <>
      <h2 className="mb-6 text-3xl font-semibold text-center">Projekt jag byggt</h2>
      <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {(projects as PortfolioItemType[]).map((p) => (
          <PortfolioItem key={p.title} {...p} />
        ))}
      </section>
    </>
  );
};

export default Portfolio;
