import { useFetchProjects } from './fetchProjects';
function Projects() {
  const { isLoading, projects } = useFetchProjects();

  if (isLoading) {
    return (
      <section className="projects">
        <h2>Loading.....</h2>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, image, url, title } = project;
          return (
            <a
              href={url}
              key={id}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={image} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
}
export default Projects;
