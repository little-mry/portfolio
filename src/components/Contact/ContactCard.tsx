import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactCard = () => {
  const { t } = useTranslation();

  return (
    <address className="flex flex-col pt-10 not-italic">
      <a
        href="tel:0762248434"
        aria-label={t("contact.callMe")}
        className="inline-flex items-center justify-start text-xl gap-2"
      >
        <FontAwesomeIcon className="text-zinc-900 dark:text-zinc-400" icon={faSquarePhone} />
        0762248434
      </a>

      <a
        href="mailto:maria.kjellholm@gmail.com"
        aria-label={t("contact.emailMe")}
        className="inline-flex items-center justify-start text-xl gap-2"
      >
        <FontAwesomeIcon className="text-zinc-900 dark:text-zinc-400" icon={faSquareEnvelope} />
        maria.kjellholm@gmail.com
      </a>
    </address>
  );
};

export default ContactCard;
