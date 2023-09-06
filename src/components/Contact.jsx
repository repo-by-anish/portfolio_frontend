import { useState } from "react"
import "./Contact.css"
import { AiOutlineSend } from "react-icons/ai"
import { BiSolidPhoneCall } from "react-icons/bi"
import { HiOutlineMail } from "react-icons/hi"
import axios from "axios"
const BASE_URI = "http://localhost:3500/message"
const Contact = ({ animStyle }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name,
            email,
            message
        }
        try {
            const response = await axios.post(BASE_URI, data)
            if (response.status === 200) {
                alert("message sent successfully");
            }else{
                alert("sommething went wrong");
            }
            setName("")
            setEmail("")
            setMessage("")
        } catch (error) {
            console.error(error)
            alert("Invalid Data");
        }
    }


    return (
        <div className={animStyle + " conatct__body"}>
            <div className="contact__top">
                <div style={{ backgroundColor: "#FFEED9" }} className="contact__item">
                    <p className="c_heading"><BiSolidPhoneCall color="#EF330B" size={"1.6rem"} />Email:</p>
                    <p className="c_content">contact.anish7@gmail.com</p>
                    <p className="c_content">it.20203061@gmail.com</p>
                </div>
                <div style={{ backgroundColor: "#F2F7FC" }} className="contact__item">
                    <p className="c_heading"><HiOutlineMail color="#EF330B" size={"1.6rem"} />Phone:</p>
                    <p className="c_content">+91-62065 73987</p>
                    <p className="c_content">+91-62065 73987</p>
                </div>
            </div>
            <div className="contact__bottom">
                <div action="" className="contact__form">
                    <div className="c__b__left">
                        <h1>Contact Us</h1>
                        <div className="address">
                            <h2>Address</h2>
                            <p>Golapbag</p>
                            <p>Bardhaman, West Bengal 713104</p>
                            <p>India</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="c__b__right">
                        <p className="contact_message">I am always open to discussing new projects, opportunities in tech world,
                            partnerships and more so mentorship. </p>
                        <div className="input_item">
                            <input onChange={e => setName(e.target.value)} required type="text" value={name} id="name" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input_item">
                            <input onChange={e => setEmail(e.target.value)} required type="text" value={email} id="email" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input_item">
                            <textarea onChange={e => setMessage(e.target.value)} required name="" value={message} id="message"></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                        <button>Send<AiOutlineSend style={{ marginLeft: "5px" }} /></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact