import React from 'react';

const Hero = () => {
    return (
        <section className="container animate-fade-in" style={{
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '4rem 2rem'
        }}>
            <span className="badge" style={{ marginBottom: '1.2rem' }}>Ready to Scale Your Business</span>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.2rem' }}>
                Hi, I'm <span className="text-gradient">Awinash Choudhary</span>
            </h1>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '2rem' }}>
                RPA & Full-Stack Developer
            </h2>
            <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                maxWidth: '600px',
                marginBottom: '2.5rem',
                lineHeight: '1.7'
            }}>
                I specialize in building intelligent automation and high-performance web applications that drive efficiency and growth.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="#projects" className="btn-primary">View Projects</a>
                <a href="#contact" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--glass-border)' }}>Get In Touch</a>
            </div>
        </section>
    );
};

export default Hero;
