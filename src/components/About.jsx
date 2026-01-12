import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
    const cards = [
        {
            icon: '🌐',
            title: 'Networking',
            description: 'CCNA trained, Enterprise Networks, SDN & LoRaWAN',
            color: 'cyan'
        },
        {
            icon: '🛡️',
            title: 'Cybersecurity',
            description: 'IDS/IPS, Digital Forensics, KAUST Candidate',
            color: 'green'
        },
        {
            icon: '🧠',
            title: 'Medical AI',
            description: 'CNN, Brain MRI Analysis, Deep Learning',
            color: 'purple'
        }
    ];

    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-number">01.</span> About Me
                </h2>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p>
                            I'm <strong>Rayan Abdullah Al-Balawi</strong>, a Saudi IT graduate from
                            <strong> Tabuk University</strong> with a deep passion for technology and innovation.
                        </p>
                        <p>
                            My journey spans across three exciting domains: building robust
                            <span className="highlight-cyan"> network infrastructures</span>, defending systems through
                            <span className="highlight-green"> cybersecurity</span>, and revolutionizing healthcare with
                            <span className="highlight-purple"> Medical AI</span>.
                        </p>
                        <p>
                            Currently focused on <strong>Network Infrastructure roles in Riyadh</strong>,
                            I bring hands-on experience from hackathons, training bootcamps, and real-world projects
                            that have earned national recognition.
                        </p>
                    </motion.div>

                    <div className="about-cards">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                className={`about-card card-${card.color}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="card-icon">{card.icon}</div>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
