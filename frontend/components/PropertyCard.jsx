import Link from 'next/link';

export default function PropertyCard({ property }) {
  const { id, title, price, location, image_url, property_type, bedrooms, bathrooms } = property;
  return (
    <Link href={`/listings/${id}`} style={{ display: 'block' }}>
      <div className="property-card">
        <img src={image_url} alt={title} className="property-card__img" />
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
