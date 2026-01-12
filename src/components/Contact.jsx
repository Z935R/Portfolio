import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:rayanbl8640@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-number">05.</span> Get In Touch
                </h2>

                <div className="contact-wrapper">
                    <div className="contact-left">
                        <h3>Let's Work Together</h3>
                        <p className="contact-description">
                            I'm currently looking for Network Infrastructure opportunities in Riyadh.
                            Feel free to reach out if you'd like to discuss potential collaborations or just want to connect!
                        </p>

                        <div className="contact-info-cards">
                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="info-content">
                                    <h4>Location</h4>
                                    <p>Riyadh, Saudi Arabia</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="info-content">
                                    <h4>Email</h4>
                                    <a href="mailto:rayanbl8640@gmail.com">rayanbl8640@gmail.com</a>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="info-content">
                                    <h4>Phone</h4>
                                    <a href="tel:+966536250994">+966 53 625 0994</a>
                                </div>
                            </div>
                        </div>

                        <div className="social-section">
                            <h4>Connect With Me</h4>
                            <div className="social-links">
                                <a href="https://linkedin.com/in/rayan-albalawi-z935r" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                                    <i className="fab fa-linkedin-in"></i>
                                    <span>LinkedIn</span>
                                </a>
                                <a href="https://x.com/z935a" target="_blank" rel="noopener noreferrer" className="social-btn twitter">
                                    <i className="fab fa-twitter"></i>
                                    <span>Twitter</span>
                                </a>
                                <a href="https://wa.me/966536250994" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
                                    <i className="fab fa-whatsapp"></i>
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-right">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3>Send Me a Message</h3>

                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your project or opportunity..."
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="submit-btn">
                                <i className="fas fa-paper-plane"></i>
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
