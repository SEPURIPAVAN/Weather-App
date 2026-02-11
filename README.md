# Weather App

A modern, responsive weather application built with React and Vite that provides real-time weather information for any city worldwide using the OpenWeatherMap API.

## Features

- Search weather for any city globally
- Display current temperature, feels-like temperature
- Show humidity levels
- Min/Max temperature information
- Current weather conditions with descriptions
- Clean and intuitive Material-UI interface
- Fast and responsive design
- Error handling for invalid city names

## Technologies Used

- **React 19** - UI framework
- **Vite 7** - Build tool and dev server
- **Material-UI (MUI)** - Component library for modern UI
- **OpenWeatherMap API** - Weather data provider
- **ESLint** - Code linting

## Prerequisites

Before you begin, ensure you have:
- Node.js (v16 or higher)
- npm or yarn
- OpenWeatherMap API key (free tier available)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/Weather-App.git
cd Weather-App
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up API Key

#### Get your free API key:
1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Go to **API Keys** section
4. Generate a new API key
5. **Wait 10-15 minutes** for the key to activate

#### Configure the API key:
Create a `.env` file in the project root:
```env
VITE_API_KEY=your_openweathermap_api_key_here
```

**Note:** The `.env` file is gitignored to keep your API key secure.

### 4. Run the development server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
Weather-App/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and icons
│   ├── App.jsx         # Main App component
│   ├── App.css         # App styles
│   ├── WeatherApp.jsx  # Weather app main component
│   ├── SearchBox.jsx   # Search input component
│   ├── SearchBox.css   # Search box styles
│   ├── InfoBox.jsx     # Weather info display component
│   ├── InfoBox.css     # Info box styles
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── .env                # Environment variables (not in git)
├── .env.example        # Example env file
├── .gitignore          # Git ignore rules
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## Deployment

### Deploy to GitHub Pages

1. Add your API key to GitHub Secrets:
   - Go to repo **Settings** → **Secrets and variables** → **Actions**
   - Add secret: `VITE_API_KEY` with your API key

2. The workflow file in `.github/workflows/deploy.yml` handles auto-deployment on push to main branch

3. Enable GitHub Pages in repo settings

Your app will be live at: `https://yourusername.github.io/Weather-App/`

## Troubleshooting

### "Invalid API key" error
- Ensure your API key is correctly set in `.env`
- Wait 10-15 minutes after generating a new key
- Restart the dev server after updating `.env`

### "No such place exists" error
- Check your internet connection
- Verify the city name spelling
- Ensure API key is active

### API rate limits
- Free tier: 60 calls/minute, 1,000,000 calls/month
- If exceeded, wait or upgrade your plan

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- UI components from [Material-UI](https://mui.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

---
