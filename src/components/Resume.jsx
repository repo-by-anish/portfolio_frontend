import "./Resume.css"
import { HiOutlineAcademicCap } from "react-icons/hi"
import { PiCertificateLight } from "react-icons/pi"

const Resume = ({ animStyle }) => {
    return (
        <div className={animStyle + " resume__body"}>
            <div className="res__body__education">
                <div style={{ padding: "1rem 3rem" }} className="gen__head_comp">
                    <h2>Resume</h2>
                    <span></span>
                </div>
                <div className="res__edu">
                    <div className="r_e_left">
                        <div className='r_e_l_title'>
                            <HiOutlineAcademicCap color="#F55912" size={"1.6rem"} />
                            <h3 style={{lineHeight:"24px"}} className="res_edu_title">Education</h3>
                        </div>
                        <div className="edication">
                            <p className="session">2020-Present</p>
                            <p className="school_name">University Institute of Technology,Burdwan.</p>
                            <p className="Degree">Bachelor of Engineering(IT)</p>
                        </div>
                        <div className="edication">
                            <p className="session">2018-2020</p>
                            <p className="school_name">R K College Madhubani, Bihar</p>
                            <p className="Degree">Intermediate(Science PCM)</p>
                        </div>
                    </div>
                    <div className="r_e_right">
                        <div className='r_e_l_title'>
                            <PiCertificateLight color="#F55912" size={"1.6rem"} />
                            <h3 style={{lineHeight:"24px"}}  className="res_edu_title">Courses & Certifications</h3>
                        </div>
                        <div className="edication">
                            <p className="session">02/2022-05/2022</p>
                            <p className="school_name">Udemy</p>
                            <p className="Degree">Complete Web-Development Bootcamp <span>by Angela Yu</span></p>
                        </div>
                        <div className="edication">
                            <p className="session">8/2023-Present</p>
                            <p className="school_name">Coursera</p>
                            <p className="Degree">Machine Learning by <span>by Andrew Ng</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skills">
                <div className="soft__skill">
                    <h3 style={{ marginBottom: "0.5rem" }} className="res_edu_title">Work Skills</h3>
                    <div className="skills-container">
                        <span>Web Development(MERN)</span>
                        <span>ReduxJs</span>
                        <span>MySQL</span>
                        <span>JavaScript</span>
                        <span>Java</span>
                        <span>Data Structure & Algorithm</span>
                        <span>UI/UX Design</span>
                        <span>Git</span>
                    </div>
                </div>
                <div className="work__skill">
                    <h3 style={{ marginBottom: "0.5rem" }} className="res_edu_title">Soft Skills</h3>
                    <div className="skills-container">
                        <span>Time Management</span>
                        <span>Flexibility</span>
                        <span>Research</span>
                        <span>Writing</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume