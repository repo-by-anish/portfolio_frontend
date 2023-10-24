import { Link } from "react-router-dom";
import "./Work.css"

// import {AiOutlineDown} from "react-icons/ai"
// import { useState } from "react";

const Work = ({ animStyle }) => {
    // const [descItem,setDescItem]=useState(-1);
    const courseItems = [
        {
            c_name: "Course Management System",
            c_desc: "This platform manages courses with roles like Students, Instructors, Principals, and Admins. Users use User-ID and Password for authentication, with role-specific features.",
            c_img: "images/project/crs.png",
            c_link: "https://coursemanage.onrender.com/"
        },
        {
            c_name: "Nodel Public School Web applicatio",
            c_desc: "The Nodal Public School website provides tailored experiences for Students, Teachers and Principals. It ensures security through User-ID and Password authentication while delivering role-specific functionalities.",
            c_img: "images/project/nps.png",
            c_link: "https://mytech.onrender.com/"
        },
        {
            c_name: "FlipKart Clone",
            c_desc: "The Flipkart clone frontend project replicates the user interface of Flipkart, providing an authentic shopping experience with a similar design and usability",
            c_img: "images/project/fc.png",
            c_link: "https://flipkart-clone2.netlify.app/"
        },
        {
            c_name: "Dashboard Design",
            c_desc: "NA",
            c_img: "images/project/dash.png",
            c_link: "https://super-cannoli-8f670f.netlify.app/"
        },
        {
            c_name: "Resturant Profile (FLAVORSOME DELIGHTS) ",
            c_desc: "NA",
            c_img: "images/project/restr.png",
            c_link: "https://admirable-semolina-cd106b.netlify.app/"
        },
        {
            c_name: "Online Quiz Creator",
            c_desc: "NA",
            c_img: "images/project/quiz.png",
            c_link: "https://quizcreate.netlify.app/"
        },
        {
            c_name: "Drawing App Using Canvas",
            c_desc: "NA",
            c_img: "images/project/draw.png",
            c_link: "https://drawing-app-using-canvas.netlify.app/"
        },
    ];

    // const handleDrop=(dropItem)=>{
    //     setDescItem(dropItem)
    // }

    return (
        <div className={animStyle + " work__body"}>
            <div style={{ padding: "1rem 0rem 1rem 3rem" }} className="gen__head_comp">
                <h2>Projects</h2>
                <span></span>
            </div>
            <div className="project__container">
                {
                    courseItems.map((item, index) => {
                        return (
                            <div key={index} className="project_item">
                                <Link to={item.c_link} target="_blank">
                                    <img src={item.c_img} alt="" />
                                </Link>
                                <div className="p__desc">
                                    <p className="app__name">{item.c_name+" "}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Work