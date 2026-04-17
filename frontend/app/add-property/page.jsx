'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitProperty } from '../../lib/api';

const CITIES = [
  'Mumbai','Delhi','Bengaluru','Hyderabad','Pune','Chennai',
  'Kolkata','Ahmedabad','Jaipur','Lucknow','Noida','Gurugram',
  'Surat','Vadodara','Indore','Bhopal','Nagpur','Coimbatore',
  'Kochi','Visakhapatnam','Chandigarh','Patna','Bhubaneswar',
];

const PROPERTY_TYPES = [
  { value: 'apartment',  label: 'Apartment' },
  { value: 'house',      label: 'Independent House' },
  { value: 'villa',      label: 'Villa' },
  { value: 'studio',     label: 'Studio' },
  { value: 'plot',       label: 'Plot / Land' },
  { value: 'commercial', label: 'Commercial' },
];

export default function AddPropertyPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    price: '',
    location: '',
    property_type: '',
    bedrooms: '',
    bathrooms: '',
    description: '',
    image_url: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  }

  function validate() {
    const errs = {};
    if (!form.title.trim())        errs.title = 'Title is required';
    if (!form.price)               errs.price = 'Price is required';
    else if (isNaN(form.price))    errs.price = 'Price must be a number';
    if (!form.location)            errs.location = 'City is required';
    if (!form.property_type)       errs.property_type = 'Property type is required';
    if (!form.description.trim())  errs.description = 'Description is required';
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setApiError('');
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setSubmitting(true);
    try {
      await submitProperty({
        ...form,
        price: Number(form.price),
        bedrooms: Number(form.bedrooms) || 0,
        bathrooms: Number(form.bathrooms) || 0,
      });
      setSuccess(true);
      setTimeout(() => router.push('/listings'), 2000);
    } catch (err) {
      setApiError(err.body?.error || err.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="section" style={{ maxWidth: '760px' }}>
      <div className="add-prop-header">
        <h1 className="section__title" style={{ marginBottom: '0.5rem' }}>📋 List Your Property</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Fill in the details below and your listing will go live instantly — completely free.
        </p>
      </div>

      {success && (
        <div className="form-success" style={{ marginBottom: '1.5rem' }}>
          ✅ Property listed successfully! Redirecting to listings…
        </div>
      )}
      {apiError && (
        <div className="form-api-error" style={{ marginBottom: '1.5rem' }}>
          ⚠️ {apiError}
        </div>
      )}

      <form className="add-prop-form" onSubmit={handleSubmit} noValidate>

        {/* Title */}
        <div className="form-group">
          <label className="form-label" htmlFor="title">Property Title *</label>
          <input className={`form-input${errors.title ? ' error' : ''}`} id="title" name="title" type="text" value={form.title} onChange={handleChange} placeholder="e.g. Spacious 3BHK Apartment in Bandra West" />
          {errors.title && <span className="form-error">{errors.title}</span>}
        </div>

        {/* Price */}
        <div className="form-group">
          <label className="form-label" htmlFor="price">Price (₹) *</label>
          <input className={`form-input${errors.price ? ' error' : ''}`} id="price" name="price" type="number" value={form.price} onChange={handleChange} placeholder="e.g. 7500000 (for ₹75 Lakh)" />
          {errors.price && <span className="form-error">{errors.price}</span>}
          {form.price && !isNaN(form.price) && (
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              = ₹{Number(form.price).toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* City + Type row */}
        <div className="add-prop-row">
          <div className="form-group">
            <label className="form-label" htmlFor="location">City *</label>
            <select className={`form-input${errors.location ? ' error' : ''}`} id="location" name="location" value={form.location} onChange={handleChange}>
              <option value="">Select city</option>
              {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            {errors.location && <span className="form-error">{errors.location}</span>}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="property_type">Property Type *</label>
            <select className={`form-input${errors.property_type ? ' error' : ''}`} id="property_type" name="property_type" value={form.property_type} onChange={handleChange}>
              <option value="">Select type</option>
              {PROPERTY_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
            {errors.property_type && <span className="form-error">{errors.property_type}</span>}
          </div>
        </div>

        {/* Bedrooms + Bathrooms row */}
        <div className="add-prop-row">
          <div className="form-group">
            <label className="form-label" htmlFor="bedrooms">Bedrooms (BHK)</label>
            <select className="form-input" id="bedrooms" name="bedrooms" value={form.bedrooms} onChange={handleChange}>
              <option value="0">Studio / 0</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4 BHK</option>
              <option value="5">5+ BHK</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="bathrooms">Bathrooms</label>
            <select className="form-input" id="bathrooms" name="bathrooms" value={form.bathrooms} onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="form-group">
          <label className="form-label" htmlFor="description">Description *</label>
          <textarea className={`form-textarea${errors.description ? ' error' : ''}`} id="description" name="description" value={form.description} onChange={handleChange} placeholder="Describe the property — location highlights, amenities, nearby landmarks, condition…" rows={4} />
          {errors.description && <span className="form-error">{errors.description}</span>}
        </div>

        {/* Image URL */}
        <div className="form-group">
          <label className="form-label" htmlFor="image_url">Photo URL (optional)</label>
          <input className="form-input" id="image_url" name="image_url" type="url" value={form.image_url} onChange={handleChange} placeholder="https://… (paste a direct image link)" />
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem', display: 'block' }}>
            Tip: Upload your photo to <a href="https://imgur.com" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>imgur.com</a> and paste the link here.
          </span>
          {form.image_url && (
            <img src={form.image_url} alt="Preview" style={{ marginTop: '0.75rem', width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '0.5rem', border: '1px solid var(--border)' }} onError={e => e.target.style.display='none'} />
          )}
        </div>

        <button className="form-submit" type="submit" disabled={submitting} style={{ width: '100%', padding: '1rem', fontSize: '1.05rem' }}>
          {submitting ? 'Submitting…' : '🚀 List My Property — Free'}
        </button>
      </form>
    </main>
  );
}
