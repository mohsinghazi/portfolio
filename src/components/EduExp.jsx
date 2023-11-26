import { GrCertificate } from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineDesktopMac } from "react-icons/md";

const EduExp = () => {
  return (
    <section
      id="edu"
      className="mx-auto px-5 lg:px-0 lg:max-w-6xl xl:max-w-7xl pt-20"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl lg:text-5xl font-semibold pb-10">
          Education and expriance
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
          <figure className="nm-concave-primary  px-5 py-8 group rounded-lg">
            <FaGraduationCap size={72} />
            <h1 className="text-2xl font-semibold text-Gray">
              Bachelor of Technology
            </h1>
            <p className="pt-2 text-lg">
              I earned a bachelor's degree in Electronics and Communication
              Engineering.
            </p>
          </figure>
          <figure className="nm-concave-primary  px-5 py-8 rounded-lg">
            <MdOutlineDesktopMac size={72} />
            <h1 className="text-2xl font-semibold text-Gray">
              System Engineer
            </h1>
            <p className="pt-2 text-lg">
              1+ year expriance in react development and having hands-on
              expriance in express.js
            </p>
          </figure>
          <figure className="nm-concave-primary px-5 py-8 rounded-lg">
            <GrCertificate size={72} />
            <h1 className="text-2xl font-semibold text-Gray ">
              React and AZ-900
            </h1>
            <p className="pt-2 text-lg">
              I am certified in Azure Fundamentals and Front-End Web Development
              with react
            </p>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default EduExp;
