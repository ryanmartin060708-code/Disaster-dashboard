// api/weather.js  — Vercel serverless function
// Proxies OpenWeather requests so the API key never reaches the browser.

export default async function handler(req, res) {
  // Only allow GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const city = req.query.city || 'Mumbai';
  const apiKey = process.env.OPENWEATHER_API_KEY; // set this in Vercel dashboard

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const upstream = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
    );
    const data = await upstream.json();

    // Forward the exact status code OpenWeather returned
    res.status(upstream.status).json(data);
  } catch (err) {
    console.error('Weather proxy error:', err);
    res.status(502).json({ error: 'Upstream request failed' });
  }
}
