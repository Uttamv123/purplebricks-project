'use strict';

const { getPropertyById } = require('../db/pool');

const REQUIRED_FIELDS = ['propertyId', 'name', 'email', 'message'];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates an inquiry request body.
 * - 400 if any required fields are missing
 * - 400 if email format is invalid
 * - 422 if propertyId does not reference an existing property
 */
async function validateInquiry(req, res, next) {
  const body = req.body || {};

  // Check required fields
  const missingFields = REQUIRED_FIELDS.filter(
    (field) => body[field] === undefined || body[field] === null || body[field] === ''
  );
  if (missingFields.length > 0) {
    return res.status(400).json({ error: 'Missing required fields', fields: missingFields });
  }

  // Validate email format
  if (!EMAIL_REGEX.test(body.email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Check propertyId exists in DB
  try {
    const property = await getPropertyById(body.propertyId);
    if (!property) {
      return res.status(422).json({ error: 'Property does not exist' });
    }
  } catch (err) {
    return next(err);
  }

  next();
}

module.exports = validateInquiry;
