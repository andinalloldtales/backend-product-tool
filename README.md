# Backend Product Tool

REST API for the React Product Tool app. Built with Node.js, Express, and MongoDB.

## Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- dotenv
- CORS
- express-async-handler

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get a product by ID |
| POST | /api/products | Create a product |
| PUT | /api/products/:id | Update a product |
| DELETE | /api/products/:id | Delete a product |

## Running locally

1. Clone the repo
2. Run `npm install`
3. Create a `secrets.env` file with `MONGODB_URI` and `PORT`
4. Run `npm run dev`

> Frontend repo: [react-product-tool](https://github.com/andinalloldtales/react-product-tool)