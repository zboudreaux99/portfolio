import "./ProjectList.scss";

const ProjectList = ({title, id, active, setActive}) => {
    return (
        <li className={active ? "projectList active" : "projectList"} onClick={() => setActive(id)}>
            {title}
        </li>
    )
}

export default ProjectList;