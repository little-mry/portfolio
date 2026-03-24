import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const ContactCard = () => {
  return (
      <article className="flex gap-5 ">
        <a
          href="https://github.com/little-mry"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="inline-flex items-center justify-center h-10 w-10"
        >
          <FontAwesomeIcon
            aria-hidden="true"
            className="text-3xl text-zinc-900 dark:text-zinc-400 hover:text-orange-300 transition-colors"
            icon={faGithub}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/maria-kjellholm-990aa8161/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="inline-flex items-center justify-center h-10 w-10"
        >
          <FontAwesomeIcon
            aria-hidden="true"
            className="text-3xl text-zinc-900 dark:text-zinc-400 hover:text-orange-300 transition-colors"
            icon={faLinkedin}
          />
        </a>
        <a
          href="mailto:maria.kjellholm@gmail.com"
          aria-label="Maila mig"
          className="inline-flex items-center justify-center h-10 w-10"
        >
          <FontAwesomeIcon
            aria-hidden="true"
            className="text-3xl text-zinc-900 dark:text-zinc-400 hover:text-orange-300 transition-colors"
            icon={faEnvelope}
          />
        </a>
      </article>
  );
};

export default ContactCard;
