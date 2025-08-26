# Movies React App

## Overview

This is a React web application for browsing, searching, and managing your favorite movies. It uses [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) to fetch movie data and provides a user-friendly interface to explore popular films, view detailed information, and keep track of your favorites.

## Features

- **Browse Popular Movies:** View a grid of trending movies fetched from TMDb.
- **Search:** Find movies by title using the search bar.
- **Movie Details:** Click on any movie to see its poster, overview, release date, and rating.
- **Favorites:** Add or remove movies from your personal favorites list.
- **Persistent Favorites:** Favorites are saved in your browser’s local storage.
- **Watch & Download Links:** On the details page, quickly access external links to watch or download movies.

## Technologies Used

- React (with hooks and context)
- React Router DOM
- Vite (for fast development)
- TMDb API (for movie data)
- CSS for styling

## Folder Structure

```
src/
  App.jsx
  main.jsx
  assets/
  components/
    MovieCard.jsx
    NavBar.jsx
  contexts/
    MovieContext.jsx
    useMovieContext.jsx
  css/
    App.css
    Favorites.css
    Home.css
    index.css
    MovieCard.css
    NavBar.css
  pages/
    Favorites.jsx
    Home.jsx
    MovieDetails.jsx
  services/
    api.js
```

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/movies-react-app.git
   cd movies-react-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up your TMDb API key:**
   - Get an API key from [TMDb](https://www.themoviedb.org/settings/api).
   - Replace the value of `API_KEY` in `src/services/api.js` with your key.

4. **Start the development server:**
   ```sh
   npm run dev
   ```

5. **Open in your browser:**
   - Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Usage

- **Browse:** The home page shows popular movies.
- **Search:** Use the search bar to find specific movies.
- **Details:** Click a movie card to view details and access "Watch" (JustWatch) and "Download" (Google search) links.
- **Favorites:** Click the heart icon on a movie card to add/remove it from favorites. Access your favorites from the navigation bar.

## Customization

- **Styling:** Modify CSS files in `src/css/` to change the look and feel.
- **API Key:** Keep your TMDb API key private and do not commit it to public repositories.

## License

This project is for educational purposes. Movie streaming and downloading links are external and not provided by this app.

---

**Note:**  
This app does not stream or download movies directly. "Watch" and "Download" buttons redirect users to external