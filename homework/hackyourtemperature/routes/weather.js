import keys from '../sources/keys.js';
import fetch from 'node-fetch';
import express from 'express';
import gibberish from 'gibberish-detector'
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const city = req.body.cityName;
    if(city ){

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${keys.API_KEY}`,
      );
     
      if (!response.ok) {
        
        res.status(404);
        res.render('index', { title: 'Weather App' , found:true})
      } else {
        const json = await response.json();
        console.log(json.main.temp);
        
        res.status(200);
        res.render('index', { title: 'Weather App' , city:`${city}`,temp: `${json.main.temp}`})
      }
    }else {
      res.render('index', { title: 'Weather App' , notFound:true})
    }
  } catch (err) {
    console.log(err);
  }
});
export {router as default}