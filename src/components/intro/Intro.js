import "./Intro.scss";
import portrait from "../../assets/portrait.png";
import portraitPixelated from "../../assets/portraitPixel.gif";
import { FaAngleDown as ArrowDown } from "react-icons/fa";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
    const textRef = useRef()
    
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1500,
            strings: ["Engineer", "Developer", "Designer"]
        });
    }, []);

    return (
        <div className="Intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src={portrait} alt="Portrait of Zach Boudreaux" id="portrait"/>
                    <img src={portraitPixelated} alt="Pixelated Portrait of Zach Boudreaux" id="pixel"/>
                </div>

                <a href="#projects">
                    <ArrowDown className="arrow"/>
                </a>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2> Hi there! My name is </h2>
                    <h1> Zach Boudreaux </h1>
                    <h3> <span ref={textRef}></span> </h3>
                </div>
            </div>
        </div>
    )
}

export default Intro;