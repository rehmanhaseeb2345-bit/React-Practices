# React Router Practice Project 🌐

Welcome to my React Router practice project! This repository demonstrates the implementation of client-side routing in a React application using `react-router-dom`, along with a complete custom UI design built from scratch without external CSS frameworks.

## 🚀 What I Built

A fully responsive, multi-page web application featuring:
- **Home Page**: A landing section with hero elements and call-to-action buttons.
- **About Page**: A beautifully structured section detailing the team's mission.
- **Contact Page**: A split-panel layout featuring contact details and a responsive form.
- **User Profile Page**: A dynamic route that reads URL parameters to render personalized user cards.
- **Shared Layout**: A sticky Header with active link states and a rich Footer present across all pages.

## 🧠 What I Learned

During this project, I deepened my understanding of several core React and web development concepts:

1. **Advanced React Router Setup (`createBrowserRouter`)**
   - Implemented modern routing using `createBrowserRouter` and `RouterProvider`.
   - Structured the application using a parent `Layout` component and `<Outlet />` for rendering child routes.

2. **Navigation & Active States (`Link` vs `NavLink`)**
   - Used `<Link>` for standard navigation without full page reloads.
   - Leveraged `<NavLink>`'s `isActive` property to dynamically apply active styling to the navigation menu, improving user experience.

3. **Dynamic Routing (`useParams`)**
   - Created dynamic route segments (e.g., `/user/:userid`).
   - Extracted URL parameters using the `useParams` hook to render data specific to the visited URL.

4. **Custom CSS Architecture & Modern UI Design**
   - Successfully refactored the project from Tailwind CSS to custom Vanilla CSS.
   - Built a scalable design system using CSS variables (`--bg-glass`, `--gradient-primary`, etc.).
   - Implemented advanced CSS techniques including **Glassmorphism** (backdrop-filter), CSS Grid/Flexbox layouts, hover animations, and responsive media queries.
   - Integrated modern typography pairings (`Playfair Display` for elegant headings and `Inter` for clean body text).

## 🛠️ Tech Stack

- **React** (v18+)
- **React Router DOM** (v6)
- **Vanilla CSS3** (Custom Animations, Flexbox/Grid, Variables)
- **Vite** / Create React App

## 💻 How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/rehmanhaseeb2345-bit/React-Practices.git
   ```
2. Navigate into the project directory:
   ```bash
   cd "React Router"
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---
*Developed by [Rehman Haseeb](https://github.com/rehmanhaseeb2345-bit)*
