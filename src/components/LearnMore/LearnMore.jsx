
import './LearnMore.css'
import { Link } from 'react-router-dom'

import learn1 from '../../Assets/laptop.png'
import learn2 from '../../Assets/laptop2.png'
import learn3 from '../../Assets/laptop3.png'
import learn4 from '../../Assets/laptop4.png'
function LearnMore() {
    return (
        <div className="tutor-component">
            <h1 className="centered-heading">Best Home Tutor</h1>
            <div className="row">
                <div className="text-container">
                    <h2>Home Tutoring - Hire the Most experienced Home Tutors in Your Area with Us</h2>
                    <p>Home Tutoring in the era where competition is at its peak and students have to be very smart and trained to achieve their desired targets, Saving students time and energy, and guiding them in the right way according to their mental capability is the main focus of our qualified and experiencd home tutors. We care for the future of your child through our quality services. Expert home tutors are just a call away from you.</p>
                </div>
                <div className="image-container">
                    <img src={learn1} alt="Home Tutor" />
                </div>
            </div>
            <div className="row">
                <div className="image-container">
                    <img src={learn2} alt="Home Tutor" />
                </div>
                <div className="text-container">
                    <h2>Well Experienced Male & Female Tutors for All Subjects</h2>
                    <p>Tutor Club has the most experienced team for all subjects of all levels. Right tutor for student is our priority because only a good match can boost the learning capabilities of the students. We provide subject specialists for all fields: sciences, social sciences, Business group, arts group etc. Our most of the Faculty is from renowned institutions. We have selected the best home tutors for you because we never compromise on the studies of your kids.</p>
                </div>
            </div>
            <div className="row">
                <div className="text-container">
                    <h2>TutorClub Also Provides Well Equiped Online Tutors</h2>
                    <p>Concept of Online Tutoring has greatly emerged after Covid-19 situation. Online tutoring, without use of proper equipment, creates confusions and makes the students uncomfortable. Out teachers are fully trained and have all the necessary equipments to deliver the concepts properly and involving the students with the use of proper online worksheets and materials</p>
                </div>
                <div className="image-container">
                    <img src={learn3} alt="Home Tutor" />
                </div>
            </div>
            <div className="row">
                <div className="image-container">
                    <img src={learn4} alt="Home Tutor" />
                </div>
                <div className="text-container">
                    <h2>Home Tutoring - Hire the Most experienced Home Tutors in Your Area with Us</h2>
                    <p>Home Tutoring in the era where competition is at its peak and students have to be very smart and trained to achieve their desired targets, Saving students time and energy, and guiding them in the right way according to their mental capability is the main focus of our qualified and experiencd home tutors. We care for the future of your child through our quality services. Expert home tutors are just a call away from you.</p>
                </div>
            </div>
            <div>
            <h3 className="centered-heading">For More Details</h3>
            <button> <Link to="/contact" style={{color:'white'}}>Contact us</Link></button>
            </div>

        </div>
    );
}

export default LearnMore
