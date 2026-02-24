import React from 'react'
import './About.css'
import Waleed from '../../Assets/hassan.jpeg'
import hassan from '../../Assets/newbobo.jpg'
import member from '../../Assets/newmember.jpg'
function About() {
  return (
    <>
      <div className="about">
        <section className="about-intro">
          <h1>About Us</h1>
          <p> <span className='about-span'>Expert Mind</span>  provides professional and expert Male Home Tutors all over Pakistan especially in Bahawalnagar.</p>
        </section>

        <section className="team">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={Waleed} alt="Team Member 1" />
              <h3>Hassan Maqbool</h3>
              <p>Founder & CEO</p>
            </div>
           
          </div>
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p> Quality education is our priority. We aim to maximize your child's potential through individual coaching.</p>
        </section>
      </div>
    </>
  )
}

export default About
