import Link from 'next/link';

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop';

export default function PropertyCard({ property }) {
  const { id, title, price, location, image_url, property_type, bedrooms, bathrooms } = property;
  return (
    <Link href={`/listings/${id}`} style={{ display: 'block' }}>
      <div className="property-card">
        <img
          src={image_url || FALLBACK_IMG}
          alt={title}
          className="property-card__img"
          onError={e => { e.currentTarget.src = FALLBACK_IMG; }}
        />
        <div className="property-card__body">
          <span className="property-card__type">{property_type}</span>
          <h3 className="property-card__title">{title}</h3>
          <p className="property-card__price">₹{Number(price).toLocaleString('en-IN')}</p>
          <p className="property-card__location">📍 {location}</p>
          <div className="property-card__meta">
            <span>🛏 {bedrooms} bed</span>
            <span>🚿 {bathrooms} bath</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
