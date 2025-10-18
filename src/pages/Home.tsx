import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return <div className="py-40 mx-auto">{t("pages.home.home")}</div>;
};
