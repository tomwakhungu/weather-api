const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory data store
const weatherData = [
  { city: 'Nairobi', temperature: 22, condition: 'Sunny' },
  { city: 'Mombasa', temperature: 28, condition: 'Partly Cloudy' },
  { city: 'Kisumu', temperature: 24, condition: 'Rainy' },
];

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Weather API - Use /health, /weather, or /weather/:city',
    version: '1.0.0'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/weather', (req, res) => {
  res.json({ data: weatherData, count: weatherData.length });
});

app.get('/weather/:city', (req, res) => {
  const city = req.params.city;
  const weather = weatherData.find(
    w => w.city.toLowerCase() === city.toLowerCase()
  );
  
  if (weather) {
    res.json(weather);
  } else {
    res.status(404).json({ error: 'City not found' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});