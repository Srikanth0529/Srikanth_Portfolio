import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (

        <header className={scrolled ? "portfolio-navbar scrolled" : "portfolio-navbar"}>

            <div className="container nav-container">

                <div className="logo">
                    Srikanth
                </div>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

                        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

                            <li>
                                <Link
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onClick={closeMenu}
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="skills"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onClick={closeMenu}
                                >
                                    Skills
                                </Link>
                            </li>

                            <li>
                                <Link
                                to="experience"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={closeMenu}
                            >
                                    Experience
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="projects"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onClick={closeMenu}
                                >
                                    Projects
                                </Link>
                            </li>

                            <li>
                                <Link to="certifications" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
                                    Certifications
                                </Link>
                            </li>

                            <li>
                                <Link to="education" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
                                    Education
                                </Link>
                            </li>

                            <li>
                                <Link to="contact" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
                                    Contact
                                </Link>
                            </li>

                        </ul>

            </div>

        </header>

    );

};

export default Navbar;