export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      link: "#",
      imageUrl: "/path/to/image1.jpg",
      tags: ["React", "TypeScript"],
      repo: "#",
    },
    {
      title: "Project 1",
      description: "Description of Project 1",
      link: "#",
      imageUrl: "/path/to/image1.jpg",
      tags: ["React", "TypeScript"],
      repo: "#",
    },
    {
      title: "Project 1",
      description: "Description of Project 1",
      link: "#",
      imageUrl: "/path/to/image1.jpg",
      tags: ["React", "TypeScript"],
      repo: "#",
    },
    {
      title: "Project 1",
      description: "Description of Project 1",
      link: "#",
      imageUrl: "/path/to/image1.jpg",
      tags: ["React", "TypeScript"],
      repo: "#",
    },
    {
      title: "Project 1",
      description: "Description of Project 1",
      link: "#",
      imageUrl: "/path/to/image1.jpg",
      tags: ["React", "TypeScript"],
      repo: "#",
    },
  ];

  return (
    <div>
      <h2>Projects</h2>

      <div>
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full  mb-5  border-b bg-zinc-900 rounded-lg p-3"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="cover bg-zinc-800 w-full rounded-lg aspect-[16/9]"
            />
            <h3 className="text-2xl">{project.title}</h3>
            <p className="text-muted">{project.description}</p>

            <div className="flex flex-row-reverse justify-between">
              <div>
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-zinc-950 p-1 me-2 text-sm rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div>
                <a className="btn btn-primary mx-2 " href={project.link}>
                  Live Demo
                </a>
                {project.repo && (
                  <a className="btn btn-info mx-2 " href={project.repo}>
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
