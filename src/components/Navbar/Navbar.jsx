import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { useState, useEffect, useRef } from "react";

function Navbar() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const timeoutRef = useRef(null);

    const toggleNav = () => {
        setIsNavVisible(prev => {
            if (prev) {
                // Clear timeout if menu is being hidden
                clearTimeout(timeoutRef.current);
            } else {
                // Set timeout to hide menu after 5 seconds
                timeoutRef.current = setTimeout(() => {
                    setIsNavVisible(true);
                }, 5000);
            }
            return !prev;
        });
    };

    useEffect(() => {
        // Clean up the timeout if the component is unmounted or menu is hidden
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="logo">
            <Link to="/">

                <img src={logo} alt="logo"  width="40px" height="50px"/>
            </Link>
                <div className="logo-text">
                    <span  style={{color: 'white'}}>Expert</span>
                    <span style={{color: 'white'}}>Mind</span>
                </div>
            </div>
            <ul className={`nav-links ${isNavVisible ? 'show' : ''}`}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                        style={{textDecoration:"none"}}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/card"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                    >
                        Available Tutors
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/github"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                    >
                        Serving Areas
                    </NavLink>
                </li>
               
            </ul>
            <div className={`nav-buttons ${isNavVisible ? 'show' : ''}`}>
                <button className="get-started">
                    <Link className="ForStudent" to="/studentForm" >
                        Find Tutor
                    </Link>
                </button>
                <button className="get-started">
                    <Link className="ForStudent" to="/tutorForm" >
                        Apply As Tutor
                    </Link>
                </button>
            </div>
            <button className="bar" onClick={toggleNav}>
                <i className="fa-solid fa-bars"></i>
            </button>
            {isNavVisible && (
                <div className="mobile-menu">
                    <ul className="mobile-nav-links">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/card"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                            >
                                Available Tutors
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/github"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                            >
                                Serving Areas
                            </NavLink>
                        </li>
                      
                    </ul>
                   
                </div>
            )}
        </nav>
    );
}

export default Navbar;
