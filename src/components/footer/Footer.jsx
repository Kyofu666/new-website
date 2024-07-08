import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <a href="#" className="footer__logo">
        Rospide Wilems
      </a>
      <ul className="footer__permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Kyofu666" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/wilems-rospide-08a3ba23b/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://x.com/wily_coding?s=21&t=5s4gt0w4FY1JzRhxbByerA"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitterX />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Wilems Rospide. All right reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
