-- Real Indian property listings seed data
-- Run: psql "$DATABASE_URL" -f backend/migrations/002_india_properties.sql

INSERT INTO properties (title, description, price, location, property_type, bedrooms, bathrooms, image_url) VALUES

(
  '3BHK Luxury Apartment — Bandra West',
  'Premium 3BHK apartment in the heart of Bandra West, Mumbai. Features Italian marble flooring, modular kitchen, 2 covered parking slots, 24/7 security, and a rooftop swimming pool. Walking distance to Linking Road and Bandstand promenade. Society amenities include gym, clubhouse and children''s play area.',
  45000000.00,
  'Mumbai',
  'apartment',
  3,
  3,
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop'
),

(
  '4BHK Independent Villa — Whitefield',
  'Stunning 4BHK villa in Whitefield, Bengaluru spread over 3,200 sq ft. Private garden, home theatre, modular kitchen, servant quarters, and 3-car garage. Located in a gated community with 24/7 security. Close to ITPL tech park and Phoenix Marketcity mall.',
  18500000.00,
  'Bengaluru',
  'villa',
  4,
  4,
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop'
),

(
  '2BHK Ready-to-Move Flat — Sector 62',
  'Well-maintained 2BHK apartment in Sector 62, Noida. 1,150 sq ft with east-facing balcony, modular kitchen, vitrified tile flooring, and covered parking. Society has power backup, lift, and security. Excellent connectivity to Delhi Metro (Blue Line) and Noida Expressway.',
  7200000.00,
  'Noida',
  'apartment',
  2,
  2,
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop'
),

(
  '3BHK Premium Flat — Jubilee Hills',
  'Spacious 3BHK apartment in Jubilee Hills, Hyderabad''s most prestigious locality. 1,850 sq ft with wooden flooring, designer bathrooms, large balcony with city views, and 2 covered parking. Building has gym, swimming pool, and 24/7 security. Close to Film Nagar and Banjara Hills.',
  12500000.00,
  'Hyderabad',
  'apartment',
  3,
  2,
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop'
),

(
  '2BHK Apartment — Koregaon Park',
  'Elegant 2BHK apartment in Koregaon Park, Pune''s most sought-after neighbourhood. 1,050 sq ft with semi-furnished interiors, modular kitchen, and covered parking. Walking distance to Osho Ashram, restaurants, and cafes. Society has gym, garden, and security.',
  8500000.00,
  'Pune',
  'apartment',
  2,
  2,
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop'
),

(
  '3BHK Independent House — Adyar',
  'Well-built 3BHK independent house in Adyar, Chennai. Ground + 1 floor, 1,800 sq ft built-up area on 1,200 sq ft plot. Teak wood doors, granite kitchen, car parking, and terrace access. Close to Adyar river, IIT Madras, and Besant Nagar beach.',
  9800000.00,
  'Chennai',
  'house',
  3,
  2,
  'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&auto=format&fit=crop'
),

(
  '1BHK Studio Apartment — Salt Lake City',
  'Compact and modern 1BHK studio apartment in Salt Lake City, Kolkata. 650 sq ft with fully furnished interiors, air conditioning, modular kitchen, and covered parking. Ideal for working professionals. Close to Sector V IT hub and City Centre mall.',
  4200000.00,
  'Kolkata',
  'studio',
  1,
  1,
  'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&auto=format&fit=crop'
),

(
  '4BHK Penthouse — Nariman Point',
  'Ultra-luxury 4BHK penthouse on the 28th floor in Nariman Point, Mumbai''s business district. 4,500 sq ft with panoramic Arabian Sea views, private terrace, home automation, imported marble, and 3 parking slots. Concierge, valet, and spa in the building.',
  120000000.00,
  'Mumbai',
  'apartment',
  4,
  4,
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop'
),

(
  '3BHK Apartment — Indiranagar',
  'Modern 3BHK apartment in Indiranagar, one of Bengaluru''s most vibrant localities. 1,600 sq ft with open kitchen, wooden flooring, large balcony, and 2 parking slots. Walking distance to 100 Feet Road restaurants, CMH Road, and Indiranagar Metro station.',
  14000000.00,
  'Bengaluru',
  'apartment',
  3,
  2,
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop'
),

(
  '2BHK Apartment — Satellite',
  'Ready-to-move 2BHK apartment in Satellite, Ahmedabad. 1,100 sq ft with vitrified tiles, modular kitchen, covered parking, and society amenities including gym and garden. Close to SG Highway, Iscon Mall, and CIMS Hospital.',
  5500000.00,
  'Ahmedabad',
  'apartment',
  2,
  2,
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&auto=format&fit=crop'
),

(
  '5BHK Luxury Villa — DLF Phase 2',
  'Grand 5BHK villa in DLF Phase 2, Gurugram. 5,500 sq ft on a 500 sq yard plot with private pool, landscaped garden, home theatre, servant quarters, and 4-car garage. Located in a premium gated community with 24/7 security and club facilities.',
  65000000.00,
  'Gurugram',
  'villa',
  5,
  5,
  'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&auto=format&fit=crop'
),

(
  '3BHK Apartment — Wakad',
  'Spacious 3BHK apartment in Wakad, Pune near Hinjewadi IT Park. 1,450 sq ft with semi-furnished interiors, modular kitchen, 2 balconies, and covered parking. Society has swimming pool, gym, and children''s play area. Excellent connectivity to Baner and Aundh.',
  7800000.00,
  'Pune',
  'apartment',
  3,
  2,
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop'
),

(
  '2BHK Apartment — Madhapur',
  'Modern 2BHK apartment in Madhapur, Hyderabad''s HITEC City area. 1,200 sq ft with open kitchen, wooden flooring, and covered parking. Walking distance to Cyber Towers, Inorbit Mall, and HITEC City Metro station. Ideal for IT professionals.',
  8200000.00,
  'Hyderabad',
  'apartment',
  2,
  2,
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop'
),

(
  '4BHK Independent House — Vasant Kunj',
  'Well-maintained 4BHK independent house in Vasant Kunj, South Delhi. 2,800 sq ft on a 250 sq yard plot with terrace, garden, 2-car parking, and servant quarters. Close to DLF Promenade mall, Vasant Vihar market, and IGI Airport.',
  38000000.00,
  'Delhi',
  'house',
  4,
  3,
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop'
),

(
  '1BHK Apartment — Thane West',
  'Affordable 1BHK apartment in Thane West, Mumbai Metropolitan Region. 650 sq ft with modular kitchen, covered parking, and society amenities. Close to Thane railway station, Viviana Mall, and Eastern Express Highway. Ideal for first-time buyers and investors.',
  4800000.00,
  'Mumbai',
  'apartment',
  1,
  1,
  'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&auto=format&fit=crop'
);
