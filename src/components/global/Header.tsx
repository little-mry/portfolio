import Nav from "./Nav";

const Header = () => {
  return (
    <section className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <article>
        <h1 className="text-5xl md:text-6xl text-center md:text-left alumni-sansfont-bold">
          Maria Kjellholm
        </h1>
        <h2 className="text-lg md:text-xl text-center md:text-left">Blivande Javascriptutvecklare som är grym på kommunikation</h2>
        {/* <h2 className="text-lg md:text-xl text-center md:text-left">Aspiring javascript developer with great communtication skills</h2> */}
      </article>

      <div className="w-full flex justify-center md:w-auto md:justify-end">
        <Nav />
      </div>
    </section>
  );
};

export default Header;
