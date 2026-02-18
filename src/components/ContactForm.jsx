import React from 'react';

const ContactForm = () => {
    const whatsappNumber = '919031842124';
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', padding: '2.5rem' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem', fontSize: '2rem' }}>Let's <span className="text-gradient">Connect</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Have a project in mind? Reach out via email or message me directly on WhatsApp.
            </p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', textAlign: 'left' }} onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>Your Email</label>
                    <input
                        type="email"
                        placeholder="email@example.com"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '12px',
                            padding: '0.8rem 1rem',
                            color: 'white',
                            outline: 'none'
                        }}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>Message</label>
                    <textarea
                        rows="4"
                        placeholder="Tell me about your project..."
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '12px',
                            padding: '0.8rem 1rem',
                            color: 'white',
                            outline: 'none',
                            resize: 'none'
                        }}
                    ></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                    Send Message
                </button>
            </form>

            <div style={{ margin: '2rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>OR</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
            </div>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{
                width: '100%',
                background: '#25D366',
                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
            }}>
                <span>Chat on WhatsApp</span>
            </a>
        </div>
    );
};

export default ContactForm;
