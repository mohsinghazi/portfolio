import {
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiFillGithub,
} from "react-icons/ai";

const FindMe = () => {
  return (
    <div className="text-black">
      <h1 className="uppercase">find with me</h1>
      <div className="flex items-center gap-5 py-5 ">
        <a
          className="p-2 nm-flat-primary rounded-lg hover:bg-BlueJeans hover:text-white transition-all duration-200 delay-200"
          href="https://www.linkedin.com/in/mohd-mohsin-ghazi"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin size={32} />
        </a>
        <a
          className="p-2 nm-flat-primary rounded-lg hover:bg-BlueJeans hover:text-white transition-all duration-150 delay-150"
          href="https://www.instagram.com/md_mohsin_ghazi/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram size={32} />
        </a>
        <a
          className="p-2 nm-flat-primary rounded-lg hover:bg-BlueJeans hover:text-white transition-all duration-150 delay-150"
          href="https://twitter.com/MDMohsinGhazi1"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineTwitter size={32} />
        </a>
        <a
          className="p-2 nm-flat-primary rounded-lg hover:bg-BlueJeans hover:text-white transition-all duration-150 delay-150 "
          href="https://github.com/MDMohsinGhazi"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={32} />
        </a>
      </div>
    </div>
  );
};

export default FindMe;
