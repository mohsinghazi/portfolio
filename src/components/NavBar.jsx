import { Link } from "react-scroll";
import { BsArrowDownShort } from "react-icons/bs";
import Icon from "../assets/images/icon.png";
import resume from "../assets/resume/mohd_mohsin_resume.pdf";

const NavBar = () => {
  return (
    <nav className="fixed w-full nm-flat-primary-xs z-50">
      <div className="flex justify-between items-center py-2 px-6 uppercase text-Gray">
        <div className="flex justify-center items-center gap-2">
          <img
            className="h-12 rounded-full nm-concave-white-sm p-1"
            src={Icon}
            alt="I"
          />
          <span className="text-xl font-bold font-mono  text-black uppercase">
            mohd
          </span>
        </div>
        <div className="hidden lg:flex gap-10 font-semibold text-black cursor-pointer pr-5 text-sm">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="border-b-2 border-BlueJeans"
          >
            Home
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="border-b-2 border-BlueJeans"
          >
            skills
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="border-b-2 border-BlueJeans"
          >
            portfolio
          </Link>
          <Link
            to="edu"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="border-b-2 border-BlueJeans"
          >
            education
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="border-b-2 border-BlueJeans"
          >
            contact
          </Link>
        </div>

        <a
          className="nm-flat-primary px-3 py-1.5 rounded-md lg:hidden uppercase text-BlueJeans hover:text-white hover:bg-BlueJeans flex items-center text-sm font-semibold"
          href={resume}
          target="_blank"
          download={"MOHD_MOHSIN_RESUME.pdf"}
        >
          Resume <BsArrowDownShort size={18} className="font-bold" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
