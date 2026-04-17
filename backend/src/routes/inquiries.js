'use strict';

const { Router } = require('express');
const validateInquiry = require('../middleware/validate');
const { createInquiry } = require('../db/pool');

const router = Router();

// POST /inquiries
router.post('/', validateInquiry, async (req, res) => {
  const { propertyId, name, email, message } = req.body;
  try {
    const inquiry = await createInquiry({ propertyId, name, email, message });
    res.status(201).json(inquiry);
  } catch (err) {
    res.status(503).json({ error: 'Service unavailable: database error' });
  }
});

module.exports = router;
