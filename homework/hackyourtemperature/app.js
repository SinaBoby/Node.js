
import 'dotenv/config'
import keys from './sources/keys.js';
import express from 'express';
import fetch from 'node-fetch';
import { engine } from 'express-handlebars';
import { config } from 'dotenv';
const app = express();
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => res.render('index', { title: 'Weather App' }));
import router from './routes/weather.js';
app.use('/weather', router);

export {app as default}