# Elderwood & Ember - Full-Stack Wizarding Boutique
A fictional **online wizarding boutique** built for CPSC 24700, demonstrating full-stack web development, CI/CD, and Azure deployment.

## Project Overview

Elderwood & Ember offers high-quality wizarding supplies and magical goods, showcasing:

- Frontend (React + Tailwind CSS)
- Backend (Node.js + Express)
- Deployment via **Azure Static Web Apps** (frontend) and **Azure App Service** (backend)
- CI/CD using GitHub Actions with Service Principal authentication

## URLs

- **Frontend (Azure Static Web App):**  
  [View Site](https://ambitious-meadow-0ed6bf0102.azurestaticapps.net)

- **Backend (Azure App Service):**  
  [API Root](https://cpsc24700-course-project-backend-g8chephmg4brc8f8.centralus-01.azurewebsites.net)  
  [Products Endpoint](https://cpsc24700-course-project-backend-g8chephmg4brc8f8.centralus-01.azurewebsites.net/api/products)

## Features

Frontend
- 3 interactive pages:
  - **Home:** Welcome page with call-to-action.
  - **Catalog:** Fetches and displays products dynamically from backend API.
  - **Contact:** Form to submit user messages (simulated for this demo).
- Responsive design (mobile + desktop)
- Tailwind C

Backend
- Node.js with Express
- REST API Endpoints:
  - `GET /api/products`
  - `GET /api/categories`
  - `GET /api/orders`
- CORS and JSON parsing enabled.

CI/CD
- GitHub Actions automatically deploys frontend and backend on push to `zk_main`.
- Secure Azure Service Principal authentication.
- Automatic build and deployment to Azure resources.

## Deployment Details

Frontend:
- Deployed to Azure Static Web Apps.
- Automatically builds and deploys on push using GitHub Actions.

Backend:
- Deployed to Azure App Service.
- Uses Service Principal-based GitHub Actions CI/CD for secure deployment.
- Automatically builds and deploys the `/backend` folder on push.

## Instructions to Run Locally
Prerequisites
- Node.js (v20 LTS)
- npm

Frontend
cmds
cd frontend
npm install
npm start

Visit http://localhost:3000

Backend
cmds
cd backend
npm install
npm start

Visit http://localhost:5000/api/products

## Author
Zach Kennedy
Lewis University