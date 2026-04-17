'use strict';

const express = require('express');
const cors = require('cors');

const propertiesRouter = require('./routes/properties');
const inquiriesRouter = require('./routes/inquiries');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/properties', propertiesRouter);
app.use('/inquiries', inquiriesRouter);

// Global error-handling middleware
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
