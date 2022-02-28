import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('hello from backend to frontend!'));
app.use(express.json());
app.post('/members', (req, res) => {
  const city = req.body.city;
  res.send(city);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server run on port ${PORT}`));
