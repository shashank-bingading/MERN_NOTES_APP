# MERN Notes App

A full-stack notes application built with the MERN stack. Users can create, view, edit and delete notes, and every API route is protected by rate limiting.

<!--**Live demo:** [add link here](https://YOUR-LIVE-LINK) -->

## Features

- Create, read, update and delete notes (full CRUD)
- Dedicated page for viewing and editing a single note
- Rate limiting on every backend route, with a friendly rate-limited message on the frontend
- Empty state when there are no notes
- Clean separation of routes, controllers and the database model on the backend

## System Architecture

![System Architecture](MERN_APP_ARCHITECTURE(FINALL).png)

### Frontend

- **App/Main:** sets up the routes and renders the pages.
- **Pages:** home page, create page and note detail page. Each page manages its own state (notes, loading, rate-limited status).
- **Components:** reusable UI pieces such as the navbar, note card, rate-limited UI and notes-not-found.
- **Lib:** a configured Axios instance and utility helpers.
- **Note detail page:** loads a note with `useEffect` (`fetchNoteById`), and handles saving (`handleSave`) and deleting (`handleDelete`) through the API.

### Backend

- **server.js:** app entry point. It connects to the database (`connectDB()`) and applies rate limiting to every route.
- **Routes:** map HTTP requests to controller functions.
- **Controllers (`notesController`):** hold the logic for each operation.
- **Model (`Note.js`):** the Mongoose schema for a note.
- **Database:** MongoDB Atlas.

### API Endpoints

| Method | Endpoint | Controller | Description |
| --- | --- | --- | --- |
| GET | `/api/notes` | `getAllNotes` | Get all notes |
| GET | `/api/notes/:id` | `getNoteById` | Get a single note |
| POST | `/api/notes` | `createNote` | Create a new note |
| PUT | `/api/notes/:id` | `updateNote` | Update a note |
| DELETE | `/api/notes/:id` | `deleteNote` | Delete a note |

## Tech Stack

| Layer | Tools |
| --- | --- |
| Frontend | React, Axios |
| Backend | Node.js, Express |
| Database | MongoDB Atlas, Mongoose |
| Other | Rate limiting middleware |

## Getting Started

**Prerequisites:** Node.js 18 or newer, npm, and a MongoDB Atlas connection string.

### Backend

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file in `backend/`:

```env
PORT=5001
MONGO_URI=your_mongodb_atlas_connection_string
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at `http://localhost:5173`.

## Project Structure

```
├── backend/
│   ├── src/
│   │   ├── config/        # Database connection
│   │   ├── controllers/   # notesController
│   │   ├── models/        # Note.js
│   │   ├── routes/        # Notes routes
│   │   ├── middleware/    # Rate limiting
│   │   └── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── lib/           # Axios instance, utils
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
└── docs/
    └── architecture.png
```

## Author

**Shashank Singh**
- GitHub: [@shashank-bingading](https://github.com/shashank-bingading)
