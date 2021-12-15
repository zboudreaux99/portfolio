import "./About.scss";
import { useEffect, useState } from "react";
import SkillList from "../skillList/SkillList";
import { frontendSkills, backendSkills } from "../../data";

const About = () => {
    const [active, setActive] = useState("front");
    const [data, setData] = useState([]);
    const skillList = [
        {id: "front", title: "Front End"},
        {id: "back", title: "Back End"}
    ];

    useEffect(() => {
        switch(active) {
            case "front": 
                setData(frontendSkills);
                break;
            case "back":
                setData(backendSkills);
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
                        I am a recent <a href="https://www.springboard.com" target="_blank">bootcamp</a> graduate looking for my first opportunity 
                        in the tech industry. Before jumping into software engineering, I worked in the pharmaceutical industry and also did 
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

                <div>
                    {data.map(d => {
                        switch(d.level){
                            case "advanced":
                                return (
                                    <div className="skills-fill-container">
                                        <span className="skills-fill skills-fill-advanced">
                                            <p> {d.title} </p>
                                        </span>
                                    </div>
                                );
                            case "intermediate":
                                return (
                                    <div className="skills-fill-container">
                                        <span className="skills-fill skills-fill-intermediate">
                                            <p> {d.title} </p>
                                        </span>
                                    </div>
                                );
                            case "novice":
                                return (
                                    <div className="skills-fill-container">
                                        <span className="skills-fill skills-fill-novice">
                                            <p> {d.title} </p>
                                        </span>
                                    </div>
                                );
                            default:
                                return null;
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