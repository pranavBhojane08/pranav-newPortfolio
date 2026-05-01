# Pranav Bhojane — Portfolio (React + Vite)

A modern, high-performance portfolio built with **React 18 + Vite** for Pranav Bhojane, Full Stack Java Developer.

## 🚀 Tech Stack

- **Framework**: React 18 + Vite 4
- **Fonts**: Syne (display) + Space Mono (code)
- **Styling**: Pure CSS with CSS variables
- **No extra dependencies** — lightweight and fast!

## 🎨 Design Features

- Dark theme with Java-orange accent (`#f89820`)
- Custom animated cursor
- Live code typewriter in hero section
- Animated skill progress bars
- Floating tech badges
- Grid background with noise texture
- Marquee tech ticker
- Responsive on all devices

## ⚡ Getting Started

```bash
# Clone or extract the project
cd pranav-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
pranav-portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css          # Global styles & variables
    └── components/
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css       # Typewriter + Java code panel
        ├── About.jsx / .css
        ├── Skills.jsx / .css     # Animated bars + marquee
        ├── Projects.jsx / .css
        ├── Certificates.jsx / .css
        ├── Education.jsx / .css  # Timeline
        ├── Contact.jsx / .css
        └── Footer.jsx / .css
```

## 🛠️ Customization

- **Personal info**: Update in each component's data arrays
- **Colors**: Edit CSS variables in `src/index.css`
- **Profile photo**: Replace the image URL in `About.jsx`
- **Projects**: Edit the `projects` array in `Projects.jsx`

## 📦 Deploy

```bash
# Netlify
netlify deploy --prod --dir=dist

# Vercel
vercel --prod
```

## 👨‍💻 Author

**Pranav Bhojane** — Full Stack Java Developer
- GitHub: [@pranavBhojane08](https://github.com/pranavBhojane08)
- LinkedIn: [pranav-bhojane-789b692b3](https://www.linkedin.com/in/pranav-bhojane-789b692b3)
- Live portfolio: [pranavbhojane-portfolio.netlify.app](https://pranavbhojane-portfolio.netlify.app/)
