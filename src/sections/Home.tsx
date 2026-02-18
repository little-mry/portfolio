import HeroImg from "../assets/maria-thumbsup.png";

const Home = () => {
  return (
    <section
      className="
      relative
      grid grid-cols-1 lg:grid-cols-3
      items-center
      w-full
      gap-8 lg:gap-0
      px-4 md:px-10
      py-6 md:py-4
      bg-slate-200
      dark:bg-zinc-700 
      "
    >
      <article className="">
        <h1 className="text-[clamp(4rem,8vw,10rem)] text-center md:text-left">
          MARIA KJELLHOLM
        </h1>
      </article>

      <article className="flex items-end self-end lg:lg:translate-y-[10%] max-w-xs mx-auto lg:max-w-xl lg:mx-auto">
        <img
          src={HeroImg}
          alt="Image of Maria, a person with long blond hair and glasses, smiling"
          className="rounded-md w-full h-auto block"
        />
      </article>

      <article className="">
        <h3 className="font-bold text-2xl md:text-3xl">Här har ni mig!</h3>
        <p className="text-md leading-relaxed mt-2">
          Jag är en blivande Javascriptutvecklare med en stark känsla för
          användarbehov, kommunikation och gruppdynamik. Med en bakgrund som
          logoped och starkt engagemang för vår omvärld, brinner jag för att
          skapa digitala verktyg som är tillgängliga och kan göra skillnad på
          riktigt.{" "}
        </p>
      </article>
    </section>
  );
};
export default Home;
