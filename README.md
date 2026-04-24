# 🌤️ Weather App

> Real-time weather and forecasts for any city in the world — built with vanilla HTML, CSS, and JavaScript.

---

## 📖 About

**Weather App** is a clean, responsive web application that lets users search for current weather conditions and upcoming forecasts for any city. Powered by a live weather API, it delivers accurate, real-time data in a simple and intuitive interface.

🌐 **Live Demo:** [weatherappkhans.netlify.app](https://weatherappkhans.netlify.app/)

---

## ✨ Features

- 🔍 **City Search** — Look up weather for any city worldwide
- 🌡️ **Real-Time Weather** — Live temperature, weather conditions, humidity, and wind speed
- 📅 **Weather Forecast** — Multi-day forecast so you can plan ahead
- 🌦️ **Weather Icons** — Visual indicators for conditions (sunny, cloudy, rain, etc.)
- 📱 **Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast & Lightweight** — No frameworks, no build tools, just the browser

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | App structure and layout |
| CSS3 | Styling and responsive design |
| JavaScript (ES6+) | Logic, API calls, and dynamic rendering |
| Weather API | Real-time weather and forecast data |

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- A free API key from your weather data provider (e.g. [OpenWeatherMap](https://openweathermap.org/api))

### Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Khanyi-Codes/WeatherApp.git
   ```

2. **Navigate into the project folder**
   ```bash
   cd WeatherApp
   ```

3. **Add your API key**

   Open `js/main.js` (or wherever your API call lives) and replace the placeholder with your own key:
   ```javascript
   const API_KEY = "your_api_key_here";
   ```

4. **Open the app**

   Drag `index.html` into your browser, or use a local server:
   ```bash
   npx serve .
   ```

---

## 📁 Project Structure

```
WeatherApp/
├── index.html          # Main entry point
├── src/
│   └── styles.css      # App styles 
│   └── index.js         # API calls, search logic, UI rendering
└── README.md
```

---

## 🌍 API Reference

This app uses a third-party weather API to fetch live data. The following data points are retrieved and displayed:

- Current temperature
- Weather condition and description
- Humidity and wind speed
- Multi-day forecast (temperature highs/lows and conditions)

> **Note:** You will need to register for a free API key to run this app locally. The live demo uses an environment variable configured on Netlify.

---

## ☁️ Deployment

This app is deployed via **Netlify** with continuous deployment from GitHub.

To deploy your own version:

1. Push your code to GitHub
2. Connect the repo to [Netlify](https://netlify.com)
3. Add your API key as an environment variable in Netlify's dashboard under **Site Settings → Environment Variables**
4. Deploy!

---

## 🗺️ Roadmap

- [x] City search with real-time weather
- [x] Multi-day weather forecast
- [x] Deployed to Netlify
- [ ] Geolocation — auto-detect user's current city
- [ ] Toggle between Celsius and Fahrenheit
- [ ] Search history / recently viewed cities
- [ ] Weather alerts and severe condition warnings
- [ ] Dark mode

---

## 🤝 Contributing

Found a bug or have a feature idea? Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 👩🏾‍💻 Author

**Khanyisile Makhubu**
- 🌐 Live Demo: [weatherappkhans.netlify.app](https://weatherappkhans.netlify.app/)
- GitHub: [@Khanyi-Codes](https://github.com/Khanyi-Codes)
- LinkedIn: [khanyisile-makhubu](https://linkedin.com/in/khanyisile-makhubu)
- Email: makhubukhanyisile1@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Built with ☀️ by Khanyisile Makhubu</p>