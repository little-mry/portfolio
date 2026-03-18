import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <section className="max-w-[80vw] mx-auto relative flex flex-col md:flex-row md:justify-end items-center md:items-center gap-4 py-6 px-4">
      <article className="flex gap-3">
        <a
          href="https://github.com/little-mry"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="inline-flex items-center justify-center h-8 w-8 border border-zinc-900 dark:border-zinc-400 rounded-md"
        >
          <FontAwesomeIcon
            aria-hidden="true"
            className="text-zinc-900 dark:text-zinc-400 "
            icon={faGithub}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/maria-kjellholm-990aa8161/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="inline-flex items-center justify-center h-8 w-8 border border-zinc-900 dark:border-zinc-400 rounded-md"
        >
          <FontAwesomeIcon
            aria-hidden="true"
            className="text-zinc-900 dark:text-zinc-400"
            icon={faLinkedin}
          />
        </a>
        <a
          href="mailto:maria.kjellholm@gmail.com"
          aria-label="Maila mig"
          className="inline-flex items-center justify-center h-8 w-8 border border-zinc-900 dark:border-zinc-400 rounded-md"
        >
          <FontAwesomeIcon
            aria-hidden="true"
            className="text-zinc-900 dark:text-zinc-400"
            icon={faEnvelope}
          />
        </a>
      </article>
      <p className=" text-sm text-zinc-900 dark:text-zinc-400">
        &copy; 2026 Maria Kjellholm
      </p>
    </section>
  );
};

export default Footer;
