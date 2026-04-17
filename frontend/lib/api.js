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
 * Fetch a list of properties, optionally filtered.
 * @param {Object} [filters] - { minPrice, maxPrice, location, propertyType }
 * @returns {Promise<Array>}
 */
export async function getProperties(filters = {}) {
  const qs = buildQueryString(filters);
  const res = await fetch(`${BASE_URL}/properties${qs}`);
  return handleResponse(res);
}

/**
 * Fetch a single property by ID.
 * @param {number|string} id
 * @returns {Promise<Object>}
 */
export async function getProperty(id) {
  const res = await fetch(`${BASE_URL}/properties/${id}`);
  return handleResponse(res);
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
