# 🌦️ WeatherWise

> **Real-time weather forecasts for any location worldwide — right in your browser.**

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

---

## 📌 About

WeatherWise is a simple yet powerful weather forecast web app built with pure **HTML, CSS, and JavaScript**. It integrates with a live weather API to fetch real-time weather data for any city in the world — showing temperature, humidity, wind speed, pressure, and a "feels like" reading — all in a clean, responsive UI.

---

## ✨ Features

- 🔍 **City Search** — Search weather for any location worldwide
- 🌡️ **Live Temperature** — Current temperature displayed in °C
- 🤔 **Feels Like** — Apparent temperature for better context
- 💧 **Humidity** — Real-time humidity percentage
- 💨 **Wind Speed** — Current wind conditions
- 📊 **Pressure** — Atmospheric pressure readings
- 📍 **Location Display** — Geo-tagged city name with map marker icon
- 🎨 **Animated Background** — Dynamic GIF background for visual appeal
- 📱 **Responsive Design** — Works on desktop and mobile browsers

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | App structure & layout |
| CSS3 | Custom styling & animations |
| JavaScript (Vanilla) | API calls & DOM manipulation |
| Bootstrap 5.3 | Responsive grid & components |
| Font Awesome 5 | Icons (map marker, etc.) |
| Google Fonts (VT323) | Retro typography |
| OpenWeatherMap API | Live weather data |

---

## 📁 Project Structure

```
WeatherWise/
├── index.html          # Main HTML structure
├── weather.css         # Custom styles & layout
├── weather.js          # API logic & DOM updates
├── weather_logo.png    # App favicon/logo
├── bg.gif              # Animated background
└── README.md           # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- An API key from [OpenWeatherMap](https://openweathermap.org/api) *(free tier works)*

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CodeBreaker-0111/WeatherWise.git
   cd WeatherWise
   ```

2. **Add your API Key**

   Open `weather.js` and replace the placeholder with your OpenWeatherMap API key:
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

3. **Run the app**

   Simply open `index.html` in your browser — no build tools or server required!
   ```bash
   # Option 1: Direct open
   open index.html

   # Option 2: Use VS Code Live Server extension for hot reload
   ```

---

## 🔑 API Configuration

This project uses the [OpenWeatherMap Current Weather API](https://openweathermap.org/current).

**Steps to get your free API key:**
1. Sign up at [openweathermap.org](https://openweathermap.org/appid)
2. Navigate to **My API Keys**
3. Copy your key and paste it into `weather.js`

> ⚠️ **Note:** Never commit your API key to a public repository. Consider using environment variables or a `.env` file for production deployments.

---

## 📸 Demo

> Search for any city (e.g., `Delhi`, `New York`, `Tokyo`) to get instant weather data.

**Default city on load:** Delhi, India 🇮🇳

---

## 🌐 Live Demo

> *Deploy this on GitHub Pages:*
> 1. Go to **Settings → Pages**
> 2. Set source to `main` branch → `/root`
> 3. Your app will be live at `https://codebreaker-0111.github.io/WeatherWise/`

---

## 🔮 Future Improvements

- [ ] 5-day / 7-day weather forecast
- [ ] Toggle between °C and °F
- [ ] Auto-detect user location via Geolocation API
- [ ] Weather condition icons (sunny, rainy, cloudy, etc.)
- [ ] Dark / Light mode toggle
- [ ] Search history / recent cities

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Aaditya** — [CodeBreaker-0111](https://github.com/CodeBreaker-0111)

> *"Built with curiosity and caffeine ☕"*

---

⭐ If you found this useful, consider giving it a star on GitHub!
