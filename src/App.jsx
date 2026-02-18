import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';

function App() {
    const projects = [
        {
            title: 'RPA Invoice Processor',
            description: 'Automated invoice data extraction and entry using UiPath and Python, reducing manual effort by 80%.',
            tags: ['UiPath', 'Python', 'OCR'],
            link: '#',
            image: '🤖'
        },
        {
            title: 'MERN Stack Dashboard',
            description: 'A comprehensive management dashboard with real-time analytics, user authentication, and data visualization.',
            tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
            link: '#',
            image: '📊'
        },
        {
            title: 'Intelligent Automation Bot',
            description: 'A specialized bot for streamlining business workflows and enhancing operational efficiency through smart scheduling.',
            tags: ['React', 'Express', 'Automation'],
            link: '#',
            image: '⚡'
        }
    ];

    return (
        <div className="portfolio-app">
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: '1rem 2rem',
                backdropFilter: 'blur(15px)',
                zIndex: 1000,
                borderBottom: '1px solid var(--glass-border)'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '1px' }}>
                        <span style={{ color: 'var(--accent-cyan)' }}>AWINASH</span> <span style={{ opacity: 0.8 }}>CHOUDHARY</span>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', fontWeight: 600 }}>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
                        <a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
                        <a href="#experience" style={{ color: 'inherit', textDecoration: 'none' }}>Experience</a>
                        <a href="#skills" style={{ color: 'inherit', textDecoration: 'none' }}>Skills</a>
                        <a href="#contact" style={{ color: 'inherit', textDecoration: 'none', color: 'var(--accent-cyan)' }}>Contact</a>
                    </div>
                </div>
            </nav>

            <main style={{ marginTop: '60px' }}>
                <Hero />

                <section id="projects" className="container">
                    <h2 className="section-title">Latest <span className="text-gradient">Work</span></h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </section>

                <Experience />
                <Skills />

                <section id="contact" className="container" style={{ textAlign: 'center' }}>
                    <ContactForm />
                </section>
            </main>

            <footer style={{ padding: '2.5rem 0', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)' }}>
                <p style={{ fontSize: '0.9rem' }}>© {new Date().getFullYear()} Awinash Choudhary. Built with precision.</p>
            </footer>
        </div>
    );
}

export default App;
