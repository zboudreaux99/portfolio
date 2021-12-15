import "./Contact.scss";
import { FaGithub as Git } from "react-icons/fa";
import { FaLinkedin as LinkedIn } from "react-icons/fa";
import { FaStackOverflow as Stack } from "react-icons/fa";
import { FaAt as At } from "react-icons/fa"
import { FaFile as Resume } from "react-icons/fa";
import resume from "../../assets/resume.pdf";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const INITIAL_STATE = {
        name: "",
        email: "",
        message: ""
    }

    const [message, setMessage] = useState(false);
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));   
    }

    const handleSubmit = e => {
        e.preventDefault();
        setFormData(INITIAL_STATE);
        setMessage(true);

        // emailjs.sendForm("service_dyx22x1", "template_x5tytj9", e.target, "user_DyhQ8407M4T7Pu4WYzO4w").then(res => {
        //         console.log('SUCCESS!', res.status, res.text);
        //     }, e => {
        //         console.log("FAILED", e);
        //     }
        // );
    }

    return (
        <div className="Contact" id="contact">
            <div className="left">
                <div className="links-container">
                    <div>
                        <Git className="icon git" />
                        <a href="https://github.com/zacharyrb99" target="_blank"> zacharyrb99 </a>
                    </div>

                    <div>
                        <LinkedIn className="icon linkedin" />
                        <a href="linkedin.com/in/zach-boudreaux/" target="_blank"> zach-boudreaux </a>
                    </div>

                    <div>
                        <At className="icon at" />
                        <a href="mailto:zach.boudreaux999@gmail.com" target="_blank"> zach.boudreaux999@gmail.com </a>
                    </div>

                    <div>
                        <Stack className="icon stack" />
                        <a href="https://stackoverflow.com/users/15892002/zacharyrb99" target="_blank"> zacharyrb99 </a>
                    </div>

                    <div>
                        <Resume className="icon resume"/>
                        <a href={resume} target="_blank"> Resume </a>
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="form-container">
                    <h2> Say Hello! </h2>

                    <form onSubmit={handleSubmit}>
                        <input className="form-control" type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
                        <input className="form-control" type="text" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                        <textarea className="form-control" placeholder="Message" rows="4" name="message" value={formData.message} onChange={handleChange} required></textarea>
                        <button className="form-submit"> Send </button>

                        {message && 
                            <span> 
                                Thanks, I will reply soon! <button className="message-button" onClick={() => setMessage(false)}> X </button> 
                            </span>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;