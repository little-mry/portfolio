import HeroImg from "../../assets/mariakj-img.png";

const Hero = () => {
  return (
    <section className="w-full">
      <img
        src={HeroImg}
        alt="Image of Maria- a person with long blond hair in a braid, glasses and a yellow tshirt"
        className="block mx-auto w-40 sm:w-56 md:w-72 lg:w-80 h-auto"
      />
    </section>
  );
};

export default Hero;
