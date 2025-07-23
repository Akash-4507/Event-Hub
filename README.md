# 🎉 Event Hub - One Place Event Booking Platform

**Event Hub** is a front-end-only React application for booking a wide range of event-related services from a single platform. This includes services like marriage halls, catering, music, priests, event planning, and more. It’s designed to simulate a real booking system using [MockAPI](https://mockapi.io/) for data testing and mock backend functionalities.

---

## 🛠️ Tech Stack

- **React.js** (Functional Components + Hooks)
- **React Router DOM** for routing
- **Axios** for HTTP requests (MockAPI integration)
- **CSS / Tailwind CSS**
- **MockAPI** for mock backend/testing

---

## 📄 Features

- 🔐 **Login Page**  
  Basic login form to simulate user authentication.

- 🏛️ **Service Listing Page**  
  Users can browse various services like marriage halls, event planners, and catering.

- 💬 **Service Details Page**  
  Detailed view of each service with description, location, availability, and contact info.

- 📝 **Booking Simulation**  
  Users can simulate booking a service (stored via MockAPI).

- 📖 **Blog Page**  
  Displays helpful articles and event tips.

- 📞 **Contact Page**  
  Contact form to simulate reaching out to the team.

- 🧾 **About Page**  
  Overview of the platform’s vision and benefits.

---

## 📁 Folder Structure

event-hub/
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ │ ├── Login.jsx
│ │ ├── Services.jsx
│ │ ├── ServiceDetails.jsx
│ │ ├── BookingForm.jsx
│ │ ├── Blog.jsx
│ │ ├── Contact.jsx
│ │ └── About.jsx
│ ├── App.jsx
│ └── index.js
└── package.json


---

## 🌐 MockAPI Setup

This project uses [MockAPI](https://mockapi.io/) to simulate backend APIs.

### ✅ Sample Endpoints Used:
- `https://mockapi.io/api/v1/services`
- `https://mockapi.io/api/v1/bookings`
- `https://mockapi.io/api/v1/blogs`

You can modify the base URL in a `.env` file or Axios instance:
```javascript
const api = axios.create({
  baseURL: "https://your-mockapi-url/api/v1"
});


🚀 Getting Started
1. Clone the repository

git clone https://github.com/your-username/event-hub.git
cd event-hub

2. Install dependencies

npm install

3. Start the development server

npm start
