import AboutImg from "../../assets/maria-digging.jpg";

const AboutHero = () => {
  return (
    <section className="w-full">
      <img
        src={AboutImg}
        alt="Image of Maria digging in the garden"
        className="block mx-auto w-56 md:w-68 h-auto rounded-md border dark:border-none"
      />
    </section>
  );
};

export default AboutHero;
