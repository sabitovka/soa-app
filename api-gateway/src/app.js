const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json({ extended: true }));
app.use(cors());

app.get('/', (req, res) => res.json({ message: 'API Gateway is alive' }));

const PORT = process.env.PORT || 8080;

async function start() {
  try {
    app.listen(PORT, () => console.log(`App has been started on ${PORT}...`));
  } catch (e) {
    console.log('Server error ', e.message);
    process.exit(1);
  }
}

start();