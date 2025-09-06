import HeroImg from "../../assets/maria-w-background.jpeg";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="mx-auto w-40 lg:w-52 rounded-none p-[4px] bg-zinc-400 dark:bg-zinc-800 shadow-lg">
        <img
          src={HeroImg}
          alt="Image of Maria, a person with long blond hair and glasses, smiling"
          className="rounded-md w-full h-auto block"
        />
      </div>
    </section>
  );
};

export default Hero;
