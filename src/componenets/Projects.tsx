import { useTranslation } from "react-i18next";

export default function Projects({ numProjects }: { numProjects?: number }) {
  const { t, i18n } = useTranslation();
  const projects = [
    {
      title: "Fruit Cards",
      titleAr: "بطاقات الفاكهة",
      description:
        "An online room-based cards game that is built using web sockets.",
      descriptionAr:
        "لعبة بطاقات على الإنترنت قائمة على الغرف مبنية باستخدام مآخذ الويب.",
      link: "https://fruit-cards.vercel.app/",
      imageUrl: "/assets/projects/fruit-cards.png",
      tags: ["React", "Nodejs", "Socket.io"],
      repo: "https://github.com/Mohannad-Algaali/fruit-cards",
    },
    {
      title: "Tajdeed",
      titleAr: "تجديد",
      description:
        "A prototype of a passport renewal system for Sudanese government.",
      descriptionAr: "نموذج أولي لنظام تجديد جوازات السفر للحكومة السودانية.",
      link: "",
      imageUrl: "/assets/projects/tajdeed.png",
      tags: ["React", "Nodejs"],
      repo: "",
    },
    {
      title: "Tera Visions AI",
      titleAr: "Tera Visions AI",
      description: "A company landing page with blog system",
      descriptionAr: "صفحة هبوط شركة مع نظام مدونة",
      link: "",
      imageUrl: "/assets/projects/teravisions.png",
      tags: ["React", "TypeScript", "Laravel"],
      repo: "",
    },
    {
      title: "Aqua Marwa",
      titleAr: "أكوا مروة",
      description:
        "A full E-Commerce application for selling water products in Saudi Arabic. ",
      descriptionAr:
        "تطبيق تجارة إلكترونية كامل لبيع منتجات المياه في المملكة العربية السعودية.",
      link: "",
      imageUrl: "/path/to/image1.jpg",
      tags: ["React Native", "Laravel"],
      repo: "",
    },
  ];

  const getLength = () => {
    if (numProjects) {
      return numProjects;
    }
    return projects.length;
  };

  return (
    <div>
      <h2 className="text-center text-2xl my-10">{t("projects")}</h2>

      <div>
        {projects.map(
          (project, index) =>
            index < getLength() && (
              <div
                key={index}
                className="w-full mb-5 border-base-300 border-2 bg-base-100 container rounded-lg box-shadow"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className=" object-cover w-full bg-base-200 rounded-lg aspect-[16/9] text-center "
                />
                <div className="p-4">
                  <h3 className="text-2xl">
                    {i18n.language === "en" ? project.title : project.titleAr}
                  </h3>
                  <p className="text-muted mb-5">
                    {i18n.language === "en"
                      ? project.description
                      : project.descriptionAr}
                  </p>

                  <div className="flex flex-col gap-5 md:flex-row-reverse justify-between">
                    <div className="self-end md:self-start">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-primary text-primary-content p-1 me-2 text-sm rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-row">
                      {project.link && (
                        <a
                          className="btn btn-primary mx-2 "
                          target="_blank"
                          href={project.link}
                        >
                          {t("liveDemo")}
                        </a>
                      )}
                      {project.repo && (
                        <a
                          className="btn btn-dash mx-2 "
                          target="_blank"
                          href={project.repo}
                        >
                          {t("sourceCode")}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      {numProjects && (
        <div className="flex justify-center items-center">
          <p
            className="btn btn-primary my-4"
            onClick={() => window.location.assign("/projects")}
          >
            {t("seeAllProjects")}
          </p>
        </div>
      )}
    </div>
  );
}
