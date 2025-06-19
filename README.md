React Task Management App

This is a modern task management app built with React, Vite, and Tailwind CSS v4. It includes routing, reusable components, local state management, and integration with a public API.

---

Features

Task 1: Project Setup
- Initialized with Vite for fast development
- Tailwind CSS v4 integrated using @tailwindcss/vite
- Project structure organized into:
  - components/ – reusable UI elements
  - pages/ – route-level views (Home, Tasks, API)
  - context/ – global state management
- Basic routing using react-router-dom

Task 2: Component Architecture
- Reusable components:
  - Button with variants: primary, secondary, danger
  - Card for boxed layouts
  - Navbar and Footer for layout structure
- Layout component wraps all pages for consistent structure
- Components accept props for reusability and customization

Task 3: State Management and Hooks
- TaskManager component:
  - Add, complete, delete, and filter tasks (All, Active, Completed)
- Uses React hooks:
  - useState for task data
  - useEffect for loading tasks
  - useContext for theme (light/dark) management
- Custom hook useLocalStorage to persist tasks locally

Task 4: API Integration
- Fetches posts from JSONPlaceholder (https://jsonplaceholder.typicode.com/posts)
- Displays posts in a responsive card layout
- Includes:
  - Loading and error states
  - Search filter
  - Pagination

---

Folder Structure

my-react-app/
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── Layout.jsx
├── context/
│   └── ThemeContext.jsx
├── hooks/
│   └── useLocalStorage.js
├── pages/
│   ├── Home.jsx
│   ├── Tasks.jsx
│   └── ApiData.jsx
├── App.jsx
├── main.jsx
├── index.css
├── tailwind.config.js
└── vite.config.js

---

Installation

Clone the repo
git clone https://github.com/your-username/task-manager-app.git

Go into the project
cd my-react-app

Install dependencies
npm install

Run the app
npm run dev

---

Built With

- React
- Vite
- Tailwind CSS v4 (via @tailwindcss/vite)
- React Router
- JSONPlaceholder API

---






