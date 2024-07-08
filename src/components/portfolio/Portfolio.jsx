import { useState } from "react";
import { data } from "../../data";

function Portfolio() {

  const [number, setNumber] = useState(3)

  function handleClick(e) {
    const btnName = e.currentTarget.textContent
    if (btnName === 'Less Projects') {
      setNumber(3)
    } else {
      setNumber(data.length)
    }
  }

  console.log(number);

  return (
    <section id="portfolio" className="portfolio">
      <h5>My Best Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.slice(0, number).map((item) => {
          const { id, title, github, demo, img, info, stack } = item;

          return (
            <article key={id} className=" portfolio__container__items">
              <div className="portfolio__container__items__image">
                <img src={img} alt="Todo-App" />
              </div>
              <h3>{title}</h3>
              <p> {stack}</p>
              <p>{info}</p>
              <div className="portfolio__container__items__cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn--primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>

            </article>
          );
        })}
      </div>
      <button onClick={handleClick} className="btn btn--primary portfolio__moreBtn">{number > 3 ? "Less Projects" : "More Projects"}</button>
    </section>
  );
}

export default Portfolio;


