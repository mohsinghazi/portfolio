import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FcLinux } from "react-icons/fc";
const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-5xl pt-20 px-5 lg:px-0">
      <div className="flex flex-col justify-center items-center">
        <h5 className="text-lg lg:text-xl text-BlueJeans">
          Main area of my experties
        </h5>
        <h1 className="text-3xl lg:text-5xl font-semibold">My Skills</h1>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-5 lg:gap-x-16 gap-y-10 py-10 ">
          <figure className="p-4 nm-flat-primary flex flex-col justify-center items-center text-[#FC5424] hover:text-primary hover:bg-[#FC5424] rounded-lg transition-colors duration-150 delay-150 cursor-pointer space-y-3">
            <SiHtml5 size={96} />
            <h1 className="font-semibold">HTML5</h1>
          </figure>
          <figure className="p-4 nm-flat-primary flex flex-col justify-center items-center text-[#2494F4]  hover:text-primary hover:bg-[#2494F4] rounded-lg transition-colors duration-150 delay-150 cursor-pointer space-y-3">
            <SiCss3 size={96} />
            <h1 className="font-semibold">CSS3</h1>
          </figure>
          <figure className="p-3 nm-flat-primary flex flex-col justify-center items-center text-[#FBDB04]  group hover:bg-[#FBDB04] rounded-lg transition-colors duration-150 delay-150 cursor-pointer space-y-3">
            <div className="bg-black">
              <SiJavascript size={96} />
            </div>
            <h1 className="font-semibold text-black ">JavaScript</h1>
          </figure>
          <figure className="p-3 nm-flat-primary flex flex-col justify-center items-center text-[#3BBCFB]  hover:text-primary hover:bg-[#3BBCFB] rounded-lg transition-colors duration-150 delay-150 cursor-pointer space-y-3">
            <SiTailwindcss size={96} />
            <h1 className="font-semibold">Tailwind</h1>
          </figure>
          <figure className="p-3 nm-flat-primary flex flex-col justify-center items-center text-[#64DCFC]  hover:text-primary hover:bg-[#64DCFC] rounded-lg transition-colors duration-150 delay-150 cursor-pointer space-y-3">
            <SiReact size={96} />
            <h1 className="font-semibold">React.Js</h1>
          </figure>
          <figure className="p-3 nm-flat-primary flex flex-col justify-center items-center text-[#734ABC]  hover:text-primary hover:bg-[#734ABC] rounded-lg transition-colors duration-150 delay-150 space-y-3">
            <SiRedux size={96} />
            <h1 className="font-semibold">Redux</h1>
          </figure>
          <figure className="p-3 nm-flat-primary flex flex-col justify-center items-center text-[#64A358]  hover:text-primary hover:bg-[#64A358] rounded-lg transition-colors duration-150 delay-150 space-y-3">
            <SiNodedotjs size={96} />
            <h1 className="font-semibold">Node.Js</h1>
          </figure>
          <figure className="p-3 nm-flat-primary flex flex-col justify-center items-center  hover:text-primary hover:bg-gray-700 rounded-lg transition-colors duration-150 delay-150 space-y-3">
            <SiExpress size={96} />
            <h1 className="font-semibold">Express.Js</h1>
          </figure>
          <figure className="p-3 nm-flat-primary flex flex-col justify-center items-center text-[#4AA148]  hover:text-primary hover:bg-[#4AA148] rounded-lg transition-colors duration-150 delay-150 space-y-3">
            <SiMongodb size={96} />
            <h1 className="font-semibold">MongoDB</h1>
          </figure>
          <figure className="p-3 nm-flat-primary flex flex-col justify-center items-center text-[#F45434]  hover:text-primary hover:bg-[#F45434] rounded-lg transition-colors duration-150 delay-150 space-y-3">
            <SiGit size={96} />
            <h1 className="font-semibold">Git</h1>
          </figure>
          <figure className="p-3 nm-flat-primary flex flex-col justify-center items-center  hover:text-primary hover:bg-black rounded-lg transition-colors duration-150 delay-150 space-y-3">
            <SiGithub size={96} />
            <h1 className="font-semibold">GitHub</h1>
          </figure>
          <figure className="p-3 nm-flat-primary flex flex-col justify-center items-center  hover:text-primary hover:bg-black rounded-lg transition-colors duration-150 delay-150 space-y-3">
            <FcLinux size={96} />
            <h1 className="font-semibold">Linux</h1>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Skills;
