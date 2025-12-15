//@ts-ignore
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import pfp from "../assets/pfp.jpg";
import { useTranslation } from "react-i18next";

export default function OverView() {
  const { t } = useTranslation();
  return (
    <div>
      <section className="flex flex-row justify-between items-center w-full h-40">
        <div className="flex flex-row justify-center items-center gap-4">
          <img
            src={pfp}
            alt="pfp"
            className="w-24 h-24 object-cover object-center rounded-full p-2"
          />
          <div>
            <h1 className="text-xl font-bold">{t("name")}</h1>

            <p className="mt-1 text-md text-muted">{t("fullStackDeveloper")}</p>
            <div className="flex flex-row justify-start items-center gap-2 bg-green-600/30 container rounded-full px-2 text-sm w-fit mt-2">
              <div className="bg-green-500 size-2 rounded-full"></div>
              <p className="text-primary ">{t("available")}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-3 items-center justify-center">
          <a className="btn btn-primary" href="#">
            {t("resume")}
          </a>
          <a
            href="https://github.com/Mohannad-Algaali"
            target="_blank"
            className=" p-1 rounded-lg border-base-300 border-2"
          >
            <FaGithub size={30}></FaGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/mohannad-algaali-6454a224a/"
            target="_blank"
            className=" p-1 rounded-lg border-base-300 border-2"
          >
            <FaLinkedin size={30}></FaLinkedin>
          </a>
        </div>
      </section>
    </div>
  );
}
