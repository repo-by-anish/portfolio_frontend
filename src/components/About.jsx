import './About.css'
import { BsCodeSlash } from "react-icons/bs"
import { FaNode, FaChalkboardTeacher } from "react-icons/fa"
const About = ({ animStyle }) => {
  return (
    <>
      <div className={animStyle + " about__body"}>
        <div className="gen__head_comp">
          <h2>ABOUT ME</h2>
          <span></span>
        </div>
        <p className='about__text'>
          I am actively seeking a novice position that will enable me to further enrich and explore the technical knowledge I have gained during my three-year
          tenure at Burdwan University. With a BE degree from the University Institute of Technology college, I have also acquired adeptness in Web
          Development through supplementary courses.
        </p>
        <h3 style={{ lineHeight: "20px" }} className='gen__title'>
          What I do!
        </h3>
      </div>
      <div className={animStyle + " work__catelog"}>
        <div className="catelog__item">
          <div className='cat__title'>
            <BsCodeSlash color='#E80505' size={"24px"} />
            <h4>Web Development</h4>
          </div>
          <p className="cat_description">
            As a developer, I find myself most
            captivated by the power and flexibility of
            JavaScript. I'm always eager to dive into new
            projects that leverage React and
            discover innovative ways to create fast,
            scalable, and user-friendly applications.
          </p>
        </div>
        <div className="catelog__item">
          <div className='cat__title'>
            <FaNode color='#3c873a' size={"30px"} />
            <h4>Backend Development</h4>
          </div>
          <p className="cat_description">
            Proficient Node.js Backend Developer with expertise in crafting robust web solutions, efficient APIs, and effective database management. Committed to maintaining clean code, collaborating effectively, and delivering high-performance systems.
          </p>
        </div>
        <div className="catelog__item">
          <div className='cat__title'>
            <img style={{ width: "24px", height: "24px" }} src="logos/UX.svg" alt="" />
            <h4>UI/UX Designing</h4>
          </div>
          <p className="cat_description">
            Crafting visually appealing and intuitive user
            interfaces that offer a delightful user
            experience is something I'm truly fanatic
            about.
          </p>
        </div>
        <div className="catelog__item">
          <div className='cat__title'>
            <FaChalkboardTeacher color='#E80505' size={"24px"} />
            <h4>Mentorship</h4>
          </div>
          <p className="cat_description">
            I have also found great joy in sharing my
            knowledge with others. Being a technical
            mentor allows me to give back to the
            community that has supported me
            throughout my career.
          </p>
        </div>
      </div>
    </>

  )
}

export default About