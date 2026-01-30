import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row gap-6 mx-6 md:items-center md:justify-between">
      <div className="flex justify-center md:w-auto md:justify-end">
        <Nav />
      </div>
    <ThemeToggle />
    </section>
  );
};

export default Header;
