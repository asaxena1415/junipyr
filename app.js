const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.status(200).render('index');
});

app.use(express.static(path.join(__dirname, 'assets')));

const port = 3000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
