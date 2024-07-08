import React from 'react'
import { MdArrowOutward } from "react-icons/md";
const Experience = () => {
  return (
    <section className='experience2'>
      <h2>My Experiences</h2>

      <div className="container experience__container">
        <section className='experience__card'>

          <a className='experience__card__link' target='_blank' href="https://darp-distribution-demo.netlify.app/">
            DARP-Distribution <MdArrowOutward />
          </a>
          <p className='experience__card__role'> Web Developer / Website Administrator</p>

          <p className='experience__card__time'>2023 - Present</p>

          <p className='experience__card__desc'>
            Manage website creation, product showcasing, and updates.
            Utilize front-end technologies to enhance website functionality and user experience.
          </p>

          <ul className='experience__card__stack'>
            <li>Html</li>
            <li>Css</li>
            <li>JavaScript</li>
            <li>React.JS</li>
            <li>React Router </li>
          </ul>
        </section>

        <section className='experience__card'>

          <a className='experience__card__link' target='_blank' href="#portfolio">
            Freelance Web Developer <MdArrowOutward />
          </a>

          <p className='experience__card__time'>2023 - Present</p>

          <p className='experience__card__desc'>
            Develop and maintain landing pages using modern web technologies.
            Ensure responsive design and cross-browser compatibility.
          </p>

          <ul className='experience__card__stack'>
            <li>Html</li>
            <li>Css</li>
            <li>JavaScript</li>
            <li>React.JS</li>
          </ul>
        </section>


      </div>
    </section>
  )
}

export default Experience
