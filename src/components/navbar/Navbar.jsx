import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <header className={scrolled ? "portfolio-navbar scrolled" : "portfolio-navbar"}>

            <div className="container nav-container">

                <div className="logo">
                            Srikanth
                        </div>

                        <ul className="nav-links">

                            <li>
                                <Link to="about" smooth={true} duration={500} offset={-70}>
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link to="skills" smooth={true} duration={500} offset={-70}>
                                    Skills
                                </Link>
                            </li>

                            <li>
                                <Link to="experience" smooth={true} duration={500} offset={-70}>
                                    Experience
                                </Link>
                            </li>

                            <li>
                                <Link to="projects" smooth={true} duration={500} offset={-70}>
                                    Projects
                                </Link>
                            </li>

                            <li>
                                <Link to="certifications" smooth={true} duration={500} offset={-70}>
                                    Certifications
                                </Link>
                            </li>

                            <li>
                                <Link to="education" smooth={true} duration={500} offset={-70}>
                                    Education
                                </Link>
                            </li>

                            <li>
                                <Link to="contact" smooth={true} duration={500} offset={-70}>
                                    Contact
                                </Link>
                            </li>

                        </ul>

            </div>

        </header>

    );

};

export default Navbar;