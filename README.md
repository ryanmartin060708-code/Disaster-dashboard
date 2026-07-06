# 🇮🇳 India Real-Time Disaster Dashboard

A live disaster monitoring dashboard for India built with vanilla HTML, CSS, and JavaScript. Integrates real-time weather data via OpenWeather API and an interactive map via Leaflet.js to visualize flood zones, cyclone alerts, heatwave regions, and relief camp locations across India.

> Built as a portfolio project demonstrating real-world API integration, responsive UI design, and civic tech application development.

---

## 🔴 Live Demo

👉 **[View Live Dashboard](https://disaster-dashboard-psi.vercel.app)**

---

## 📸 Preview

![India Disaster Dashboard Preview](screen.png)

---

## ✨ Features

- **Live weather data** — Real-time temperature, humidity, wind speed, rainfall, visibility, and pressure fetched from OpenWeather API (auto-refreshes every 5 minutes)
- **Interactive map** — Leaflet.js map centered on India with clickable disaster zone overlays and relief camp markers
- **Flood & disaster alerts** — Color-coded alert feed covering floods, cyclones, heatwaves, and landslides
- **Traffic conditions** — Road congestion status for major Indian highways
- **Emergency contacts** — Key Indian emergency numbers (NDRF, 112, 1078, Fire & Rescue)
- **Relief camp tracker** — Live occupancy status for camps across affected states
- **Live IST clock** — Real-time India Standard Time in the topbar
- **Dark mode support** — Full dark/light theme with automatic detection
- **Responsive design** — Works on desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 / CSS3 / JavaScript | Core frontend — no frameworks |
| [OpenWeather API](https://openweathermap.org/api) | Live weather data |
| [Leaflet.js](https://leafletjs.com/) | Interactive map |
| [OpenStreetMap](https://www.openstreetmap.org/) | Map tile layer |
| [Tabler Icons](https://tabler-icons.io/) | Icon set |
| [Public Sans](https://public-sans.digital.gov/) | Typography |
| [Vercel](https://vercel.com/) | Deployment |

---

## 🚀 Getting Started

### Run locally

No build step or package manager needed. Just clone and open:

```bash
git clone https://github.com/ryanmartin060708-code/india-disaster-dashboard.git
cd india-disaster-dashboard
open index.html
```

Or simply double-click `index.html` in your file explorer.

### Configure your own API key

Open `index.html` and find this line near the bottom:

```js
const OW_KEY = 'your_api_key_here';
```

Replace it with your own free key from [openweathermap.org/api](https://openweathermap.org/api).

To change the city, update:

```js
const CITY = 'Mumbai';
```

Any Indian city name works — `Delhi`, `Chennai`, `Kolkata`, `Bengaluru`, etc.

---

## 🗺️ Map Zones

The interactive map includes the following disaster overlays (click any zone for details):

| Zone | Type | Status |
|---|---|---|
| Guwahati, Assam | Flood | Critical |
| Central Assam | Flood inundation | Critical |
| Gujarat Coastline | Cyclone landfall | Evacuate |
| Ernakulam, Kerala | Heavy rainfall | Watch |
| Rajasthan | Heatwave | Red alert |
| Uttar Pradesh | Heatwave | Red alert |
| Madhya Pradesh | Heatwave | Red alert |
| Manali–Leh, Himachal | Landslide watch | Monitor |

Relief camp markers (⛺) are pinned at Guwahati, Ernakulam, Bhuj, Puri, and Kullu.

---

## 📁 Project Structure

```
india-disaster-dashboard/
├── index.html       # Full dashboard — all HTML, CSS, and JS in one file
├── screen.png       # Dashboard preview screenshot
├── DESIGN.md        # Design system reference (Sentinel Civic dark theme)
└── README.md        # This file
```

---

## 🔮 Planned Improvements

- [ ] City search — let users switch weather location from the UI
- [ ] IMD API integration for official government alerts
- [ ] Historical flood data charts from data.gov.in
- [ ] SMS/email alert subscription for disaster notifications
- [ ] Multi-language support (Hindi, Tamil, Bengali)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋 Author

Built by **[Your Name]** · [LinkedIn](https://linkedin.com/in/yourprofile) · [GitHub](https://github.com/YOUR_USERNAME)
