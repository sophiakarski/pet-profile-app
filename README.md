# Pet Profile App

## Setup

### Start database
docker compose up

### Backend
cd backend
npm install
npm run dev

### Frontend
cd frontend
npm install
npm run dev

## Database setup

This project uses PostgreSQL (v15 recommended).

Start DB:
docker-compose up

Run migrations + seed:
cd backend
npm run seed