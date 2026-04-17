'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import FilterPanel from '../../components/FilterPanel';
import PropertyCard from '../../components/PropertyCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import { getProperties } from '../../lib/api';

function ListingsContent() {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    location: searchParams.get('location') || '',
    propertyType: searchParams.get('propertyType') || '',
  });
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sync filters when URL params change (e.g. navigating from home search)
  useEffect(() => {
    setFilters({
      minPrice: searchParams.get('minPrice') || '',
      maxPrice: searchParams.get('maxPrice') || '',
      location: searchParams.get('location') || '',
      propertyType: searchParams.get('propertyType') || '',
    });
  }, [searchParams.toString()]);

  useEffect(() => {
    let cancelled = false;
    async function fetchProperties() {
      setLoading(true);
      setError(null);
      try {
        const data = await getProperties(filters);
        if (!cancelled) setProperties(data);
      } catch (err) {
        if (!cancelled) setError(err.message || 'Something went wrong');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchProperties();
    return () => { cancelled = true; };
  }, [filters]);

  return (
    <main className="section">
      <div className="listings-header">
        <h1 className="section__title" style={{ marginBottom: 0 }}>Property Listings</h1>
        {!loading && !error && (
          <span className="listings-count">{properties.length} propert{properties.length === 1 ? 'y' : 'ies'} found</span>
        )}
      </div>

      <FilterPanel filters={filters} onChange={setFilters} />

      {loading && <LoadingSpinner />}
      {!loading && error && <ErrorMessage message={error} />}
      {!loading && !error && (
        properties.length === 0
          ? <p style={{ color: 'var(--text-muted)', marginTop: '2rem' }}>No properties match your filters.</p>
          : <div className="property-grid">
              {properties.map((p) => <PropertyCard key={p.id} property={p} />)}
            </div>
      )}
    </main>
  );
}

export default function ListingsPage() {
  return (
    <Suspense fallback={<main className="section"><LoadingSpinner /></main>}>
      <ListingsContent />
    </Suspense>
  );
}
