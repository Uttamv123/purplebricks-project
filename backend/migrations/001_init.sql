CREATE TABLE properties (
  id            SERIAL PRIMARY KEY,
  title         TEXT NOT NULL,
  description   TEXT NOT NULL,
  price         NUMERIC(12, 2) NOT NULL,
  location      TEXT NOT NULL,
  property_type TEXT NOT NULL,
  bedrooms      INTEGER NOT NULL,
  bathrooms     INTEGER NOT NULL,
  image_url     TEXT NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE inquiries (
  id          SERIAL PRIMARY KEY,
  property_id INTEGER NOT NULL REFERENCES properties(id),
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  message     TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO properties (title, description, price, location, property_type, bedrooms, bathrooms, image_url) VALUES
  (
    'Modern City Centre Flat',
    'A stylish two-bedroom flat in the heart of the city with open-plan living, floor-to-ceiling windows, and a private balcony.',
    325000.00,
    'Manchester',
    'flat',
    2,
    1,
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
  ),
  (
    'Spacious Family Home',
    'A detached four-bedroom house on a quiet cul-de-sac with a large rear garden, double garage, and recently renovated kitchen.',
    575000.00,
    'Leeds',
    'house',
    4,
    2,
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800'
  ),
  (
    'Cosy Studio Apartment',
    'A well-appointed studio apartment ideal for a first-time buyer or investor, located minutes from the train station.',
    149500.00,
    'Birmingham',
    'studio',
    0,
    1,
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
  ),
  (
    'Victorian Terraced House',
    'A charming three-bedroom Victorian terrace retaining many original features, with a south-facing garden and off-street parking.',
    420000.00,
    'Bristol',
    'house',
    3,
    1,
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800'
  ),
  (
    'Luxury Penthouse Suite',
    'A stunning top-floor penthouse with panoramic skyline views, a wraparound terrace, concierge service, and underground parking.',
    895000.00,
    'London',
    'flat',
    3,
    2,
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
  ),
  (
    'Countryside Cottage',
    'A picturesque two-bedroom stone cottage set in half an acre of gardens, with exposed beams, an inglenook fireplace, and far-reaching rural views.',
    285000.00,
    'Yorkshire',
    'house',
    2,
    1,
    'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800'
  );
