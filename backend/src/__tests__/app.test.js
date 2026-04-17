'use strict';

const request = require('supertest');

// Mock the db/pool module before requiring app
jest.mock('../db/pool', () => ({
  pool: {},
  getAllProperties: jest.fn(),
  getPropertyById: jest.fn(),
  createInquiry: jest.fn(),
}));

const app = require('../app');
const { getAllProperties, getPropertyById, createInquiry } = require('../db/pool');

beforeEach(() => {
  jest.clearAllMocks();
});

// ---------------------------------------------------------------------------
// GET /properties
// ---------------------------------------------------------------------------
describe('GET /properties', () => {
  test('returns 200 with an array of properties', async () => {
    const mockProperties = [
      { id: 1, title: 'House A', price: 200000, location: 'London', property_type: 'house' },
      { id: 2, title: 'Flat B', price: 150000, location: 'Manchester', property_type: 'flat' },
    ];
    getAllProperties.mockResolvedValue(mockProperties);

    const res = await request(app).get('/properties');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(2);
    expect(res.body[0].title).toBe('House A');
  });

  test('passes filter query params to getAllProperties', async () => {
    const filtered = [
      { id: 1, title: 'House A', price: 200000, location: 'London', property_type: 'house' },
    ];
    getAllProperties.mockResolvedValue(filtered);

    const res = await request(app)
      .get('/properties')
      .query({ minPrice: '100000', maxPrice: '300000', location: 'London', propertyType: 'house' });

    expect(res.status).toBe(200);
    expect(getAllProperties).toHaveBeenCalledWith({
      minPrice: 100000,
      maxPrice: 300000,
      location: 'London',
      propertyType: 'house',
    });
    expect(res.body).toEqual(filtered);
  });

  test('returns 503 on DB failure', async () => {
    getAllProperties.mockRejectedValue(new Error('DB connection failed'));

    const res = await request(app).get('/properties');

    expect(res.status).toBe(503);
    expect(res.body).toHaveProperty('error');
  });
});

// ---------------------------------------------------------------------------
// GET /properties/:id
// ---------------------------------------------------------------------------
describe('GET /properties/:id', () => {
  test('returns 200 with property on valid ID', async () => {
    const mockProperty = { id: 1, title: 'House A', price: 200000, location: 'London' };
    getPropertyById.mockResolvedValue(mockProperty);

    const res = await request(app).get('/properties/1');

    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockProperty);
  });

  test('returns 404 when property is not found', async () => {
    getPropertyById.mockResolvedValue(null);

    const res = await request(app).get('/properties/9999');

    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error');
  });

  test('returns 503 on DB failure', async () => {
    getPropertyById.mockRejectedValue(new Error('DB connection failed'));

    const res = await request(app).get('/properties/1');

    expect(res.status).toBe(503);
    expect(res.body).toHaveProperty('error');
  });
});

// ---------------------------------------------------------------------------
// POST /inquiries
// ---------------------------------------------------------------------------
describe('POST /inquiries', () => {
  const validPayload = {
    propertyId: 1,
    name: 'Alice Smith',
    email: 'alice@example.com',
    message: 'I am interested in this property.',
  };

  test('returns 201 with created inquiry on valid payload', async () => {
    // validate.js calls getPropertyById to check existence
    getPropertyById.mockResolvedValue({ id: 1, title: 'House A' });
    const createdInquiry = {
      id: 10,
      property_id: 1,
      name: 'Alice Smith',
      email: 'alice@example.com',
      message: 'I am interested in this property.',
      created_at: new Date().toISOString(),
    };
    createInquiry.mockResolvedValue(createdInquiry);

    const res = await request(app).post('/inquiries').send(validPayload);

    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({
      name: 'Alice Smith',
      email: 'alice@example.com',
      message: 'I am interested in this property.',
    });
  });

  test('returns 400 with field list when required fields are missing', async () => {
    const res = await request(app)
      .post('/inquiries')
      .send({ name: 'Alice Smith' }); // missing propertyId, email, message

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
    expect(res.body).toHaveProperty('fields');
    expect(res.body.fields).toEqual(expect.arrayContaining(['propertyId', 'email', 'message']));
  });

  test('returns 400 when email is invalid', async () => {
    const res = await request(app)
      .post('/inquiries')
      .send({ ...validPayload, email: 'not-an-email' });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  test('returns 422 when propertyId does not exist', async () => {
    getPropertyById.mockResolvedValue(null); // property not found

    const res = await request(app).post('/inquiries').send(validPayload);

    expect(res.status).toBe(422);
    expect(res.body).toHaveProperty('error');
  });

  test('returns 503 on DB failure during inquiry creation', async () => {
    getPropertyById.mockResolvedValue({ id: 1, title: 'House A' });
    createInquiry.mockRejectedValue(new Error('DB connection failed'));

    const res = await request(app).post('/inquiries').send(validPayload);

    expect(res.status).toBe(503);
    expect(res.body).toHaveProperty('error');
  });
});
