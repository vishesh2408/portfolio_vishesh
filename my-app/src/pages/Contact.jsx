import React, { useState, useRef, useEffect } from 'react';
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
      // Allow explicit backend URL via Vite env `VITE_BACKEND_URL`, otherwise use relative `/api`
      const base = import.meta.env.VITE_BACKEND_URL ?? ''
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      if (res.ok) {
        setStatus({ type: 'success', text: 'Message is successfully sended!' });
        setName(''); setEmail(''); setMessage('');
      } else {
        const body = await res.json().catch(() => ({}));
        setStatus({ type: 'error', text: body.error || 'Failed to send message' });
      }
    } catch {
      setStatus({ type: 'error', text: 'Network error' });
    } finally {
      setSending(false);
    }
  };

  // auto-clear success messages after a short timeout
  const timerRef = useRef(null);
  useEffect(() => {
    if (status && status.type === 'success') {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setStatus(null), 4000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [status]);

  return (
    <section className="contact-section" id="contact">
      {status && status.type === 'success' && (
        <div className="contact-toast" role="status">{status.text}</div>
      )}
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
          {status && status.type === 'error' && (
            <div className={`contact-status error`}>
              {status.text}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
