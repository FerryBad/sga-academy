# SGA Academy PWA

This folder contains the installable Progressive Web App version of SGA Academy.

## Important
A PWA must be served from a secure origin (HTTPS) or localhost. Opening index.html directly with file:// will not enable the service worker/install flow.

## Easiest deployment
Upload the contents of this folder to a static HTTPS host such as GitHub Pages, Netlify, or Vercel. Then open the deployed URL in a supported browser and choose "Install app" / "Add to Home Screen".

Files:
- index.html — SGA Academy
- manifest.json — PWA app metadata
- sw.js — offline/service-worker support
- icons/ — app icons
