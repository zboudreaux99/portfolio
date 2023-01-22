import "./About.scss";
import { useEffect, useState } from "react";
import SkillList from "../skillList/SkillList";
import { frontendSkills, backendSkills, devopSkills } from "../../data";

const About = () => {
    const [active, setActive] = useState("front");
    const [data, setData] = useState([]);
    const skillList = [
        {id: "front", title: "Front End"},
        {id: "back", title: "Back End"},
        {id: "devops", title: "DevOps"}
    ];

    useEffect(() => {
        switch(active) {
            case "front": 
                setData(frontendSkills);
                break;
            case "back":
                setData(backendSkills);
                break;
            case "devops":
                setData(devopSkills);
                break;
            default:
                setData(frontendSkills);
        }
    }, [active])

    return (
        <div className="About" id="about">
            <div className="left">
                <div className="aboutContainer">
                    <h3> Hello, my name is Zach Boudreaux </h3>
                    <p>
                        I like to build full stack web applications. 
                        I am a <a href="https://www.springboard.com" target="_blank">bootcamp</a> graduate, and am currently working on my Computer Science degree. 
                        I have a year of experience with Full Stack Web Development and have 6 months DevOps experience deploying full stack applications. 
                        Before jumping into software engineering, I worked in the pharmaceutical industry and also did 
                        freelance photography. <a href="#contact">Contact me</a> if you want to connect!
                    </p>
                </div>
            </div>

            <div className="right">
                <div className="skills-container">
                <div className="vertical-center">
                <h3> Skills </h3>

                <ul>
                    {skillList.map(i => (
                        <SkillList title={i.title} id={i.id} active={active === i.id} setActive={setActive}/>
                    ))}
                </ul>

                <div className="skill-icons">
                    {data.map(d => {
                        if (d.title == "Flask" || d.title == "Express") {
                            return <i class={d.img_url}></i>
                        } else {
                            return <img alt={d.title} width="75px" src={d.img_url} />
                        }
                        
                    })}
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About;