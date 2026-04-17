# Requirements Document

## Introduction

A full-stack real estate web application (Purplebricks-style MVP) that allows users to browse property listings, view property details, and submit inquiries. The system consists of a Next.js frontend, a Node.js/Express REST API backend, and a PostgreSQL database.

## Glossary

- **System**: The full-stack real estate web application as a whole
- **Frontend**: The Next.js/React web client served to users in a browser
- **API**: The Node.js/Express HTTP server exposing REST endpoints
- **Database**: The PostgreSQL relational database storing persistent data
- **Property**: A real estate listing record containing address, price, description, and metadata
- **Inquiry**: A contact form submission linking a prospective buyer to a property
- **Listing**: A publicly visible property record displayed on the Listings page
- **Filter**: A query parameter or UI control used to narrow the set of displayed listings
- **User**: An anonymous visitor browsing the application

## Requirements

### Requirement 1: Property Listings API

**User Story:** As a user, I want to retrieve a list of properties, so that I can browse available real estate listings.

#### Acceptance Criteria

1. THE API SHALL expose a `GET /properties` endpoint that returns a JSON array of Property objects.
2. WHEN a request to `GET /properties` includes query parameters for `minPrice`, `maxPrice`, `location`, or `propertyType`, THE API SHALL return only Property objects matching all supplied filter criteria.
3. WHEN a request to `GET /properties` includes no filter parameters, THE API SHALL return all available Property objects.
4. IF the Database is unavailable when `GET /properties` is called, THEN THE API SHALL return an HTTP 503 response with a descriptive error message.

---

### Requirement 2: Property Detail API

**User Story:** As a user, I want to retrieve a single property by its identifier, so that I can view full details of a specific listing.

#### Acceptance Criteria

1. THE API SHALL expose a `GET /properties/:id` endpoint that returns a single Property object as JSON.
2. WHEN a valid property `id` is provided, THE API SHALL return the matching Property object with HTTP 200.
3. IF the provided `id` does not match any Property in the Database, THEN THE API SHALL return an HTTP 404 response with a descriptive error message.
4. IF the Database is unavailable when `GET /properties/:id` is called, THEN THE API SHALL return an HTTP 503 response with a descriptive error message.

---

### Requirement 3: Inquiry Submission API

**User Story:** As a user, I want to submit a contact inquiry about a property, so that I can express interest and be contacted by an agent.

#### Acceptance Criteria

1. THE API SHALL expose a `POST /inquiries` endpoint that accepts a JSON body containing `propertyId`, `name`, `email`, and `message` fields.
2. WHEN a valid inquiry payload is received, THE API SHALL persist the Inquiry to the Database and return HTTP 201 with the created Inquiry object.
3. IF the request body is missing any required field (`propertyId`, `name`, `email`, or `message`), THEN THE API SHALL return an HTTP 400 response listing the missing fields.
4. IF the `email` field does not conform to a valid email address format, THEN THE API SHALL return an HTTP 400 response with a descriptive validation error.
5. IF the `propertyId` does not reference an existing Property, THEN THE API SHALL return an HTTP 422 response with a descriptive error message.
6. IF the Database is unavailable when `POST /inquiries` is called, THEN THE API SHALL return an HTTP 503 response with a descriptive error message.

---

### Requirement 4: Database Schema

**User Story:** As a developer, I want a well-defined PostgreSQL schema, so that property and inquiry data is stored consistently and relationally.

#### Acceptance Criteria

1. THE Database SHALL contain a `properties` table with columns: `id` (primary key), `title`, `description`, `price`, `location`, `property_type`, `bedrooms`, `bathrooms`, `image_url`, `created_at`.
2. THE Database SHALL contain an `inquiries` table with columns: `id` (primary key), `property_id` (foreign key referencing `properties.id`), `name`, `email`, `message`, `created_at`.
3. WHEN a row is inserted into `inquiries` with a `property_id` that does not exist in `properties`, THE Database SHALL reject the insert with a foreign key constraint violation.
4. THE Database SHALL assign `created_at` a default value of the current timestamp for both `properties` and `inquiries` rows.

---

### Requirement 5: Home Page

