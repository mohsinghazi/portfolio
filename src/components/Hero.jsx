import Typewriter from "typewriter-effect";
import FindMe from "./FindMe";
import banner from "../assets/images/banner2.png";
import resume from "../assets/resume/mohd_mohsin_resume.pdf";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mx-auto lg:max-w-6xl xl:max-w-7xl  text-base lg:text-lg  flex flex-col justify-center"
    >
      <div className="flex flex-col lg:flex-row  lg:justify-between items-start gap-10">
        <div className="text-Gray lg:space-y-1  max-w-md px-5 lg:px-0  lg:max-w-3xl pt-24">
          <h4>WELCOME TO MY WORLD</h4>
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-semibold text-black py-2">
            <span>Hi, I'm </span>
            <span className="text-BlueJeans">Mohsin Ghazi</span>
          </h1>
          <h2 className="flex space-x-2 text-2xl lg:text-4xl xl:text-5xl text-black font-semibold">
            <span className="text-BlueJeans">a </span>
            <Typewriter
              options={{
                strings: ["Full-Stack Web Developer.", "Software Engineer."],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="hidden lg:block py-5 lg:py-7 xl:py-10">
            I'm usually curious and I really like to find out the "Why" of
            things. I'm able to build functional web applications and easily
            convert UI designs into pixel perfect responsive web pages. I learn
            fast and can adapt to a new technology quickly.
          </p>
          <button className="xl:px-6 xl:py-3 px-5 py-2 hidden lg:block nm-flat-primary uppercase text-BlueJeans font-semibold rounded-lg hover:text-white hover:bg-BlueJeans transition-all duration-150 delay-150 ">
            <a
              href={resume}
              target="_blank"
              download={"MOHD_MOHSIN_RESUME.pdf"}
            >
              Download Resume
            </a>
          </button>
        </div>
        <div className="rounded-lg  nm-concave-primary w-fit mx-5 lg:mx-0 lg:mt-28 xl:mt-32">
          <img src={banner} alt="banner" className="" />
        </div>
      </div>
      <div className="pt-10 lg:pt-20 mx-5 lg:mx-0">
        <FindMe />
      </div>
    </section>
  );
};

export default Hero;
