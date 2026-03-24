import { useTranslation } from "react-i18next";
import HeroImg from "../assets/maria-thumbsup.webp";

const Home = () => {
  const { t } = useTranslation();

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
          <article>
            <h1 className="text-[clamp(4rem,8vw,10rem)] leading-none text-center md:text-left">
              MARIA KJELLHOLM
            </h1>
          </article>

          <article>
            <h2 className="text-xl font-bold uppercase mb-2">{t("home.subtitle")}</h2>
            <p className="leading-relaxed mt-2">{t("home.description")}</p>
          </article>
        </div>

        <article className="flex items-end self-end lg:translate-y-[12%] max-w-sm mx-auto lg:max-w-xl lg:mx-auto">
          <img
            src={HeroImg}
            alt="Image of Maria, a person with long blond hair and glasses, smiling"
            width={2064}
            height={2397}
            fetchPriority="high"
            className="rounded-md w-full h-auto block"
          />
        </article>
      </div>
    </section>
  );
};

export default Home;
