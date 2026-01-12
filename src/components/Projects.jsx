import { useState, useEffect } from 'react';
import '../styles/Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'Brain MRI Diagnosis System',
            description: 'AI-powered system for diagnosing brain MRI images using CNN',
            fullDescription: 'Advanced AI system using Convolutional Neural Networks (CNN) for diagnosing and analyzing brain MRI images with high accuracy. Developed as graduation project with honors, this system helps in early detection of brain diseases. Led the team and developed deep learning algorithms for medical image processing.',
            tags: ['Deep Learning', 'CNN', 'Python', 'Medical Imaging'],
            badge: 'Graduation Project - Honors',
            images: [
                '/Portfolio/assets/images/GP.jpg',

            ],
            role: 'Team Leader & Deep Learning Lead'
        },
        {
            title: 'ICU Smart Monitoring',
            description: 'AI-powered predictive system for ICU patient monitoring',
            fullDescription: 'Advanced monitoring system for ICU that collects real-time data from medical devices and provides predictive analytics. Automates data collection and uses AI to predict potential health complications for patients in intensive care units. Achieved Top 10 nationally at SSCP Hackathon.',
            tags: ['AI', 'Healthcare', 'Analytics', 'IoT'],
            badge: 'Top 10 Nationally',
            images: [
                '/Portfolio/assets/images/SSCP.jpg',
                '/Portfolio/assets/images/SSCP2.jpg'
            ],
            role: 'Technical Lead'
        },
        {
            title: 'Emergency Response System',
            description: 'Smart system to reduce ambulance response time',
            fullDescription: 'Innovative solution using AI-powered route optimization algorithms to minimize ambulance response time for critical cases. Implements advanced algorithms for real-time decision making and route planning. Won 1st Place at SDAIA Hackathon (Athkaathon) at Tabuk University level.',
            tags: ['AI', 'Algorithms', 'Healthcare', 'Optimization'],
            badge: '1st Place - Tabuk',
            images: [
                '/Portfolio/assets/images/Sdaia.jpg',

            ],
            role: 'Team Leader'
        },
        {
            title: 'Green Hydrogen',
            description: 'Converting wasted water to clean energy using IoT',
            fullDescription: 'Innovative project combining hardware and software to convert wasted water into clean energy. Integrated IoT devices (Raspberry Pi) with smart sensors and AI analytics for efficiency prediction. Built interactive dashboard for real-time monitoring and data visualization.',
            tags: ['IoT', 'Raspberry Pi', 'AI Analytics', 'Clean Energy'],
            badge: 'NEOMathon 2025',
            images: [
                '/Portfolio/assets/images/Green H.jpg',
                '/Portfolio/assets/images/Green H1.jpg',
                '/Portfolio/assets/images/Green H2.jpg',
                '/Portfolio/assets/images/Green H3.jpg',
            ],
            role: 'Technical Lead'
        },
        {
            title: 'Munsif (منصف)',
            description: 'Accounting sector solution for Saudi Arabia',
            fullDescription: 'Innovative technical solution addressing challenges in the accounting sector in Saudi Arabia. Developed during intensive hackathon period with focus on user experience and journey design. Won 1st Place at Tabuk University and qualified for finals in Riyadh.',
            tags: ['UX Design', 'Prototype', 'FinTech'],
            badge: '1st Place + Finals in Riyadh',
            images: [
                '/Portfolio/assets/images/SOCPA.jpg',

            ],
            role: 'Technical Lead & UX Designer'
        },
        {
            title: 'Find Tabuk',
            description: 'Tourism platform for Tabuk region',
            fullDescription: 'Comprehensive tourism platform providing information and services for visitors to Tabuk region. Built with modern tech stack using React and Vite for fast, responsive frontend, and Supabase for real-time database management. Designed scalable architecture to serve thousands of tourists.',
            tags: ['React', 'Vite', 'Supabase', 'Tourism'],
            badge: 'CTO',
            images: [
                '/Portfolio/assets/images/F1.jpg',

            ],
            role: 'CTO - Chief Technology Officer'
        },
        {
            title: 'Pharmacy Assistant App',
            description: 'Database system for pharmacists with focus on UX',
            fullDescription: 'Specialized application for pharmacists featuring comprehensive medicine database with emphasis on user experience (UX) and easy information access. Designed interfaces based on HCI principles and built database to support search and query operations. Aims to reduce medication dispensing errors.',
            tags: ['HCI', 'Database', 'UX Design', 'Healthcare'],
            badge: 'HCI Course Project',
            images: [

            ],
            role: 'Developer & UX Designer'
        },
        {
            title: 'Database Management System',
            description: 'Complete DBMS with ERD design and MySQL implementation',
            fullDescription: 'Comprehensive database management system project involving ERD (Entity Relationship Diagram) design, requirement analysis, and complete implementation using MySQL. Built integrated database for real-world application ensuring operational stability and data integrity.',
            tags: ['MySQL', 'ERD', 'Database Design', 'SQL'],
            badge: 'Database Course Project',
            images: [

            ],
            role: 'Team Leader'
        }
    ];

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-number">03.</span> Featured Projects
                </h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div className="project-modal" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedProject(null)}>
                            ×
                        </button>

                        {selectedProject.images && selectedProject.images.length > 0 && (
                            <div className="modal-image">
                                <img src={selectedProject.images[0]} alt={selectedProject.title} />
                            </div>
                        )}

                        <div className="modal-body">
                            <div className="modal-badge">{selectedProject.badge}</div>
                            <h2>{selectedProject.title}</h2>
                            <p className="modal-role">
                                <i className="fas fa-user-tie"></i> {selectedProject.role}
                            </p>
                            <p className="modal-description">{selectedProject.fullDescription}</p>

                            <div className="modal-tags">
                                <strong>Technologies:</strong>
                                <div className="project-tags">
                                    {selectedProject.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

const ProjectCard = ({ project, onClick }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!project.images || project.images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [project.images]);

    return (
        <div className="project-card" onClick={onClick}>
            {project.images && project.images.length > 0 && (
                <div className="project-image">
                    <img
                        src={project.images[currentImageIndex]}
                        alt={project.title}
                        key={currentImageIndex}
                    />
                    <div className="image-overlay"></div>
                    {project.images.length > 1 && (
                        <div className="carousel-dots">
                            {project.images.map((_, i) => (
                                <span
                                    key={i}
                                    className={`dot ${i === currentImageIndex ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentImageIndex(i);
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
            <div className="project-content">
                {project.badge && (
                    <div className="project-badge">{project.badge}</div>
                )}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="project-tag">{tag}</span>
                    ))}
                </div>
                <button className="view-details">
                    View Details <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Projects;
