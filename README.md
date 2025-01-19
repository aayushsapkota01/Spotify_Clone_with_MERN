# Spotify Clone 🎵

A full-stack Spotify-inspired music streaming platform designed to provide users with a seamless music experience. This project showcases features like personalized recommendations, music streaming, and responsive UI.

## Features ✨

- **Made for You Section**: Displays curated song recommendations.
- **Music Streaming**: Play music tracks with smooth transitions.
- **See More Section**: View more details about albums and songs.
- **Real-time Updates**: Integration with `socket.io` for real-time updates.
- **Admin Panel**: Manage songs, albums, and user data.
- **Authentication**: Secure user authentication using `@clerk/clerk-react`.

---

## Tech Stack 🚀

### Backend 🛠️

- **Node.js**: Server-side runtime.
- **Express**: Web framework for API development.
- **MongoDB**: Database for storing user and music data.
- **Cloudinary**: Media storage for album covers and music files.
- **Socket.io**: Real-time bidirectional communication.
- **Node-Cron**: Scheduling tasks like database cleanup or data refresh.
- **Express-Fileupload**: Easy file uploads.
- **dotenv**: Environment variable management.

### Frontend 🎨

- **React**: Component-based UI framework.
- **Vite**: Lightning-fast development server.
- **React Router DOM**: Navigation between pages.
- **TailwindCSS**: Utility-first CSS for styling.
- **Radix UI**: Accessible UI components for dialogs, sliders, and tabs.
- **Zustand**: State management library.
- **Axios**: Simplified HTTP requests.
- **React Hot Toast**: Customizable notifications.
- **Lucide React**: Icon library for modern, crisp icons.

---

## Installation & Setup 🛠️

### Prerequisites

- Node.js (v18+)
- MongoDB (set up a local or cloud instance)
- Cloudinary account for media storage

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aayushsapkota01/Spotify_Clone_with_MERN
   cd spotify-clone_with_mern
   ```

2. **Backend Setup:**:
   ```bash
   cd server
   npm install
   cp .env.example .env # Update environment variables
   npm run dev     
   ```

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## Seeding Data

### Seed songs:
```bash
npm run seed:songs
```

### Seed albums:
```bash
npm run seed:albums
```

---

## Open the App in Your Browser

Visit:
```arduino
http://localhost:3000
```

---

## Project Structure 📂

### Backend
- **`src`**: Contains all backend logic.
  - **`controllers`**: Handle API logic.
  - **`models`**: Define MongoDB schemas.
  - **`routes`**: API endpoints.
  - **`seeds`**: Scripts for seeding data.

### Frontend
- **`src`**: Contains all frontend code.
  - **`components`**: Reusable UI components.
  - **`pages`**: Individual pages like Home, Login, and Browse.
  - **`utils`**: Helper functions.

---

## Upcoming Features 🚧
- Playlist creation and management.
- Advanced search functionality.
- Offline music downloads.
- Enhanced recommendation algorithms.

---

## Contributions 🤝

Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request.

---


