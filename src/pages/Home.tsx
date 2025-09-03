import Hero from "../components/Home/Hero";
import SkillsetDropdown from "../components/Home/SkillsetDropdown";

const Home = () => {
  return (
    <section
      className="
    grid gap-8
    grid-cols-1
    md:grid-cols-3
    max-w-6xl mx-auto
    px-4 py-8
    
    "
    >
      <article className="justify-self-start  place-self-center max-w-prose">
        <h3 className="font-bold text-2xl md:text-3xl">Här har ni mig!</h3>
        <p className="text-lg leading-relaxed mt-2">
          Jag är en blivande Javascriptutvecklare med en stark känsla för
          användarbehov, kommunikation och gruppdynamik. Med en bakgrund som
          logoped och starkt engagemang för vår omvärld, brinner jag för att
          skapa digitala verktyg som är tillgängliga och kan göra skillnad på
          riktigt.{" "}
        </p>
      </article>

      <article className="place-self-start w-full max-w-md">
        <Hero />
      </article>

      <article className="justify-self-center md:mt-10">
        <SkillsetDropdown
          title="Skill set"
          items={[
            "Typescript",
            "React",
            "Node.js",
            "Express",
            "SQL",
            "NoSQL",
            "AWS",
            "CI/CD",
            "SASS",
            "Tailwind",
            "Git",
            "Scrum",
          ]}
        />
      </article>
    </section>
  );
};
export default Home;
