'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import LoadingSpinner from '../../../components/LoadingSpinner';
import ContactForm from '../../../components/ContactForm';
import { getProperty } from '../../../lib/api';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    async function fetchProperty() {
      setLoading(true); setNotFound(false); setError(null);
      try {
        const data = await getProperty(id);
        if (!cancelled) setProperty(data);
      } catch (err) {
        if (!cancelled) {
          if (err.status === 404) setNotFound(true);
          else setError(err.message || 'Something went wrong');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchProperty();
    return () => { cancelled = true; };
  }, [id]);

  if (loading) return <main className="section"><LoadingSpinner /></main>;

  if (notFound) return (
    <main className="section">
      <div className="not-found">
        <h2>Property Not Found</h2>
        <p>This listing may have been removed or the link is incorrect.</p>
        <Link href="/listings" className="btn-outline">← Back to Listings</Link>
      </div>
    </main>
  );

  if (error) return (
    <main className="section">
      <div className="not-found">
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <Link href="/listings" className="btn-outline">← Back to Listings</Link>
      </div>
    </main>
  );

  return (
    <main className="section">
      <Link href="/listings" className="detail-back">← Back to Listings</Link>

      {property.image_url && (
        <img src={property.image_url} alt={property.title} className="detail-img" />
      )}

      <h1 className="detail-title">{property.title}</h1>
      <p className="detail-price">₹{Number(property.price).toLocaleString('en-IN')}</p>
      <p className="detail-location">📍 {property.location}</p>

      <div className="detail-badges">
        <span className="detail-badge">🏠 {property.property_type}</span>
        <span className="detail-badge">🛏 {property.bedrooms} BHK</span>
        <span className="detail-badge">🚿 {property.bathrooms} bath{property.bathrooms !== 1 ? 's' : ''}</span>
      </div>

      <p className="detail-desc">{property.description}</p>

      <div className="detail-contact-section">
        <h2 className="detail-contact-title">Enquire About This Property</h2>
        <ContactForm propertyId={Number(id)} />
      </div>
    </main>
  );
}
