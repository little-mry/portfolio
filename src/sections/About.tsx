import AboutHero from "../components/About/AboutImg";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row justify-around gap-2">
      <article className="max-w-prose place-self-center">
        <h3 className="font-bold text-2xl ">Lite om mig</h3>
        <p className="text-md font-semibold leading-relaxed mt-2">
          Jag är tidigare utbildad logoped som nu bytt inriktning i livet, och
          studerar till Javascriptutvecklare. Det är spännande att få
          lösa problem som kan underlätta och göra livet bättre för människor
          och världen! Jag vill utveckla digitala verktyg som underlättar för
          användaren- och som är tillgängliga för alla.{" "}
        </p>
        <p className="text-md font-md leading-relaxed mt-2">
          Jag har en lång arbetslivserfarenhet bakom mig, där arbetet med
          människor alltid varit i fokus - både som kollegor och klienter. Jag
          trivs att jobba i team, och uppskattar miljöer där man samarbetar och
          stöttar varandra. I ett team kan jag ta mig an både ledande eller
          stödjande roll - beroende på vilka behov som finns.{" "}
        </p>
        <p className="text-md font-md leading-relaxed mt-2">
          Jag bor utanför Gnesta med min hund Ebbot. Även om jag bor lite off-grid är
          jag engagerad i min omvärld - jag har ett stort intresse av cirkulär
          ekonomi, klimatfrågor, djurrätt och mänskliga rättigheter.
        </p>
        <p className="text-md font-md leading-relaxed mt-2">
          På min fritid påtar jag i trädgården, håller på med något av mina
          hundratals diy-projekt eller vandrar planlöst runt i skogen (och
          hittar förhoppningsvis lite svamp på turen).
        </p>
      </article>
      <article className=" place-self-center">
        <AboutHero />
      </article>
    </section>
  );
};
export default About;
