import { BiLogoFacebook, BiLogoLinkedin, BiLogoGithub, BiLogoTwitter, BiLogoGmail, BiDownload, BiSolidContact } from "react-icons/bi";
import { MdPhoneIphone, MdWorkOutline } from "react-icons/md"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { AiOutlineHome } from "react-icons/ai"
import { CgFileDocument } from "react-icons/cg"
import About from "./About";
import Resume from "./Resume";
import Work from "./Work";
import { useState } from "react";
import Contact from "./Contact";
const MainBody = () => {
    const [navigate, setNavigate] = useState(0);
    const [animStyle, setAnimStyle] = useState("");
    var viewCompo = <About />
    const handleNavigate = (navigateTo) => {
        if (navigate > navigateTo) {
            setAnimStyle("right_click");
        } else {
            setAnimStyle("left_click");
        }
        setNavigate(navigateTo);
    }
    switch (navigate) {
        case 0:
            viewCompo = <About animStyle={animStyle} />
            break;

        case 1:
            viewCompo = <Resume animStyle={animStyle} />
            break;

        case 2:
            viewCompo = <Work animStyle={animStyle} />
            break;

        case 3:
            viewCompo = <Contact animStyle={animStyle} />
            break;
        default:
            console.log("Error");
    }

    const handleSocialClick = (link) => {
        window.location.href = link;
    }

    const handleSocialClickAll = (e) => {
        console.log(e.target.classList);
        if (e.target.classList.contains('click_face')) {
            handleSocialClick("https://www.facebook.com/profile.php?id=100037146984378");
        }
        if (e.target.classList.contains('click_git')) {
            handleSocialClick("https://github.com/repo-by-anish");
        }
        if (e.target.classList.contains('click_link')) {
            handleSocialClick("https://www.linkedin.com/in/profile-anishkumar/");
        }
        if (e.target.classList.contains('click_twi')) {
            handleSocialClick("https://twitter.com/ANISHKU28569474");
        }
    }


    const handleDownloadClick = () => {
        const googleDriveLink = 'https://drive.google.com/file/d/1KyqZ3B0vh6KuNX8Noe_khbHikp7IANfq/view?usp=drive_link';
        const anchor = document.createElement('a');
        anchor.href = googleDriveLink;
        anchor.download = 'Anish_resume.pdf';
        anchor.click();
      };

    return (
        <main className="m__hero">
            <div className="m__hero__left">
                <img className="m__l_shift_up smart__animate" src="images/dp.png" alt="" />
                <div className="m__l_shift_up">
                    <p className="m__l_name">Anish Kumar</p>
                    <p className="m__l_prof">IT Engineer</p>
                </div>
                <div onClick={handleSocialClickAll} className="m__l_logo ">
                    <div className="logo_item click_face">
                        <BiLogoFacebook size={"1.6rem"} color="#1877F2" className="click_face" />
                    </div>
                    <div className="logo_item click_git">
                        <BiLogoGithub size={"1.4rem"} color="black" className="click_git" />
                    </div>
                    <div className="logo_item click_link">
                        <BiLogoLinkedin size={"1.6rem"} color="#0077B5" className="click_link" />
                    </div>
                    <div className="logo_item click_twi">
                        <BiLogoTwitter size={"1.6rem"} color="#1DA1F2" className="click_twi" />
                    </div>
                </div>
                <div className="m__l__contact">
                    <div className="cont__item bb">
                        <div className="c_logo_item">
                            <MdPhoneIphone color="#F55711" size={"1rem"} />
                        </div>
                        <div className="c__detail">
                            <span className="c__title">Phone</span>
                            <span>+91-62065 73987</span>
                        </div>
                    </div>
                    <div className="cont__item bb">
                        <div className="c_logo_item">
                            <BiLogoGmail color="#FF9C1B" size={"1rem"} />
                        </div>
                        <div className="c__detail">
                            <span className="c__title">Title</span>
                            <span>contact.anish7@gmail.com</span>
                        </div>
                    </div>
                    <div className="cont__item bb">
                        <div className="c_logo_item">
                            <HiOutlineLocationMarker color="E80505" size={"1rem"} />
                        </div>
                        <div className="c__detail">
                            <span className="c__title">Location</span>
                            <span>Burdwan, West Bengal</span>
                        </div>
                    </div>
                    <div className="cont__item">
                        <div className="c_logo_item">
                            <button onClick={handleDownloadClick} className="button__gen"><BiDownload onClick={handleDownloadClick} style={{ paddingRight: "5px" }} color="#fff" size={"1rem"} /> Download Resume</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m__hero__right">
                <div className="m__r__navigation smart__animate">
                    <div onClick={() => handleNavigate(0)} className={navigate === 0 ? "nav__item nav_itm_sld" : "nav__item"}>
                        <AiOutlineHome size={"1.3rem"} />
                        <span>Home</span>
                    </div>
                    <div onClick={() => handleNavigate(1)} className={navigate === 1 ? "nav__item nav_itm_sld" : "nav__item"}>
                        <CgFileDocument size={"1.3rem"} />
                        <span>Resume</span>
                    </div>
                    <div onClick={() => handleNavigate(2)} className={navigate === 2 ? "nav__item nav_itm_sld" : "nav__item"}>
                        <MdWorkOutline size={"1.3rem"} />
                        <span>Projects</span>
                    </div>
                    <div onClick={() => handleNavigate(3)} className={navigate === 3 ? "nav__item nav_itm_sld" : "nav__item"}>
                        <BiSolidContact size={"1.3rem"} />
                        <span>Contact</span>
                    </div>
                </div>
                <div className="m__r__viewer">
                    {viewCompo}
                </div>
            </div>
        </main>
    )
}

export default MainBody