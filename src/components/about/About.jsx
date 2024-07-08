import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import aboutImg from "../../assets/Me2.jpg";

function About() {
  return (
    <section id="about" className="about">
      <h5> Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={aboutImg} alt="wilems image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__content__cards">
            <article className="about__content__cards__card">
              <FaAward className="about__content__cards__card__icon" />
              <h5>Experience</h5>
              <small>1+ year working</small>
            </article>

            <article className="about__content__cards__card">
              <VscFolderLibrary className="about__content__cards__card__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
            Passionate and enthusiastic junior front-end developer with a deep love for coding. Fascinated by the beauty and control
            coding offers over creating dynamic and interactive web experiences. Eager to contribute my skills in HTML, CSS, and
            JavaScript to a collaborative team, continuously learn, and grow in the field of web development.
          </p>
          <a href="#contact" className="btn btn--primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
