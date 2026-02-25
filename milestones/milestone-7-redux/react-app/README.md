# React + Vite + Tailwind CSS (v4)

A simple React project set up with **Vite** and **Tailwind CSS v4** using the official `@tailwindcss/vite` plugin.

---

## 🚀 Setup Guide

### 1️⃣ Create React + Vite Project

```bash
npm create vite@latest my-project
cd my-project
npm install
```

- **Framework:** React
- **Variant:** JavaScript (or TypeScript)

### 2️⃣ Install Tailwind v4

```bash
npm install tailwindcss @tailwindcss/vite
```

### 3️⃣ Configure Vite

Edit `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### 4️⃣ Import Tailwind in CSS

In `src/index.css`:

```css
@import "tailwindcss";
```

Ensure `index.css` is imported in `main.jsx`:

```js
import "./index.css";
```

### 5️⃣ Start Development Server

```bash
npm run dev
```

Open `http://localhost:5173` to view your app.

### ✅ Verify Tailwind

Update `App.jsx`:

```jsx
export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
      <h1 className="text-3xl font-bold text-white underline">
        Hello Tailwind v4 🚀
      </h1>
    </div>
  );
}
```

If the page shows a blue background, centered content, and large bold underlined white text, Tailwind is
working correctly.

### 📁 Minimal Project Structure

```plaintext
my-project/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    └── index.css
```

### 📝 Notes

- Tailwind v4 + Vite plugin does not require PostCSS configuration for basic usage.
- Only the `@tailwindcss/vite` plugin is needed to enable Tailwind.
- Import your CSS in `main.jsx` to ensure styles are applied.
- Use Tailwind utility classes directly in your components.
