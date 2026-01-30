import HeroImg from "../../assets/maria-thumbsup.png";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="w-52 lg:w-80 rounded-none ">
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
