import Card from "./Card";
const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      img: "image/Fit-bit.png",
      name: "beFit",
      desc: "It has hundreds of built-in exercise instructions.",
      url: "https://be-fit-opal.vercel.app/",
      git: "https://github.com/MDMohsinGhazi/BeFit",
    },
    {
      id: 2,
      img: "image/hotel-booking.png",
      name: "Tour",
      desc: "It is a handy travelling tool that allows you to book a room in many hotels.",
      url: "https://hotel-booking-eight.vercel.app/",
      git: "https://github.com/MDMohsinGhazi/hotel-booking",
    },
    {
      id: 3,
      img: "image/news.png",
      name: "Flutter News",
      desc: "Different types of newspapers is available from all around the world.",
      url: "https://wondrous-wisp-dcb5ec.netlify.app/",
      git: "https://github.com/MDMohsinGhazi/News-App",
    },
  ];
  return (
    <section
      id="portfolio"
      className="mx-auto px-5 lg:px-0 lg:max-w-6xl xl:max-w-7xl pt-20"
    >
      <div className="flex flex-col justify-center items-center">
        <h5 className="text-lg lg:text-xl text-BlueJeans">
          Please have a look at my portfolio
        </h5>
        <h1 className="capitalize text-3xl lg:text-5xl font-semibold">
          my portfolio
        </h1>
      </div>
      <div className="grid lg:grid-flow-col lg:grid-col-3  gap-5 py-10">
        {portfolio.map((project, index) => (
          <Card project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
