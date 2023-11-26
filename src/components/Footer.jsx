import { Link } from "react-scroll";
import { BsArrowUpCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="flex justify-center lg:block  py-5 px-10 bg-Gray text-white text-xl relative">
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={0}
        duration={2000}
        className="absolute right-1/2 -top-2 text-BlueJeans bg-white rounded-full animate-bounce"
      >
        <BsArrowUpCircleFill size={36} />
      </Link>
      <h1>@ 2022 Mohsin Ghazi</h1>
    </section>
  );
};

export default Footer;
