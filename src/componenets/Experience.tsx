import React, { useState } from "react";

interface ExperienceItem {
  title: string;
  place: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export default function Experience() {
  const [page, setPage] = useState("work");
  const experienceList: ExperienceItem[] = [
    {
      title: "Software Engineer",
      place: "Tera Visions Ai",
      startDate: "2025 Sep",
      endDate: "Present",
      description: [
        "Developed and maintained web applications using React, Laravel and React Native.",
        "Collaborated with cross-functional teams to deliver high-quality software.",
        "Worked on project A, B, and C.",
      ],
    },
  ];
  const educationList: ExperienceItem[] = [
    {
      title: "Bachelor of Information Technology",
      place: "University of MAHSA ",
      startDate: "2025 Jan",
      endDate: "Present",
      description: [
        "Relevant Coursework: Data Structures, Algorithms, Web Development.",
      ],
    },
    {
      title: "Self Taught",
      place: "Various Online Platforms",
      startDate: "2023 Jan",
      endDate: "Present",
      description: [
        "Using online resources such as freeCodeCamp, Coursera, and YouTube to learn web development.",
        "Built several personal projects to apply learned skills.",
      ],
    },
    {
      title: "General Eduaction Development",
      place: "Online High School Diploma",
      startDate: "2023 Oct",
      endDate: "2024 May",
      description: [
        "Using online resources to complete high school education.",
        "Focused on core subjects such as Mathematics, Science, and English.",
      ],
    },
  ];

  let pageList: ExperienceItem[] = [];
  if (page === "work") {
    pageList = experienceList;
  } else {
    pageList = educationList;
  }
  return (
    <div className="mt-10">
      <div className="flex flex-row ">
        <button
          onClick={() => setPage("work")}
          className={`flex-1 py-2 ${
            page === "work" ? "" : "dark:bg-zinc-900 bg-zinc-200 text-white"
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => setPage("education")}
          className={`flex-1 py-2 ${
            page === "education"
              ? ""
              : "dark:bg-zinc-900 bg-zinc-200 text-white"
          }`}
        >
          Education
        </button>
      </div>
      <div className="mt-5">
        {pageList.map((item, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm text-gray-400">
                {item.startDate} - {item.endDate}
              </p>
            </div>
            <h4 className="text-lg font-semibold">{item.place}</h4>
            <ul className="list-disc list-inside mt-2 pl-4">
              {item.description.map((desc, i) => (
                <li key={i} className="text-muted">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
