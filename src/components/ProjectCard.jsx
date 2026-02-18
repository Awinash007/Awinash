import React from 'react';

const ProjectCard = ({ title, description, tags, link, image }) => {
    return (
        <div className="glass-card project-card" style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden',
            padding: '0'
        }}>
            <div style={{
                height: '200px',
                background: 'linear-gradient(45deg, var(--bg-secondary), var(--glass-border))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                borderBottom: '1px solid var(--glass-border)'
            }}>
                {image || '🚀'}
            </div>
            <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', color: 'var(--accent-cyan)' }}>{title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: '1.5' }}>
                    {description}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {tags.map((tag, i) => (
                        <span key={i} className="badge" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>{tag}</span>
                    ))}
                </div>
                <a href={link} className="btn-primary" style={{ width: '100%', textAlign: 'center', fontSize: '0.9rem', padding: '0.7rem' }}>
                    View Project
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
