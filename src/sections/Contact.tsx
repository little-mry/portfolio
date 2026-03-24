import { useTranslation } from "react-i18next";
import ContactCard from "../components/Contact/ContactCard";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <div className="max-w-[80vw] mx-auto pb-8">
        <h2 className="mb-6 lg:mb-16 text-5xl font-regular flex items-baseline gap-4 after:content-[''] after:flex-1 after:h-px after:bg-current">
          {t("contact.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-2xl font-bold leading-tight mb-6">
              {t("contact.cta")}
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              {t("contact.intro")}
            </p>
          </div>
          <ContactCard />
        </div>
      </div>
    </section>
  );
};

export default Contact;
