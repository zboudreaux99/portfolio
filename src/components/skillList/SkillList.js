import "./SkillList.scss";

const SkillList = ({title, id, active, setActive}) => {
    return (
        <li className={active ? "skillList active" : "skillList"} onClick={() => setActive(id)}>
            {title}
        </li>
    )
}

export default SkillList;