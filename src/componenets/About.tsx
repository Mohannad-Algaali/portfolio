import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="container border-2 border-base-300 p-5 rounded-xl gap-3 flex flex-col box-shadow">
      <h2 className="text-2xl font-bold">{t("aboutMe")}</h2>
      <p className="text-muted">
        {t("aboutMeBio1")}
      </p>
      <p className="text-muted">
        {t("aboutMeBio2")}
      </p>
      <p className="text-muted">
        {t("aboutMeBio3")}
      </p>
    </div>
  );
}
