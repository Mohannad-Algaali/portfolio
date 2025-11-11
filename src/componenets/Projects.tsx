export default function Projects({ numProjects }: { numProjects?: number }) {
  const projects = [
    {
      title: "Fruit Cards",
      description:
        "An online room-based cards game that is built using web sockets.",
      link: "https://fruit-cards.vercel.app/",
      imageUrl: "/assets/projects/fruit-cards.png",
      tags: ["React", "Nodejs", "Socket.io"],
      repo: "https://github.com/Mohannad-Algaali/fruit-cards",
    },
    {
      title: "Tajdeed",
      description:
        "A prototype of a passport renewal system for Sudanese government.",
      link: "",
      imageUrl: "/assets/projects/tajdeed.png",
      tags: ["React", "Nodejs"],
      repo: "",
    },
    {
      title: "Tera Visions AI",
      description: "A company landing page with blog system",
      link: "",
      imageUrl: "/assets/projects/teravisions.png",
      tags: ["React", "TypeScript", "Laravel"],
      repo: "",
    },
    {
      title: "Aqua Marwa",
      description:
        "A full E-Commerce application for selling water products in Saudi Arabic. ",
      link: "",
      imageUrl: "/path/to/image1.jpg",
      tags: ["React Native", "Laravel"],
      repo: "",
    },
    {
      title: "Project 1",
      description: "Description of Project 1",
      link: "",
      imageUrl: "/path/to/image1.jpg",
      tags: ["React", "TypeScript"],
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
      <h2 className="text-center text-2xl my-10">Projects</h2>

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
                  <h3 className="text-2xl">{project.title}</h3>
                  <p className="text-muted mb-5">{project.description}</p>

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
                          Live Demo
                        </a>
                      )}
                      {project.repo && (
                        <a
                          className="btn btn-dash mx-2 "
                          target="_blank"
                          href={project.repo}
                        >
                          Source Code
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
            See all projects
          </p>
        </div>
      )}
    </div>
  );
}
