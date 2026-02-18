import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: 'Associate Software Developer (RPA)',
            company: 'Centelli India',
            duration: 'Present',
            description: 'Developing and optimizing Robotic Process Automation solutions to streamline business workflows.',
            tags: ['RPA', 'Automation', 'Process Optimization']
        },
        {
            role: 'Full Stack Development Intern',
            company: 'Internship',
            duration: 'Previous',
            description: 'Worked on MERN stack applications, building responsive frontends and scalable REST APIs.',
            tags: ['React', 'Node.js', 'Express', 'MongoDB']
        }
    ];

    return (
        <section id="experience" className="container">
            <h2 className="section-title">Professional <span className="text-gradient">Journey</span></h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {experiences.map((exp, index) => (
                    <div key={index} className="glass-card" style={{ textAlign: 'left' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)' }}>{exp.role}</h3>
                                <h4 style={{ color: 'var(--text-muted)' }}>{exp.company}</h4>
                            </div>
                            <span className="badge" style={{ height: 'fit-content' }}>{exp.duration}</span>
                        </div>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--text-main)', opacity: 0.9 }}>{exp.description}</p>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {exp.tags.map((tag, i) => (
                                <span key={i} style={{
                                    fontSize: '0.75rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '4px 12px',
                                    borderRadius: '4px',
                                    border: '1px solid var(--glass-border)'
                                }}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
