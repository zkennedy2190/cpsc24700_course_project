# Elderwood & Ember - Full-Stack Wizarding Boutique

A fictional **online wizarding boutique** built for CPSC 24700, demonstrating full-stack web development, CI/CD, and Azure deployment.

## Project Overview

Elderwood & Ember offers high-quality wizarding supplies and magical goods, showcasing:

- Frontend (React + Tailwind CSS)
- Backend (Node.js + Express)
- Deployment via **Azure Static Web Apps** (frontend) and **Azure App Service** (backend)
- CI/CD using GitHub Actions with Service Principal authentication
- Live MongoDB Atlas database integration

## URLs

- **Frontend (Azure Static Web App):**  
  [View Site](https://ambitious-meadow-0ed6bf0102.azurestaticapps.net)

- **Backend (Azure App Service):**  
  [API Root](https://cpsc24700-course-project-backend-g8chephmg4brc8f8.centralus-01.azurewebsites.net)  
  [Products Endpoint](https://cpsc24700-course-project-backend-g8chephmg4brc8f8.centralus-01.azurewebsites.net/api/products)

## Features

### Frontend
3 interactive pages:
- **Home:** Welcome page with call-to-action.
- **Catalog:** Fetches and displays products dynamically from the backend API.
- **Contact:** User message form (simulated for demonstration).

Responsive design for **mobile and desktop**.

Styled using **Tailwind CSS**.

---

### Backend
Node.js with Express.

REST API Endpoints:
- `GET /api/products`
- `GET /api/categories`
- `GET /api/orders`

✅ Live **MongoDB Atlas integration** with:
- `products`, `categories`, `orders` collections
- 3+ documents per collection for testing and demonstration

✅ CORS and JSON parsing enabled.

---

### CI/CD
**GitHub Actions** automatically deploys frontend and backend on push to `zk_main`.  
Uses secure Azure Service Principal authentication for backend deployment.  
Fully automated build, test, and deployment workflow.

---

## Deployment Details

- **Frontend:**
  - Deployed via **Azure Static Web Apps**.
  - Automatically builds and deploys on push using GitHub Actions.

- **Backend:**
  - Deployed via **Azure App Service**.
  - Uses GitHub Actions for CI/CD with Service Principal authentication.
  - Automatically builds and deploys on push (`/backend` folder).

---

## Local Development Instructions

### Prerequisites
- Node.js (v20 LTS recommended)
- npm

### Frontend
```bash
cd frontend
npm install
npm start
```
Visit: [http://localhost:3000](http://localhost:3000)

---

### Backend
```bash
cd backend
npm install
npm start
```
Visit: [http://localhost:5000/api/products](http://localhost:5000/api/products)

---

## Database Schema (for submission)

- **Database:** `course_project_db` (MongoDB Atlas)
- **Collections:**
  - `products`: Stores product listings with name, price, description, category.
  - `categories`: Stores product categories.
  - `orders`: Stores sample order data for testing.
- **Sample Data:** 3+ documents in each collection.

(Schema screenshots have been saved and will be uploaded to Canvas for submission.)

---

## Author

**Zach Kennedy**  
Lewis University