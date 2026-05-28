import Link from 'next/link';

const TYPE_IMAGES = {
  farmhouse:  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop',
  villa:      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop',
  apartment:  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop',
  flat:       'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop',
  studio:     'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&auto=format&fit=crop',
  house:      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop',
  penthouse:  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop',
  plot:       'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop',
  bungalow:   'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop',
  default:    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&auto=format&fit=crop',
};

function getImageForProperty(image_url, title, property_type) {
  // If a valid-looking URL is stored, use it
  if (image_url && image_url.startsWith('http')) return image_url;

  // Pick based on property_type field
  if (property_type) {
    const key = property_type.toLowerCase();
    if (TYPE_IMAGES[key]) return TYPE_IMAGES[key];
  }

  // Guess from title keywords
  if (title) {
    const t = title.toLowerCase();
    for (const key of Object.keys(TYPE_IMAGES)) {
      if (t.includes(key)) return TYPE_IMAGES[key];
    }
  }

  return TYPE_IMAGES.default;
}

export default function PropertyCard({ property }) {
  const { id, title, price, location, image_url, property_type, bedrooms, bathrooms } = property;
  const imgSrc = getImageForProperty(image_url, title, property_type);

  return (
    <Link href={`/listings/${id}`} style={{ display: 'block' }}>
      <div className="property-card">
        <img
          src={imgSrc}
          alt={title}
          className="property-card__img"
          onError={e => { e.currentTarget.src = TYPE_IMAGES.default; }}
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
