import { useTranslation } from "react-i18next";
import AboutImg from "../assets/maria-digging-1.webp";

const About = () => {
  const { t } = useTranslation();
  const background = t("about.background", { returnObjects: true }) as string[];
  const contribution = t("about.contribution", { returnObjects: true }) as string[];

  return (
    <section className="w-full">
      <div className="max-w-[80vw] mx-auto py-8">
        <h2 className="mb-6 lg:mb-16 text-5xl font-regular flex items-baseline gap-4 after:content-[''] after:flex-1 after:h-px after:bg-current">
          {t("about.title")}
        </h2>

        <article className="mb-8">
        </article>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
          <p className="font-semibold leading-relaxed">{t("about.intro")}</p>
            <article>
              <h3 className="text-xl font-bold uppercase mb-2">{t("about.backgroundTitle")}</h3>
              {background.map((para, i) => (
                <p key={i} className={`leading-relaxed${i > 0 ? " mt-2" : ""}`}>{para}</p>
              ))}
            </article>
            <article>
              <h3 className="text-xl font-bold uppercase mb-2">{t("about.contributionTitle")}</h3>
              {contribution.map((para, i) => (
                <p key={i} className={`leading-relaxed${i > 0 ? " mt-2" : ""}`}>{para}</p>
              ))}
            </article>
          </div>

          <img
            src={AboutImg}
            alt="Image of Maria digging in the garden"
            width={600}
            height={400}
            loading="lazy"
            className="w-full h-auto rounded-md dark:border-none ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
