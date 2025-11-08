//@ts-ignore
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import pfp from "../assets/pfp.jpg";

export default function () {
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
            <h1 className="text-xl font-bold">Mohannad Algaali</h1>

            <p className="mt-1 text-md text-muted">Full Stack Developer</p>
            <div className="flex flex-row justify-start items-center gap-2 bg-green-600/30 max-w-30 rounded-full px-2 text-sm">
              <div className="bg-green-500 size-2 rounded-full"></div>
              <p>Available</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-3 items-center justify-center">
          <button className="btn btn-primary">Resume</button>
          <FaGithub size={30}></FaGithub>
          <FaLinkedin size={30}></FaLinkedin>
        </div>
      </section>
    </div>
  );
}