**User Story:** As a user, I want to see a home page with a search entry point, so that I can quickly start browsing listings.

#### Acceptance Criteria

1. THE Frontend SHALL render a Home page at the `/` route containing a hero section with a property search input and a call-to-action that navigates to the Listings page.
2. WHEN a user submits a search term on the Home page, THE Frontend SHALL navigate to the Listings page with the search term applied as a filter.
3. THE Frontend SHALL display a curated set of featured Property listings on the Home page by fetching data from `GET /properties`.

---

### Requirement 6: Listings Page with Filters

**User Story:** As a user, I want to browse all properties with filtering controls, so that I can narrow results to listings that match my criteria.

#### Acceptance Criteria

1. THE Frontend SHALL render a Listings page at the `/listings` route that displays all Property listings fetched from `GET /properties`.
2. THE Frontend SHALL provide filter controls for `minPrice`, `maxPrice`, `location`, and `propertyType` on the Listings page.
3. WHEN a user changes a filter value, THE Frontend SHALL re-fetch properties from `GET /properties` with the updated filter parameters and update the displayed listings without a full page reload.
4. WHILE a fetch request to `GET /properties` is in progress, THE Frontend SHALL display a loading indicator to the user.
5. IF `GET /properties` returns an error response, THEN THE Frontend SHALL display a user-readable error message on the Listings page.
6. WHEN a user clicks a Property listing card, THE Frontend SHALL navigate to the Property Detail page for that property.

---

### Requirement 7: Property Detail Page

**User Story:** As a user, I want to view full details of a property, so that I can evaluate whether it meets my needs before making an inquiry.

#### Acceptance Criteria

1. THE Frontend SHALL render a Property Detail page at the `/listings/:id` route displaying the full Property object fetched from `GET /properties/:id`.
2. THE Frontend SHALL display the property `title`, `description`, `price`, `location`, `property_type`, `bedrooms`, `bathrooms`, and `image_url` on the Property Detail page.
3. WHILE a fetch request to `GET /properties/:id` is in progress, THE Frontend SHALL display a loading indicator.
4. IF `GET /properties/:id` returns HTTP 404, THEN THE Frontend SHALL display a "Property not found" message and a link back to the Listings page.
5. THE Frontend SHALL render the Contact Form (Requirement 8) on the Property Detail page.

---

### Requirement 8: Contact / Inquiry Form

**User Story:** As a user, I want to submit a contact form on a property page, so that I can express interest in a listing.

#### Acceptance Criteria

1. THE Frontend SHALL render a contact form containing `name`, `email`, and `message` fields on the Property Detail page.
2. WHEN a user submits the contact form with all required fields populated, THE Frontend SHALL send a `POST /inquiries` request with the form data and the current `propertyId`.
3. IF the `POST /inquiries` request returns HTTP 201, THEN THE Frontend SHALL display a success confirmation message to the user and reset the form fields.
4. IF the `POST /inquiries` request returns an error response, THEN THE Frontend SHALL display the error details returned by the API to the user.
5. WHEN a user attempts to submit the contact form with one or more empty required fields, THE Frontend SHALL display inline validation errors and SHALL NOT submit the request to the API.
6. IF the `email` field value does not match a valid email format, THEN THE Frontend SHALL display an inline validation error and SHALL NOT submit the request to the API.

---

### Requirement 9: Project Structure and Local Development

**User Story:** As a developer, I want a clear folder structure and local run instructions, so that I can set up and run the application on my machine.

#### Acceptance Criteria

1. THE System SHALL organise source code into a monorepo with a `frontend/` directory for the Next.js application and a `backend/` directory for the Express API.
2. THE System SHALL include a `backend/.env.example` file documenting all required environment variables (`DATABASE_URL`, `PORT`).
3. THE System SHALL include a `frontend/.env.example` file documenting all required environment variables (`NEXT_PUBLIC_API_URL`).
4. THE System SHALL include a `README.md` at the repository root containing step-by-step instructions to install dependencies, configure environment variables, initialise the Database schema, and start both the Frontend and API locally.
5. THE System SHALL include a SQL migration file (or equivalent seed script) that creates the `properties` and `inquiries` tables and inserts at least five sample Property records for local development.
