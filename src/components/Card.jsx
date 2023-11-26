const Card = ({ project }) => {
  return (
    <figure className="p-4 nm-flat-primary rounded-lg group" key={project.id}>
      <img
        className="group-hover:scale-105 transition-all  duration-300 delay-300"
        src={process.env.PUBLIC_URL + project.img}
        alt="project"
      />
      <div className="py-2">
        <h1 className="text-BlueJeans font-semibold">{project.name}</h1>
        <p className="text-xl font-semibold py-2">{project.desc}</p>
      </div>
      <div className="gap-5 flex ">
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-1 nm-flat-primary uppercase text-BlueJeans font-semibold rounded-lg hover:text-white hover:bg-BlueJeans transition-all  duration-150 delay-150"
        >
          LIVE
        </a>
        <a
          href={project.git}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-1 nm-flat-primary uppercase text-BlueJeans font-semibold rounded-lg hover:text-white hover:bg-BlueJeans transition-all  duration-150 delay-150"
        >
          Git
        </a>
      </div>
    </figure>
  );
};

export default Card;
