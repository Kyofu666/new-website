import CV from "../../assets/Wilems-Rospide.pdf";

function HeaderBtn() {
  return (
    <div className="header__cta">
      <a href={CV} download className="btn">
        Resume
      </a>
      <a href="#contact" className=" btn btn--primary">
        Hire Me
      </a>
    </div>
  );
}

export default HeaderBtn;
