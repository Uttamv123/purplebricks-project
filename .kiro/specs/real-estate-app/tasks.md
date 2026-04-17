# Implementation Plan: Real Estate App

## Overview

Incremental build of the monorepo: database schema and seed data first, then the Express API with validation, then the Next.js frontend pages and components. Each step wires into the previous one so nothing is left orphaned.

## Tasks

- [x] 1. Set up monorepo structure and configuration files
  - Create `frontend/` and `backend/` directories with their `package.json`, `tsconfig.json` (or `jsconfig.json`), and `.env.example` files
  - Add root `README.md` with setup, env config, migration, and start instructions
  - _Requirements: 9.1, 9.2, 9.3, 9.4_

- [x] 2. Database schema and seed data
  - [x] 2.1 Create SQL migration file
    - Write `backend/migrations/001_init.sql` with `CREATE TABLE properties` and `CREATE TABLE inquiries` exactly as specified in the design, including foreign key and `DEFAULT NOW()` constraints
    - Insert at least five sample `properties` rows
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 9.5_

  - [ ]* 2.2 Write property test for `created_at` auto-population (Property 7)
    - **Property 7: created_at auto-populated**
    - **Validates: Requirements 4.4**

- [x] 3. Backend — DB pool and query helpers
  - [x] 3.1 Implement `backend/src/db/pool.js`
    - Export a `pg.Pool` instance configured from `DATABASE_URL`
    - Add query helper functions: `getAllProperties(filters)`, `getPropertyById(id)`, `createInquiry(payload)`
    - _Requirements: 1.1, 2.1, 3.1_

- [x] 4. Backend — Properties routes
  - [x] 4.1 Implement `GET /properties` with filter support
    - Create `backend/src/routes/properties.js`
    - Build dynamic SQL WHERE clause for `minPrice`, `maxPrice`, `location`, `propertyType`
    - Return 503 on DB error
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

  - [ ]* 4.2 Write property test for filter correctness (Property 1)
    - **Property 1: Filter correctness**
    - **Validates: Requirements 1.2**

  - [ ]* 4.3 Write property test for no-filter returns all (Property 2)
    - **Property 2: No-filter returns all**
    - **Validates: Requirements 1.3**

  - [x] 4.4 Implement `GET /properties/:id`
    - Return 200 + property on match, 404 on missing ID, 503 on DB error
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [ ]* 4.5 Write property test for property detail round-trip (Property 3)
    - **Property 3: Property detail round-trip**
    - **Validates: Requirements 2.2**

- [x] 5. Backend — Validation middleware and Inquiries route
  - [x] 5.1 Implement `backend/src/middleware/validate.js`
    - Check all required fields present; return 400 with missing field list
    - Validate email format with regex; return 400 on mismatch
    - Check `propertyId` exists in DB; return 422 if not
    - _Requirements: 3.3, 3.4, 3.5_

  - [ ]* 5.2 Write property test for missing required fields rejected (Property 5)
    - **Property 5: Missing required fields rejected**
    - **Validates: Requirements 3.3**

  - [ ]* 5.3 Write property test for invalid email rejected by API (Property 6)
    - **Property 6: Invalid email rejected by API**
    - **Validates: Requirements 3.4**

  - [x] 5.4 Implement `POST /inquiries`
    - Create `backend/src/routes/inquiries.js`
    - Apply validation middleware; persist inquiry; return 201 + created object; return 503 on DB error
    - _Requirements: 3.1, 3.2, 3.6_

  - [ ]* 5.5 Write property test for inquiry creation round-trip (Property 4)
    - **Property 4: Inquiry creation round-trip**
    - **Validates: Requirements 3.2**

- [x] 6. Backend — Express app wiring and error handling
  - Create `backend/src/app.js`: mount properties and inquiries routers, register global error-handling middleware that returns 500 for unhandled errors
  - Create `backend/src/index.js` entry point that starts the server on `PORT`
  - _Requirements: 1.4, 2.4, 3.6_

