
import './Home.css'
import expert from '../../Assets/people.png'
import discount from '../../Assets/discount2.png'
import trail from '../../Assets/graduaction.png'
import result from '../../Assets/agreement.png'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <>
            <div className="home">
                <section className="hero">
                    <div className="info">
                        <h1>Welcome to <span className='Title'>Expert </span> <br /> <span className='Title'>Mind</span> <span className='Title1'>(HomeTutors)</span> </h1>
                        <p>LEARN<span>-------</span>GROW<span>-------</span>SUCCEED</p>
                        <button className="hero-btn">
                            <Link to="LearnMore" style={{color:"white"}}>Learn More</Link>
                        </button>
                    </div>
                    <div className="info_img"></div>
                </section>

                <section className="features">
                    <div className="card">
                        <img src={expert} alt="images" className="card-image" />
                        <div className="card-content">
                            <h2 className="card-title">Expert Tutors</h2>
                            <p className="card-text">Our Tutors are specialized in their subjects and expert in guiding students to perform at their best level by understanding the capacity & interest of students.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={trail} alt="images" className="card-image" />
                        <div className="card-content">
                            <h2 className="card-title">2-Days Free Trial</h2>
                            <p className="card-text">Free Trial Classes give chance to students to find best tutor match because only a compatible tutor can understand the student well and raise his level to the best.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={discount} alt="images" className="card-image" />
                        <div className="card-content">
                            <h2 className="card-title">Affordale Fee</h2>
                            <p className="card-text">Our Tutors charge reasonable fee to provide chance to maximum students to get benefits by availing individual coaching - the most effective learning.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={result} alt="images" className="card-image" />
                        <div className="card-content">
                            <h2 className="card-title">Guaranteed Results</h2>
                            <p className="card-text">Right choice of tutors can make you achieve your desired grades in shortest possible span of time. So, dont compromise on the quality of education.</p>
                        </div>
                    </div>
                </section>

                <section className="gallery">
                    <h2>Our Services</h2>
                    <div className="gallery-images">
                        <div className="card-gallery">
                            <h3 className='card-gallery-title'>Classes</h3>
                            <div className="card-gallery-content">

                                <ul className="card-list">
                                    <li>Nusery to 8th</li>
                                    <li>O Level</li>
                                    <li>A Level</li>
                                    <li>Matric</li>
                                    <li> Mathematics</li>
                                    <li>F.Sc</li>
                                    <li>ICS</li>
                                    <li>I.COM</li>
                                    <li>F.A</li>
                                    <li>B.COM</li>
                                    <li>M.COM</li>
                                    <li>B.Sc</li>
                                    <li>BSCS</li>
                                    <li>BS</li>
                                    <li>BA</li>
                                    <li>MBA</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-gallery">
                            <h3 className='card-gallery-title'>Subject</h3>

                            <div className="card-gallery-content">

                                <ul className="card-list">
                                    <li>English</li>
                                    <li>Urdu</li>
                                    <li>Islamiat</li>
                                    <li>Pakistan Studies</li>
                                    <li> Mathematics</li>
                                    <li>G. Science</li>
                                    <li>Physics</li>
                                    <li>Biology</li>
                                    <li>Chemistry</li>
                                    <li>Computer Science</li>
                                    <li>ICT</li>
                                    <li>Literature</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
