import "./Projects.scss";
import ProjectList from "../projectList/ProjectList";
import { featuredProjects, reactProjects, pythonProjects } from "../../data";
import { useEffect, useState } from "react";

const Projects = () => {
    const [active, setActive] = useState("react");
    const [data, setData] = useState([]);
    const projectList = [
        // {id: "featured", title: "Featured"},
        {id: "react", title: "ReactJS | NodeJS"},
        {id: "python", title: "Python | Flask"}
    ];

    useEffect(() => {
        switch(active) {
            // case "featured": 
            //     setData(featuredProjects);
            //     break;
            case "react":
                setData(reactProjects);
                break;
            case "python":
                setData(pythonProjects);
                break;
            default:
                setData(reactProjects);
        }
    }, [active])

    return (
        <div className="Projects" id="projects">
            <h1> Projects </h1>

            <ul>
                {projectList.map(i => (
                    <ProjectList title={i.title} id={i.id} active={active === i.id} setActive={setActive} />
                ))}
            </ul>

            <div className="container">
                {data.map(d => (
                    <a href={d.url} target="_blank">
                        <div className="item">
                            <img src={d.img} alt="App Screenshot"/>
                            <h3> {d.title} </h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Projects;