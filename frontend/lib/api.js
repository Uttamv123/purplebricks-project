const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Builds a query string from a filters object, skipping null/undefined/empty values.
 * @param {Object} filters
 * @returns {string} e.g. "?minPrice=100000&location=London"
 */
function buildQueryString(filters = {}) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(filters)) {
    if (value !== undefined && value !== null && value !== '') {
      params.append(key, value);
    }
  }
  const qs = params.toString();
  return qs ? `?${qs}` : '';
}

/**
 * Handles a fetch Response: returns parsed JSON on success, throws parsed error body on failure.
 * @param {Response} res
 * @returns {Promise<any>}
 */
async function handleResponse(res) {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || `HTTP ${res.status}`);
    err.status = res.status;
    err.body = data;
    throw err;
  }
  return data;
}

/**
 * Fetch a list of properties from DynamoDB via Netlify function, optionally filtered client-side.
 * @param {Object} [filters] - { minPrice, maxPrice, location, propertyType }
 * @returns {Promise<Array>}
 */
export async function getProperties(filters = {}) {
  const res = await fetch('/.netlify/functions/getProperties');
  const items = await handleResponse(res);

  // Apply filters client-side since the Lambda does a full scan
  return items.filter(p => {
    if (filters.minPrice && p.price < Number(filters.minPrice)) return false;
    if (filters.maxPrice && p.price > Number(filters.maxPrice)) return false;
    if (filters.location && !p.location?.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.propertyType && p.property_type !== filters.propertyType) return false;
    return true;
  });
}

/**
 * Fetch a single property by ID from DynamoDB via Netlify function.
 * @param {number|string} id
 * @returns {Promise<Object>}
 */
export async function getProperty(id) {
  const res = await fetch('/.netlify/functions/getProperties');
  const items = await handleResponse(res);
  const property = items.find(p => String(p.id) === String(id));
  if (!property) {
    const err = new Error('Property not found');
    err.status = 404;
    throw err;
  }
  return property;
}

/**
 * Submit a contact inquiry.
 * @param {{ propertyId: number, name: string, email: string, message: string }} payload
 * @returns {Promise<Object>}
 */
export async function submitInquiry(payload) {
  const res = await fetch(`${BASE_URL}/inquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return handleResponse(res);
}

/**
 * Submit a new property listing.
 * @param {{ title, description, price, location, property_type, bedrooms, bathrooms, image_url }} payload
 * @returns {Promise<Object>}
 */
export async function submitProperty(payload) {
  const res = await fetch(`${BASE_URL}/properties`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return handleResponse(res);
}
