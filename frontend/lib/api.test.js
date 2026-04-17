/**
 * Unit tests for frontend/lib/api.js
 */

// Mock fetch globally
global.fetch = jest.fn();

// Set the base URL env var before importing the module
process.env.NEXT_PUBLIC_API_URL = 'http://localhost:4000';

const { getProperties, getProperty, submitInquiry } = require('./api');

function mockFetch(status, body) {
  global.fetch.mockResolvedValueOnce({
    ok: status >= 200 && status < 300,
    status,
    json: () => Promise.resolve(body),
  });
}

beforeEach(() => {
  jest.clearAllMocks();
});

describe('getProperties', () => {
  it('calls GET /properties with no query string when no filters', async () => {
    mockFetch(200, []);
    await getProperties();
    expect(fetch).toHaveBeenCalledWith('http://localhost:4000/properties');
  });

  it('serialises defined filter values into query string', async () => {
    mockFetch(200, []);
    await getProperties({ minPrice: 100000, location: 'London' });
    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:4000/properties?minPrice=100000&location=London'
    );
  });

  it('skips undefined, null, and empty-string filter values', async () => {
    mockFetch(200, []);
    await getProperties({ minPrice: undefined, maxPrice: null, location: '', propertyType: 'flat' });
    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:4000/properties?propertyType=flat'
    );
  });

  it('returns parsed JSON on success', async () => {
    const data = [{ id: 1, title: 'Test' }];
    mockFetch(200, data);
    const result = await getProperties();
    expect(result).toEqual(data);
  });

  it('throws with status and body on non-ok response', async () => {
    mockFetch(503, { error: 'DB unavailable' });
    await expect(getProperties()).rejects.toMatchObject({
      status: 503,
      body: { error: 'DB unavailable' },
    });
  });
});

describe('getProperty', () => {
  it('calls GET /properties/:id', async () => {
    mockFetch(200, { id: 42 });
    await getProperty(42);
    expect(fetch).toHaveBeenCalledWith('http://localhost:4000/properties/42');
  });

  it('returns the property object on success', async () => {
    const prop = { id: 5, title: 'Nice flat' };
    mockFetch(200, prop);
    const result = await getProperty(5);
    expect(result).toEqual(prop);
  });

  it('throws with status 404 when property not found', async () => {
    mockFetch(404, { error: 'Property not found' });
    await expect(getProperty(999)).rejects.toMatchObject({ status: 404 });
  });
});

describe('submitInquiry', () => {
  const payload = { propertyId: 1, name: 'Alice', email: 'alice@example.com', message: 'Interested' };

  it('calls POST /inquiries with JSON body and correct headers', async () => {
    mockFetch(201, { id: 10, ...payload });
    await submitInquiry(payload);
    expect(fetch).toHaveBeenCalledWith('http://localhost:4000/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  });

  it('returns the created inquiry on 201', async () => {
    const created = { id: 10, ...payload };
    mockFetch(201, created);
    const result = await submitInquiry(payload);
    expect(result).toEqual(created);
  });

  it('throws with status 400 on validation error', async () => {
    mockFetch(400, { error: 'Missing required fields', fields: ['name'] });
    await expect(submitInquiry({ ...payload, name: '' })).rejects.toMatchObject({ status: 400 });
  });

  it('throws with status 422 when propertyId does not exist', async () => {
    mockFetch(422, { error: 'Property does not exist' });
    await expect(submitInquiry({ ...payload, propertyId: 9999 })).rejects.toMatchObject({ status: 422 });
  });
});
