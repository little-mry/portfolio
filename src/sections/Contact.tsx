import { useTranslation } from "react-i18next";
import ContactCard from "../components/Contact/ContactCard";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <div className="max-w-[80vw] mx-auto pb-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xl bg-orange-100 dark:bg-stone-600 rounded-2xl p-10 flex flex-col gap-6">
            <p className="text-2xl font-bold text-center">{t("contact.cta")}</p>
            <p className="text-zinc-600 dark:text-zinc-300 text-center">{t("contact.intro")}</p>
            <ContactCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