- [x] 7. Checkpoint — Backend tests pass
  - Ensure all backend unit and property tests pass, ask the user if questions arise.

- [x] 8. Frontend — API client
  - [x] 8.1 Implement `frontend/lib/api.js`
    - `getProperties(filters)` — `GET /properties` with serialised query string
    - `getProperty(id)` — `GET /properties/:id`
    - `submitInquiry(payload)` — `POST /inquiries`
    - Read base URL from `NEXT_PUBLIC_API_URL`
    - _Requirements: 5.3, 6.1, 7.1, 8.2_

- [x] 9. Frontend — Shared components
  - [x] 9.1 Implement `PropertyCard` component
    - Display thumbnail, title, price, location; wrap in a link to `/listings/:id`
    - _Requirements: 6.6_

  - [ ]* 9.2 Write property test for property card click navigation (Property 10)
    - **Property 10: Property card click navigates to correct detail page**
    - **Validates: Requirements 6.6**

  - [x] 9.3 Implement `FilterPanel` component
    - Controlled inputs for `minPrice`, `maxPrice`, `location`, `propertyType`; call `onChange` callback on each change
    - _Requirements: 6.2, 6.3_

  - [x] 9.4 Implement `LoadingSpinner` and `ErrorMessage` components
    - `LoadingSpinner`: visible during in-flight fetches
    - `ErrorMessage`: displays `error` field from API response or generic fallback
    - _Requirements: 6.4, 6.5, 7.3_

  - [x] 9.5 Implement `ContactForm` component
    - Fields: `name`, `email`, `message`; client-side validation before submit; show inline errors; on 201 show success banner and reset fields; on error display API error details
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6_

  - [ ]* 9.6 Write property test for contact form submits correct payload (Property 12)
    - **Property 12: Contact form submits correct payload**
    - **Validates: Requirements 8.2**

  - [ ]* 9.7 Write property test for empty required fields block submission (Property 13)
    - **Property 13: Empty required fields block submission**
    - **Validates: Requirements 8.5**

  - [ ]* 9.8 Write property test for invalid email blocks form submission (Property 14)
    - **Property 14: Invalid email blocks form submission**
    - **Validates: Requirements 8.6**

- [x] 10. Frontend — Home page
  - [x] 10.1 Implement `/` Home page (`frontend/app/page.jsx`)
    - Hero section with search input and CTA navigating to `/listings`
    - Fetch featured listings from `GET /properties` and render `PropertyCard` components
    - _Requirements: 5.1, 5.3_

  - [ ]* 10.2 Write property test for home page search navigation (Property 8)
    - **Property 8: Home page search navigates with term**
    - **Validates: Requirements 5.2**

- [x] 11. Frontend — Listings page
  - [x] 11.1 Implement `/listings` Listings page (`frontend/app/listings/page.jsx`)
    - Render `FilterPanel`; on filter change re-fetch from `GET /properties` with updated params; render `PropertyCard` grid; show `LoadingSpinner` during fetch; show `ErrorMessage` on failure
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

  - [ ]* 11.2 Write property test for filter change triggers re-fetch (Property 9)
    - **Property 9: Filter change triggers re-fetch with correct params**
    - **Validates: Requirements 6.3**

- [x] 12. Frontend — Property Detail page
  - [x] 12.1 Implement `/listings/[id]` Property Detail page (`frontend/app/listings/[id]/page.jsx`)
    - Fetch property via `getProperty(id)`; display all required fields; show `LoadingSpinner` during fetch; show "Property not found" + back link on 404; render `ContactForm` with current `propertyId`
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 8.1_

  - [ ]* 12.2 Write property test for property detail page renders all required fields (Property 11)
    - **Property 11: Property detail page renders all required fields**
    - **Validates: Requirements 7.2**

- [x] 13. Final checkpoint — Ensure all tests pass
  - Ensure all frontend and backend tests pass, ask the user if questions arise.
