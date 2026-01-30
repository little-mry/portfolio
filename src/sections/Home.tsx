import Hero from "../components/Home/Hero";
/* import SkillsetDropdown from "../components/Home/SkillsetDropdown";
 */
const Home = () => {
  return (
    <section
      className="
      relative
    flex flex-col md:flex-row
    w-full
    px-4 md:px-6
    pt-4 md:pt-8
    bg-slate-200
    "
    >
      <article className="justify-self-start place-self-start max-w-prose">
         <h1 className="text-5xl md:text-9xl text-center md:text-left">
          MARIA KJELLHOLM
        </h1>
      
      </article>

      <article className="self-end w-full max-w-md translate-y-6">
        <Hero />
      </article>

      <article className="max-w-prose">
        <h3 className="font-bold text-2xl md:text-3xl">Här har ni mig!</h3>
        <p className="text-md leading-relaxed mt-2">
          Jag är en blivande Javascriptutvecklare med en stark känsla för
          användarbehov, kommunikation och gruppdynamik. Med en bakgrund som
          logoped och starkt engagemang för vår omvärld, brinner jag för att
          skapa digitala verktyg som är tillgängliga och kan göra skillnad på
          riktigt.{" "}
        </p>
        </article>

      {/*  <article className="md:mt-10">
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
      </article> */}
    </section>
  );
};
export default Home;
