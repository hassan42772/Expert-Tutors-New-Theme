import  { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
    const form = useRef();
    const [status, setStatus] = useState('');
    setTimeout(() => {
        setStatus('');
    }, 1000);
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yq0orza', 'template_5xustdk', form.current, 'l0jCnRBoZ_jiohv07')
            .then(() => {
                setStatus('Message sent successfully!');
                form.current.reset(); // Reset form fields after successful submission
            }, () => {
                setStatus('Failed to send message. Please try again.');
            });
    };

    return (
        <div className="contact">
            <section className="contact-info">
                <h1>Contact Us</h1>
                <p>We’d love to hear from you! Reach out to us with any questions or feedback.</p>
                <div className="contact-details">
                    <div className="detail">
                        <i className="fas fa-phone" style={{ color: 'green' }}></i>
                        <span>+92 325 3055790</span>
                    </div>
                    <div className="detail">
                        <i className="fas fa-envelope" style={{ color: '#a64da6' }}></i>
                        <span>huzaifawattoo864@gmail.com</span>
                    </div>
                    <div className="detail">
                        <i className="fas fa-map-marker-alt" style={{ color: 'red' }}></i>
                        <span>Fasal Colony, Bahawalnagar, Pakistan</span>
                    </div>
                </div>
            </section>

            <section className="contact-form">
                <h2>Send Us a Message</h2>
                <form ref={form} onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="from_name" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="from_email" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="5" 
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                    {status && <p className='status'>{status}</p>}
                </form>
            </section>
        </div>
    );
}

export default Contact;
