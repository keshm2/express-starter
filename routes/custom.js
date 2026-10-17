import express from 'express';
var router = express.Router();

router.get('/hello', (req, res) => {
  res.send('Hello there!');
});

router.get('/greet/:name', (req, res) => {
  res.send('Hello, ' + req.params.name + '!');
});

router.get('/add', (req, res) => {
  const a = Number(req.query.a) || 0;
  const b = Number(req.query.b) || 0;
  res.send('Sum: ' + (a + b));
});

export default router;
