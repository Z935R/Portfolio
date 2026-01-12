import { motion } from 'framer-motion';
import '../styles/Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            icon: '🌐',
            title: 'Networking',
            color: 'cyan',
            skills: ['CCNA', 'Enterprise Networks', 'SDN', 'LoRaWAN', 'Infrastructure', 'Data Center', 'TCP/IP', 'Routing & Switching']
        },
        {
            icon: '🛡️',
            title: 'Cybersecurity',
            color: 'green',
            skills: ['IDS/IPS', 'Digital Forensics', 'Security Analysis', 'Threat Detection', 'Network Security']
        },
        {
            icon: '🧠',
            title: 'Medical AI',
            color: 'purple',
            skills: ['Deep Learning', 'CNN', 'Python', 'TensorFlow', 'Medical Imaging', 'Data Analysis']
        },
        {
            icon: '💻',
            title: 'Development',
            color: 'blue',
            skills: ['React', 'Vite', 'Supabase', 'MySQL', 'JavaScript', 'IoT', 'Raspberry Pi']
        }
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-number">02.</span> Skills & Expertise
                </h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className={`skill-category skill-${category.color}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="skill-header">
                                <span className="skill-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
