import keys from './sources/keys.js';
import express from 'express';
import fetch from 'node-fetch';
const app = express();

app.get('/', (req, res) => res.send('hello from backend to frontend!'));
app.use(express.json());
app.post('/weather', async (req, res) => {
  try {
    const city = req.body.city;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${keys.API_KEY}`,
    );
    const obj = { weatherText: '' };
    if (!response.ok) {
      obj.weatherText = 'City is not found!';
      res.status(404);
      res.json(obj);
      res.end();
    } else {
      const json = await response.json();
      console.log(json.main.temp);
      obj.weatherText = `${city} : ${json.main.temp}`;
      res.status(200);
      res.json(obj);
      res.end();
    }
  } catch (err) {
    console.log(err);
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server run on port ${PORT}`));
export { server };
