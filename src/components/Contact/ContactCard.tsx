import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePhone,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const ContactCard = () => {
  return (
    <section className="flex flex-col pt-10">
      <a
        href="mailto:maria.kjellholm@gmail.com"
        aria-label="Maila mig"
        className="inline-flex items-center justify-start  text-2xl gap-2"
      >
        <FontAwesomeIcon
          className="text-zinc-900 dark:text-zinc-400"
          icon={faSquarePhone}
        />
        0762248434
      </a>

      <a
        href="mailto:maria.kjellholm@gmail.com"
        aria-label="Maila mig"
        className="inline-flex items-center justify-start text-2xl gap-2"
      >
        <FontAwesomeIcon
          className="text-zinc-900 dark:text-zinc-400"
          icon={faSquareEnvelope}
        />
        maria.kjellholm@gmail.com
      </a>
    </section>
  );
};

export default ContactCard;
