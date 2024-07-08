import HeaderBtn from "./headerBtn";
import heroImg from "../../assets/Me.jpg";
import HeaderSocials from "./headerSocials";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Wilems Rospide</h1>
        <h5 className="text-light">Front-End Web Developer</h5>
        <HeaderBtn />
        <HeaderSocials />
        <div className="header__image">
          <img src={heroImg} alt="Wilems Rospide" />
        </div>
        <a href="#contact" className="header__scrollDown">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
