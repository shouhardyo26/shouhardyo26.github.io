# Shouhardyo Islam — Personal Portfolio

A modern, responsive, and high-performance personal portfolio website built with React 19, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Flawless layout across mobile, tablet, and desktop screens.
- **Bilingual Support**: Dynamic English and Bangla (`বাংলা`) language toggle with localized content.
- **Theme Modes**: Seamless Dark & Light themes with persistent state.
- **Interactive Timeline**: Structured academic foundation and self-directed digital exploration journey.
- **Verified CV Integration**: Built-in modal preview and one-click download for `Shouhardyo-Islam-CV.pdf`.
- **Contact & Connect**: Direct FormSubmit email dispatch to `shouhardyoislam@gmail.com`, plus direct Gmail Web and WhatsApp quick action links.
- **Custom Desktop Cursor**: Interactive BMW-inspired sports car cursor with dynamic steering and headlight glow (auto-disabled on touch devices).
- **Persistent Scroll-to-Top**: Glowing, always-accessible portal-mounted floating arrow button that smoothly scrolls to the very top.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Tooling**: Vite 6 / 8
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: CSS Animations & Transitions

---

## 💻 Local Development

### Prerequisites
- Node.js (version 18+ or 20+ recommended)
- npm (version 9+)

### Steps
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser at:
   ```
   http://localhost:3000
   ```

---

## 📦 Production Build

To compile and verify the production bundle:
```bash
npm run build
```
The optimized static build output will be placed in the `dist/` directory with relative asset paths ready for hosting anywhere.

---

## 🌐 Deploying to GitHub Pages

This repository is pre-configured for automated **GitHub Pages** deployment:

### Method 1: Automated GitHub Actions (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Deploy portfolio to GitHub Pages"
   git push origin main
   ```
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow at `.github/workflows/deploy.yml` will automatically build the project and publish it live!
5. Your portfolio will be live at:
   ```
   https://<your-username>.github.io/<repository-name>/
   ```

### Method 2: Manual gh-pages Branch
If you prefer deploying via the `gh-pages` branch:
1. Run `npm run build`
2. Push the contents of the `dist/` folder to a `gh-pages` branch.
3. Under **Settings** > **Pages**, choose **Deploy from a branch** and select `gh-pages` / `/ (root)`.

---

## 📄 License
© 2026 Shouhardyo Islam. All rights reserved.
