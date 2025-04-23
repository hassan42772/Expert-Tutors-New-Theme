
import './Footer.css'
import { Link , NavLink } from 'react-router-dom'
import logo from "../../Assets/logo.png";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <div className="logo"><img src={logo} alt="logo" width="100px" height="100px"/><span>  Expert  <br /> Mind</span></div>
                        <p className="about-comp">
                        Our Tutors are specialized in their subjects and expert in guiding students to perform at their best level by understanding the capacity & interest of students.
                        </p>
                        <div className="contact">
                            <span><i className="fas fa-phone" style={{color:'#a64da6'}}></i> &nbsp;+92 325 3055790</span><br />
                            <span><i className="fas fa-envelope"></i> &nbsp;huzaifawattoo864@gmail.com</span>
                        </div>
                    </div>
                    <div className="footer-section links">
                        <h2>Quick Links</h2>
                        <br />
                        <ul>
                            <li>  <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                        >
                            Home
                        </NavLink></li>
                            <li>
                            <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                        >
                            About
                        </NavLink></li>
                            <li>
                            <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                        >
                            Contact
                        </NavLink></li>
                            <li>
                            <NavLink
                            to="/github"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                        >
                            Serving Areas
                        </NavLink></li>
                            <li>
                            <NavLink
                            to="/card"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                        >
                            Available Tutors
                        </NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-section social">
                        <h2>Follow us</h2>
                        <br />
                        <div className="social-icons">
                            <Link to=" https://wa.me/qr/RBUPQYPCQDZYB1" target='_blank'><i className="fab fa-facebook"></i></Link>
                            
                            <Link to="https://www.facebook.com/share/1Bn8JBZEC2/" target='_blank'><i className="fab fa-whatsapp"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; 2025 Expert Mind | Designed by Huzaifa Ali
                </div>
            </footer>
        </>
    )
}

export default Footer
