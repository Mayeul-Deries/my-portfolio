import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FR, US } from "country-flag-icons/react/3x2";
import { toast } from "sonner";

export const LanguageChanger = () => {
  const {
    i18n: { changeLanguage, language },
    t,
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "fr" ? "en" : "fr";
    localStorage.setItem("i18nextLng", newLanguage);
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
    toast.success(t("navbar.languageChanged"));
  };

  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        handleChangeLanguage();
      }}
      className="relative inline-flex items-center justify-center h-4 w-8 cursor-pointer select-none"
    >
      <FR
        className={`h-[1rem] w-[1rem] transition-all duration-300 ${currentLanguage === "fr" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`}
      />
      <US
        className={`absolute h-[1rem] w-[1rem] transition-all duration-300 ${
          currentLanguage === "en" ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />
    </a>
  );
};
