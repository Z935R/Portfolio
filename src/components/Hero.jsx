import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const titles = [
        'Network Engineer',
        'Cybersecurity Enthusiast',
        'Medical AI Developer',
        'Technical Leader'
    ];

    useEffect(() => {
        const handleTyping = () => {
            const current = loopNum % titles.length;
            const fullText = titles[current];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 75 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, titles]);

    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="hero-badge">
                        <span className="badge-icon">◆</span>
                        Available for Network Infrastructure Roles
                    </div>

                    <h1 className="hero-title">
                        Hello, I'm <span className="name-highlight">Rayan Al-Balawi</span>
                    </h1>

                    <div className="hero-subtitle">
                        <span className="typing-text">{text}</span>
                        <span className="cursor">|</span>
                    </div>

                    <p className="hero-description">
                        IT Professional from <strong>Tabuk University</strong> with deep expertise in
                        <span className="highlight-cyan"> Enterprise Networks</span>,
                        <span className="highlight-green"> Cybersecurity</span>, and
                        <span className="highlight-purple"> Medical AI</span>.
                        Building innovative solutions that make a difference.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            <span>View Projects</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 3L8.59 4.41 13.17 9H3v2h10.17l-4.58 4.59L10 17l7-7z" />
                            </svg>
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            <span>Contact Me</span>
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-number">8+</div>
                            <div className="stat-label">Projects</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-number">3</div>
                            <div className="stat-label">Hackathon Wins</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-number">Top 10</div>
                            <div className="stat-label">Nationally</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="network-orb">
                        <div className="orb-ring ring-1"></div>
                        <div className="orb-ring ring-2"></div>
                        <div className="orb-ring ring-3"></div>
                        <div className="orb-core">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                        </div>
                    </div>

                    <div className="floating-nodes">
                        <div className="node node-1"></div>
                        <div className="node node-2"></div>
                        <div className="node node-3"></div>
                        <div className="node node-4"></div>
                    </div>
                </motion.div>
            </div>

            <a href="#about" className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll Down</span>
            </a>
        </section>
    );
};

export default Hero;
