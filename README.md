# Harsha Portfolio

Professional portfolio website built with React, Vite, and Tailwind CSS to showcase backend-focused full-stack engineering projects, experience, and achievements.

## Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Routing:** React Router
- **Deployment:** Azure Static Web Apps (GitHub Actions CI/CD)

## Project Structure

```text
/public
  /fonts
  favicon.ico
  robots.txt
  sitemap.xml
  404.html
/src
  /components
    Achievements.jsx
    Certifications.jsx
    Contact.jsx
    CustomCursor.jsx
    Education.jsx
    ErrorBoundary.jsx
    Expertise.jsx
    Experience.jsx
    Footer.jsx
    Journey.jsx
    Landing.jsx
    Projects.jsx
  /hooks
    usePageAnalytics.js
  /pages
    ProjectsPage.jsx
  /reveal
    IntroAnimation.jsx
    TextReveal.jsx
  App.jsx
  App.css
  index.css
  main.jsx
index.html
package.json
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start local development:

   ```bash
   npm run dev
   ```

3. Run lint checks:

   ```bash
   npm run lint
   ```

4. Build for production:

   ```bash
   npm run build
   ```

## Optional Analytics Setup

Analytics is enabled only when `VITE_GA_MEASUREMENT_ID` is set.

Create a `.env` file in the project root:

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Deployment

Pushes to `main` trigger the Azure Static Web Apps workflow in `.github/workflows/azure-static-web-apps-ashy-desert-052258b00.yml`.

## Contact

- LinkedIn: [linkedin.com/in/HarshaTalatala](https://www.linkedin.com/in/HarshaTalatala)
- GitHub: [github.com/HarshaTalatala](https://github.com/HarshaTalatala)
