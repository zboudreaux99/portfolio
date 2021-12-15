import "./Navbar.scss";

const Navbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"Navbar" + (menuOpen ? " active" : "")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro"> &lt;ZB&gt; </a>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;