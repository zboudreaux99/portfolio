import "./Menu.scss";
import resume from "../../assets/resume.pdf";

const Menu = ({menuOpen, setMenuOpen}) => {
    const closeHamburger = () => {
        setMenuOpen(false);
    }

    return (
        <div className={"Menu" + (menuOpen ? " active" : "")}>
            <ul>
                <li onClick={closeHamburger}>
                    <a href="#intro"> Intro </a>
                </li>

                <li onClick={closeHamburger}>
                    <a href="#about"> About </a>
                </li>

                <li onClick={closeHamburger}>
                    <a href="#projects"> Projects </a>
                </li>

                <li onClick={closeHamburger}>
                    <a href="#contact"> Contact </a>
                </li>

                <li onClick={closeHamburger}>
                    <a href={resume} target="_blank"> Resume </a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;