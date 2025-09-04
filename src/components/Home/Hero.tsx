import HeroImg from "../../assets/maria-thumbsup.png";

const Hero = () => {
  return (
    <section className="w-full">
      <img
        src={HeroImg}
        alt="Image of Maria, a person with long blond hair and glasses, smiling"
        className="block mx-auto w-72 md:w-86 lg:w-98 h-auto"
      />
    </section>
  );
};

export default Hero;
