-- Update property images with Indian-style property photos
-- Run this in pgAdmin Query Tool against the real_estate database

UPDATE properties SET image_url = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop'
WHERE title LIKE '%Bandra West%';

UPDATE properties SET image_url = 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop'
WHERE title LIKE '%Whitefield%';

UPDATE properties SET image_url = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop'
WHERE title LIKE '%Sector 62%';

UPDATE properties SET image_url = 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop'
WHERE title LIKE '%Jubilee Hills%';

UPDATE properties SET image_url = 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&auto=format&fit=crop'
WHERE title LIKE '%Koregaon Park%';

UPDATE properties SET image_url = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop'
WHERE title LIKE '%Adyar%';

UPDATE properties SET image_url = 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&auto=format&fit=crop'
WHERE title LIKE '%Salt Lake%';

UPDATE properties SET image_url = 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop'
WHERE title LIKE '%Nariman Point%';

UPDATE properties SET image_url = 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&auto=format&fit=crop'
WHERE title LIKE '%Indiranagar%';

UPDATE properties SET image_url = 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop'
WHERE title LIKE '%Satellite%';

UPDATE properties SET image_url = 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop'
WHERE title LIKE '%DLF Phase%';

UPDATE properties SET image_url = 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop'
WHERE title LIKE '%Wakad%';

UPDATE properties SET image_url = 'https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=800&auto=format&fit=crop'
WHERE title LIKE '%Madhapur%';

UPDATE properties SET image_url = 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&auto=format&fit=crop'
WHERE title LIKE '%Vasant Kunj%';

UPDATE properties SET image_url = 'https://images.unsplash.com/photo-1600210491892-03d54730d73e?w=800&auto=format&fit=crop'
WHERE title LIKE '%Thane West%';
