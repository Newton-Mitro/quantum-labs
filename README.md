# Quantum Labs Website

React application for the QuantumLabs.tech website. Shared navigation, footer,
and theme controls are React components; each page keeps its own content and URL.

## Pages

- / — Home
- /services — Services
- /solutions — AI & business solutions
- /industries — Industries
- /work — Case studies / portfolio
- /about — About
- /insights — Insights
- /contact — Project inquiry

## Run

Install dependencies with `npm install`, then start the development server with
`npm run dev`.

Create a production build with `npm run build` and preview it with `npm run preview`.

## Styling

Tailwind CSS is compiled locally by Vite. Space Grotesk and Inter are loaded from
Google Fonts, so an internet connection is needed for those fonts. The selected
light or dark theme is saved in local storage.

## Notes

Each page is a JSX component in `src/pages`. The contact form is demo-only and
does not send email.
