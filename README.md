# Midhun M — Portfolio

Personal portfolio website built with React + Vite.

## 🚀 Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

## 📁 Project Structure

```
midhun-portfolio/
├── public/
│   ├── profile.png          ← Profile photo
│   └── Midhun_Resume.pdf    ← Resume (auto-downloads on button click)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Education.jsx / .css
│   │   ├── Certifications.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── hooks/
│   │   └── useInView.js     ← Scroll animation hook
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## 🌐 Deploying to GitHub Pages

1. Build the project: `npm run build`
2. Push the `dist/` folder to your `gh-pages` branch

Or use the `vite-plugin-gh-pages` package for automated deployment.

## ✅ Features

- Fully static — no backend needed
- Resume auto-download on button click
- Typing animation in hero section
- Scroll-triggered fade-in animations
- Mobile responsive layout
- React Icons (Flaticon-style icons)
- No Netlify forms — GitHub Pages compatible
