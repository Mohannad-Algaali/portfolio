import { useState } from "react";
import { useTranslation } from "react-i18next";

interface ExperienceItem {
  title: string;
  titleAr?: string;
  place: string;
  placeAr?: string;
  startDate: string;
  startDateAr?: string;
  endDate: string;
  endDateAr?: string;
  description: string[];
  descriptionAr?: string[];
}

export default function Experience() {
  const { t, i18n } = useTranslation();
  const [page, setPage] = useState("work");
  const experienceList: ExperienceItem[] = [
    {
      title: "Software Engineer",
      titleAr: "مهندس برمجيات",
      place: "Tera Visions Ai",
      placeAr: "Tera Visions Ai",
      startDate: "2025 Sep",
      startDateAr: "2025 سبتمبر",
      endDate: "Present",
      endDateAr: "الحاضر",
      description: [
        "Developed and maintained web applications using React, Laravel and React Native.",
        "Collaborated with cross-functional teams to deliver high-quality software.",
        "Made most of Aqua Marwa, an E-commerce for selling water in Saudi Arabia.",
        "Patched a couple of issues in Waslah app.",
        "Implemented payment systems in multiple projects.",
      ],
      descriptionAr: [
        "تطوير وصيانة تطبيقات الويب باستخدام React و Laravel و React Native.",
        "التعاون مع فرق متعددة الوظائف لتقديم برامج عالية الجودة.",
        "صنع معظم أكوا مروة ، وهو تطبيق للتجارة الإلكترونية لبيع المياه في المملكة العربية السعودية.",
        "إصلاح بعض المشكلات في تطبيق وصلة.",
        "تنفيذ أنظمة الدفع في مشاريع متعددة.",
      ],
    },
  ];
  const educationList: ExperienceItem[] = [
    {
      title: "Bachelor of Information Technology",
      titleAr: "بكالوريوس في تكنولوجيا المعلومات",
      place: "University of MAHSA ",
      placeAr: "جامعة MAHSA",
      startDate: "2025 Jan",
      startDateAr: "2025 يناير",
      endDate: "Present",
      endDateAr: "الحاضر",
      description: [
        "Relevant Coursework: Data Structures, Algorithms, Web Development.",
      ],
      descriptionAr: [
        "الدورات الدراسية ذات الصلة: هياكل البيانات ، الخوارزميات ، تطوير الويب.",
      ],
    },
    {
      title: "Self Taught",
      titleAr: "تعليم ذاتي",
      place: "Various Online Platforms",
      placeAr: "منصات مختلفة عبر الإنترنت",
      startDate: "2023 Jan",
      startDateAr: "2023 يناير",
      endDate: "Present",
      endDateAr: "الحاضر",
      description: [
        "Using online resources such as freeCodeCamp, Coursera, and YouTube to learn web development.",
        "Built several personal projects to apply learned skills.",
      ],
      descriptionAr: [
        "استخدام الموارد عبر الإنترنت مثل freeCodeCamp و Coursera و YouTube لتعلم تطوير الويب.",
        "بناء العديد من المشاريع الشخصية لتطبيق المهارات المكتسبة.",
      ],
    },
    {
      title: "General Eduaction Development",
      titleAr: "تطوير التعليم العام",
      place: "Online High School Diploma",
      placeAr: "دبلوم المدرسة الثانوية عبر الإنترنت",
      startDate: "2023 Oct",
      startDateAr: "2023 أكتوبر",
      endDate: "2024 May",
      endDateAr: "2024 مايو",
      description: [
        "Using online resources to complete high school education.",
        "Focused on core subjects such as Mathematics, Science, and English.",
      ],
      descriptionAr: [
        "استخدام الموارد عبر الإنترنت لإكمال التعليم الثانوي.",
        "التركيز على المواد الأساسية مثل الرياضيات والعلوم واللغة الإنجليزية.",
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
    <div className="my-10  border-base-300 border-2 rounded-xl box-shadow">
      <div className="flex flex-row mb-20 ">
        <button
          onClick={() => setPage("work")}
          className={`flex-1 py-2 ${page === "work" ? "" : "bg-base-300"}`}
        >
          {t("work")}
        </button>
        <button
          onClick={() => setPage("education")}
          className={`flex-1 py-2 ${page === "education" ? "" : "bg-base-300"}`}
        >
          {t("education")}
        </button>
      </div>
      <div className="mt-5">
        {pageList.map((item, index) => (
          <div key={index} className=" m-6">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-bold">
                {i18n.language === "ar" ? item.titleAr : item.title}
              </h3>
              <p className="text-sm text-muted">
                {i18n.language === "ar" ? item.startDateAr : item.startDate} -{" "}
                {i18n.language === "ar" ? item.endDateAr : item.endDate}
              </p>
            </div>
            <h4 className="text-lg font-semibold">
              {i18n.language === "ar" ? item.placeAr : item.place}
            </h4>
            <ul className="list-disc list-inside mt-2 pl-4">
              {(i18n.language === "ar"
                ? item.descriptionAr
                : item.description
              )?.map((desc, i) => (
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
