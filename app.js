import express from 'express';

const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: '.' });
});

app.get('/order-cookies.js', (req, res) => {
  res.sendFile('main.js', { root: '.' });
});

app.post('/order-cookies', (req, res) => {
  const qty = Number(req.body.qty);
  const cookieType = req.body.cookieType;
  if (Number.isNaN(qty) || qty < 1) {
    res.json({ msg: 'Invalid Order', total: 0 });
  } else {
    const unitPrice = qty > 6 ? 1.8 : 2.0;
    res.json({
      msg: `Your order of ${qty} ${cookieType} cookies is confirmed`,
      total: unitPrice * qty,
    });
  }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
