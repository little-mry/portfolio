import HeroImg from "../assets/maria-thumbsup.png";

const Home = () => {
  return (
    <section className="w-full bg-orange-300 dark:bg-stone-600">
      <div
        className="
        relative
        grid grid-cols-1 lg:grid-cols-2
        items-center
        max-w-[80vw] mx-auto
        min-h-[80vh]
        gap-8
        px-4 
        py-8
        "
      >
        <div className="flex flex-col gap-8">
          <article className="">
            <h1 className="text-[clamp(4rem,8vw,10rem)] leading-none text-center md:text-left">
              MARIA KJELLHOLM
            </h1>
          </article>

          <article className="">
            <h3 className="text-2xl md:text-3xl">Här har ni mig!</h3>
            <p className="text-md leading-relaxed mt-2">
              Jag är en blivande Javascriptutvecklare med en stark känsla för
              användarbehov, kommunikation och gruppdynamik. Med en bakgrund som
              logoped och starkt engagemang för vår omvärld, brinner jag för att
              skapa digitala verktyg som är tillgängliga och kan göra skillnad
              på riktigt.{" "}
            </p>
          </article>
        </div>

        <article className="flex items-end self-end lg:translate-y-[10%] max-w-xs mx-auto lg:max-w-xl lg:mx-auto">
          <img
            src={HeroImg}
            alt="Image of Maria, a person with long blond hair and glasses, smiling"
            className="rounded-md w-full h-auto block"
          />
        </article>
      </div>
    </section>
  );
};
export default Home;
