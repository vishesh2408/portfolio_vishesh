import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus({ type: 'error', text: 'Please fill all fields.' });
      return;
    }
    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      if (res.ok) {
        setStatus({ type: 'success', text: 'Message sent — thanks!' });
        setName(''); setEmail(''); setMessage('');
      } else {
        const body = await res.json().catch(() => ({}));
        setStatus({ type: 'error', text: body.error || 'Failed to send message' });
      }
    } catch (err) {
      setStatus({ type: 'error', text: 'Network error' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Let’s Connect</h2>
          <p>If you have a project in mind or just want to say hi, drop a message. I’ll get back to you soon!</p>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Your Name" required />
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Your Email" required />
          <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send Message'}</button>
          {status && (
            <div className={`contact-status ${status.type === 'error' ? 'error' : 'success'}`}>
              {status.text}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
