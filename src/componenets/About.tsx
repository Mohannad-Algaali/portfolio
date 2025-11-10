export default function About() {
  return (
    <div className="container border-2 border-base-300 p-5 rounded-xl gap-3 flex flex-col box-shadow">
      <h2 className="text-2xl font-bold">About Me</h2>
      <p className="text-muted">
        A <span className="text-base-content">software engineer</span> that is
        capable of handling full projects from start to finish.
      </p>
      <p className="text-muted">
        I study{" "}
        <span className="text-base-content">
          Bachelors in Information Technology
        </span>{" "}
        at MAHSA University in Malaysia.
      </p>
      <p className="text-muted">
        I am ready to take on new{" "}
        <span className="text-base-content">challenges</span> and contribute to
        exciting projects.
      </p>
    </div>
  );
}
