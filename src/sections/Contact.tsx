import { useTranslation } from "react-i18next";
import ContactCard from "../components/Contact/ContactCard";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <div className="max-w-[80vw] mx-auto px-4 py-8">
        <h2 className="mb-6 lg:mb-16 text-5xl font-regular flex items-baseline gap-4 after:content-[''] after:flex-1 after:h-px after:bg-current">
          {t("contact.title")}
        </h2>
        <ContactCard />
      </div>
    </section>
  );
};

export default Contact;
