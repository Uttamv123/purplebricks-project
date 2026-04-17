'use client';

import { useState } from 'react';
import { submitInquiry } from '../lib/api';

export default function ContactForm({ propertyId }) {
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const next = {};
    if (!fields.name.trim()) next.name = 'Name is required';
    if (!fields.email.trim()) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.email = 'Enter a valid email address';
    if (!fields.message.trim()) next.message = 'Message is required';
    return next;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSuccess(false); setApiError(null);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setErrors({}); setSubmitting(true);
    try {
      await submitInquiry({ propertyId, ...fields });
      setSuccess(true);
      setFields({ name: '', email: '', message: '' });
    } catch (err) {
      setApiError(err.body?.error || err.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
      {success && <div className="form-success" role="status">✅ Your enquiry has been sent successfully!</div>}
      {apiError && <div className="form-api-error" role="alert">⚠️ {apiError}</div>}

      <div className="form-group">
        <label className="form-label" htmlFor="name">Full Name</label>
        <input className={`form-input${errors.name ? ' error' : ''}`} id="name" name="name" type="text" value={fields.name} onChange={handleChange} aria-invalid={!!errors.name} placeholder="Your name" />
        {errors.name && <span className="form-error" role="alert" id="name-error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">Email Address</label>
        <input className={`form-input${errors.email ? ' error' : ''}`} id="email" name="email" type="email" value={fields.email} onChange={handleChange} aria-invalid={!!errors.email} placeholder="you@example.com" />
        {errors.email && <span className="form-error" role="alert" id="email-error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">Message</label>
        <textarea className={`form-textarea${errors.message ? ' error' : ''}`} id="message" name="message" value={fields.message} onChange={handleChange} aria-invalid={!!errors.message} placeholder="I'm interested in this property…" />
        {errors.message && <span className="form-error" role="alert" id="message-error">{errors.message}</span>}
      </div>

      <button className="form-submit" type="submit" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send Enquiry'}
      </button>
    </form>
  );
}
