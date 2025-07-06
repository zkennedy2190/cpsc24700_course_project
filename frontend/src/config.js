const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? "https://cpsc24700-course-project-backend-g8chephmg4brc8f8.centralus-01.azurewebsites.net"
    : "http://localhost:5000";

export default API_BASE_URL;