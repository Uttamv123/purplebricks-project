'use strict';

require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function getAllProperties(filters = {}) {
  const conditions = [];
  const values = [];

  if (filters.minPrice !== undefined) {
    values.push(filters.minPrice);
    conditions.push(`price >= $${values.length}`);
  }
  if (filters.maxPrice !== undefined) {
    values.push(filters.maxPrice);
    conditions.push(`price <= $${values.length}`);
  }
  if (filters.location) {
    values.push(filters.location);
    conditions.push(`LOWER(location) = LOWER($${values.length})`);
  }
  if (filters.propertyType) {
    values.push(filters.propertyType);
    conditions.push(`LOWER(property_type) = LOWER($${values.length})`);
  }

  const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';
  const sql = `SELECT * FROM properties ${where} ORDER BY created_at DESC`;
  const { rows } = await pool.query(sql, values);
  return rows;
}

async function getPropertyById(id) {
  const { rows } = await pool.query('SELECT * FROM properties WHERE id = $1', [id]);
  return rows[0] || null;
}

async function createProperty({ title, description, price, location, property_type, bedrooms, bathrooms, image_url }) {
  const sql = `
    INSERT INTO properties (title, description, price, location, property_type, bedrooms, bathrooms, image_url)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
  `;
  const { rows } = await pool.query(sql, [
    title,
    description,
    price,
    location,
    property_type,
    bedrooms,
    bathrooms,
    image_url || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
  ]);
  return rows[0];
}

async function createInquiry({ propertyId, name, email, message }) {
  const sql = `
    INSERT INTO inquiries (property_id, name, email, message)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;
  const { rows } = await pool.query(sql, [propertyId, name, email, message]);
  return rows[0];
}

module.exports = { pool, getAllProperties, getPropertyById, createProperty, createInquiry };
