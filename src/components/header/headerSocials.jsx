
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

function headerSocials() {
  return (
    <div className="header__socials">
      <a href="https://github.com/Kyofu666" target="_blank">
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/wilems-rospide-08a3ba23b/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://x.com/wily_coding?s=21&t=5s4gt0w4FY1JzRhxbByerA"
        target="_blank"
      >
        <BsTwitterX />
      </a>
    </div>
  );
}

export default headerSocials;
