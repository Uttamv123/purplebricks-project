'use strict';

const { Router } = require('express');
const { getAllProperties, getPropertyById, createProperty } = require('../db/pool');

const router = Router();

// GET /properties
router.get('/', async (req, res) => {
  const { minPrice, maxPrice, location, propertyType } = req.query;
  const filters = {};
  if (minPrice !== undefined) filters.minPrice = Number(minPrice);
  if (maxPrice !== undefined) filters.maxPrice = Number(maxPrice);
  if (location !== undefined) filters.location = location;
  if (propertyType !== undefined) filters.propertyType = propertyType;

  try {
    const properties = await getAllProperties(filters);
    res.json(properties);
  } catch (err) {
    res.status(503).json({ error: 'Service unavailable: database error' });
  }
});

// POST /properties — user-generated listing
router.post('/', async (req, res) => {
  const { title, description, price, location, property_type, bedrooms, bathrooms, image_url } = req.body;

  // Validate required fields
  const missing = [];
  if (!title)         missing.push('title');
  if (!price)         missing.push('price');
  if (!location)      missing.push('location');
  if (!property_type) missing.push('property_type');
  if (!description)   missing.push('description');

  if (missing.length > 0) {
    return res.status(400).json({ error: 'Missing required fields', fields: missing });
  }

  try {
    const property = await createProperty({
      title,
      description,
      price: Number(price),
      location,
      property_type,
      bedrooms: Number(bedrooms) || 0,
      bathrooms: Number(bathrooms) || 0,
      image_url,
    });
    res.status(201).json(property);
  } catch (err) {
    res.status(503).json({ error: 'Service unavailable: database error' });
  }
});

// GET /properties/:id
router.get('/:id', async (req, res) => {
  try {
    const property = await getPropertyById(req.params.id);
    if (!property) return res.status(404).json({ error: 'Property not found' });
    res.json(property);
  } catch (err) {
    res.status(503).json({ error: 'Service unavailable: database error' });
  }
});

module.exports = router;
