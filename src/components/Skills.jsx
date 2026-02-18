import React from 'react';

const Skills = () => {
    const skills = [
        { name: 'React', icon: '⚛️', category: 'Frontend' },
        { name: 'Node.js', icon: '🟢', category: 'Backend' },
        { name: 'MongoDB', icon: '🍃', category: 'Database' },
        { name: 'MySQL', icon: '🐬', category: 'Database' },
        { name: 'Express Js', icon: '🚂', category: 'Backend' },
        { name: 'RPA', icon: '🤖', category: 'Automation' },
    ];

    return (
        <section id="skills" className="container">
            <h2 className="section-title">My <span className="text-gradient">Tech Stack</span></h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem'
            }}>
                {skills.map((skill, index) => (
                    <div key={index} className="glass-card" style={{
                        textAlign: 'center',
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <div style={{ fontSize: '2.5rem' }}>{skill.icon}</div>
                        <h3 style={{ fontSize: '1.2rem' }}>{skill.name}</h3>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            {skill.category}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
