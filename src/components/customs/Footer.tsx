import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-8">
        <div className="flex flex-col items-center space-y-3">
          <div className="text-xl font-bold text-black dark:text-white">Mayeul Deries</div>
          <p className="text-center text-xs sm:text-sm text-muted-foreground caption max-w-lg">
            {t("footer.rotating_texts.fullstack_dev")} | {t("footer.rotating_texts.tech_explorer")} |{" "}
            {t("footer.rotating_texts.uiux_lover")}
          </p>
          <span className="w-full text-center sm:w-auto text-sm sm:text-sm text-gray-600 dark:text-neutral-300">
            {t("footer.built_with")}
          </span>
        </div>
        <div className="flex flex-col pt-2 justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            © {currentYear} {t("footer.rights")}
          </p>
          <div className="flex gap-8 md:pt-2">
            <Link
              to="mailto:mayeul.deries@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 text-gray-500 dark:text-white hover:text-black dark:hover:text-neutral-300 transition"
              aria-label="GitHub"
            >
              <Mail className="w-4 h-4" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/mayeul-deries/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 text-gray-500 dark:text-white hover:text-black dark:hover:text-neutral-300 transition"
              aria-label="GitHub"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link
              to="https://github.com/mayeul-deries"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 text-gray-500 dark:text-white hover:text-black dark:hover:text-neutral-300 transition"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
