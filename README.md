# DayForge API Timer Trigger Proxy

This project exposes a small HTTP API that proxies requests to the DayForge API. It is designed to run as a Google Cloud Function and provides an endpoint for marking records obsolete via a timer or other external trigger.

## Features

- Express based Node.js application.
- Single endpoint **POST /mark-obsolete** which authenticates with DayForge and invokes the `records/mark-obsolete` API.
- Cloud Build configuration for deploying as a Cloud Function.
- Example environment file to help configure required variables.

## Requirements

- Node.js (compatible with the Cloud Function runtime, e.g. Node.js 22).
- npm for dependency management.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `config.example.env` to `config.env` and supply your values:
   - `DAYFORGE_API_BASE_URL` – Base URL of the DayForge API.
   - `GOOGLE_CLOUD_USERNAME` – Username used to authenticate with DayForge.
   - `GOOGLE_CLOUD_PASSWORD` – Password used to authenticate with DayForge.
3. Start the development server:
   ```bash
   npm start
   ```
   The app listens on port `9000` by default.

## Deployment

The `cloudbuild.yaml` file defines the steps for deploying the application as a Google Cloud Function. It specifies environment variables and secrets that are required at runtime. Update the substitutions in this file to match your Google Cloud project before deploying.

## Linting

ESLint configuration is provided in `eslint.config.mjs`. Run ESLint via `npx eslint .` to check the codebase.

## License

This project is licensed under the ISC license. See `package.json` for details.
