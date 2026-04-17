# Real Estate App

A Purplebricks-style MVP full-stack real estate web application. Users can browse property listings, filter them, view property details, and submit contact inquiries.

**Stack:** Next.js (frontend) · Node.js/Express (API) · PostgreSQL (database)

---

## Project Structure

```
/
├── frontend/          # Next.js application
│   ├── app/           # App Router pages and layouts
│   ├── components/    # Shared React components
│   ├── lib/           # API client helpers
│   └── .env.example
├── backend/           # Express REST API
│   ├── src/
│   │   ├── routes/    # Express routers
│   │   ├── middleware/ # Validation, error handling
│   │   └── db/        # pg pool and query helpers
│   ├── migrations/    # SQL migration files
│   └── .env.example
└── README.md
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [PostgreSQL](https://www.postgresql.org/) v14 or later (running locally or via Docker)

---

## Setup

### 1. Install dependencies

Install backend and frontend dependencies separately:

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 2. Configure environment variables

Copy the example env files and fill in your values:

```bash
# Backend
cp backend/.env.example backend/.env

# Frontend
cp frontend/.env.example frontend/.env.local
```

**Backend (`backend/.env`):**

| Variable       | Description                                      | Example                                          |
|----------------|--------------------------------------------------|--------------------------------------------------|
| `DATABASE_URL` | PostgreSQL connection string                     | `postgresql://postgres:password@localhost:5432/real_estate` |
| `PORT`         | Port the Express API listens on                  | `4000`                                           |

**Frontend (`frontend/.env.local`):**

| Variable               | Description                          | Example                      |
|------------------------|--------------------------------------|------------------------------|
| `NEXT_PUBLIC_API_URL`  | Base URL of the Express API          | `http://localhost:4000`      |

### 3. Create the database

Create a PostgreSQL database matching the name in your `DATABASE_URL`:

```bash
psql -U postgres -c "CREATE DATABASE real_estate;"
```

### 4. Initialise the database schema

Run the SQL migration to create tables and insert sample data:

```bash
psql "$DATABASE_URL" -f backend/migrations/001_init.sql
```

Or using the `psql` flags directly:

```bash
psql -U postgres -d real_estate -f backend/migrations/001_init.sql
```

This creates the `properties` and `inquiries` tables and seeds at least five sample property records.

---

## Running Locally

Start the backend API and frontend in separate terminal windows.

### Start the API

```bash
cd backend
npm run dev
```

The API will be available at `http://localhost:4000` (or the `PORT` you configured).

### Start the frontend

```bash
cd frontend
npm run dev
```

The Next.js app will be available at `http://localhost:3000`.

---

## Running Tests

### Backend tests

```bash
cd backend
npm test
```

### Frontend tests

```bash
cd frontend
npm test
```

---

## API Endpoints

| Method | Path                | Description                        |
|--------|---------------------|------------------------------------|
| GET    | `/properties`       | List properties (supports filters) |
| GET    | `/properties/:id`   | Get a single property by ID        |
| POST   | `/inquiries`        | Submit a contact inquiry           |

### Filter query parameters for `GET /properties`

| Parameter      | Type   | Description                        |
|----------------|--------|------------------------------------|
| `minPrice`     | number | Minimum price (inclusive)          |
| `maxPrice`     | number | Maximum price (inclusive)          |
| `location`     | string | Filter by location (partial match) |
| `propertyType` | string | Filter by type (e.g. `house`)      |
