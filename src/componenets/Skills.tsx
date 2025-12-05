import {
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiCss3,
  SiReact,
  //   SiDocker,
  SiGit,
  SiLaravel,
  SiPhp,
  SiVuedotjs,
  SiMysql,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  const size = 35;
  const skills = [
    {
      title: "Typescript",
      icon: <SiTypescript size={size}></SiTypescript>,
    },
    { title: "Html", icon: <SiHtml5 size={size}></SiHtml5> },
    { title: "Css", icon: <SiCss3 size={size}></SiCss3> },
    { title: "React", icon: <SiReact size={size}></SiReact> },
    {
      title: "Tailwind",
      icon: <SiTailwindcss size={size}></SiTailwindcss>,
    },
    { title: "Vue", icon: <SiVuedotjs size={size}></SiVuedotjs> },
    { title: "Php", icon: <SiPhp size={size}></SiPhp> },
    { title: "Laravel", icon: <SiLaravel size={size}></SiLaravel> },
    { title: "Mysql", icon: <SiMysql size={size}></SiMysql> },
    { title: "Git", icon: <SiGit size={size}></SiGit> },
    // { title: "Docker", icon: <SiDocker size={size}></SiDocker> },
  ];

  return (
    <div>
      <h2 className="text-center text-2xl my-5 ">{t("technologies")}</h2>

      <div className="grid grid-cols-4 sm:grid-cols-5 -gap-y-1">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="space-y-2 p-2 m-2 rounded-xl border-2 border-base-300 box-shadow aspect-square flex flex-col justify-center items-center"
          >
            <div className="flex justify-center">{skill.icon}</div>
            <p className="text-center text-sm text-muted">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
