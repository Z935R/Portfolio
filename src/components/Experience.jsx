import { useState, useEffect } from 'react';
import '../styles/Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: 'Al-Jouf Health Cluster',
            role: 'Infrastructure Support - Co-op Training',
            description: null,
            items: [
                'Established Data Center at Dental Hospital',
                'Configured complete building network & PCs',
                'Provided 50+ technical support cases'
            ],
            images: [

            ]
        },
        {
            title: 'Enterprise Networks Trainer',
            role: 'Technical Trainer',
            description: 'Delivered 3 intensive bootcamps on enterprise network infrastructure',
            items: null,
            images: [
                '/Portfolio/assets/images/potcamp.jpg',
                '/Portfolio/assets/images/potcamp1.jpg',
                '/Portfolio/assets/images/potcamp4.jpg'
            ]
        },
        {
            title: 'IEEE Student Branch',
            role: 'Vice-Chair',
            description: 'Led IEEE student branch activities for a full year',
            items: null,
            images: ['/Portfolio/assets/images/IEEE.jpg']
        },
        {
            title: 'IT Community - Tabuk University',
            role: 'Vice President',
            description: null,
            items: [
                '🏆 1st Place among 53 university communities',
                '🏅 3 Major Awards including Best Event',
                '🌟 Individual Award for Educational Content'
            ],
            featured: true,
            images: [
                '/Portfolio/assets/images/IT-co1.jpg',
                '/Portfolio/assets/images/It-co3.jpg',

            ]
        },
        {
            title: 'Technical Sessions & Talks',
            role: 'Speaker',
            description: 'Delivered technical sessions on networks and cybersecurity',
            items: null,
            images: [
                '/Portfolio/assets/images/speak1.jpg',
                '/Portfolio/assets/images/speak2.jpg',
                '/Portfolio/assets/images/s1.jpg',
                '/Portfolio/assets/images/s2.jpg',
                '/Portfolio/assets/images/s3.jpg',

            ]
        }
    ];

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-number">04.</span> Experience & Leadership
                </h2>

                <div className="exp-grid">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} exp={exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExperienceCard = ({ exp }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!exp.images || exp.images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % exp.images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [exp.images]);

    return (
        <div className={`exp-card ${exp.featured ? 'featured' : ''}`}>
            {exp.images && exp.images.length > 0 && (
                <div className="exp-image-carousel">
                    <img
                        src={exp.images[currentImageIndex]}
                        alt={`${exp.title} ${currentImageIndex + 1}`}
                        key={currentImageIndex}
                    />
                    {exp.images.length > 1 && (
                        <div className="carousel-dots">
                            {exp.images.map((_, i) => (
                                <span
                                    key={i}
                                    className={`dot ${i === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(i)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}

            <div className="exp-content">
                <h3>{exp.title}</h3>
                <p className="exp-role">{exp.role}</p>

                {exp.description && <p>{exp.description}</p>}

                {exp.items && (
                    <ul>
                        {exp.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Experience;
