const express = require('express');
const cron = require('node-cron');

const app = express();
const port = process.env.PORT || 8080;

let times = 0;

cron.schedule('1-59/5 * * * * *', () => {
  times++;
  console.log('Tick cada 5 segundos', times);
});

// Ruta básica para que Cloud Run tenga algo que responder
app.get('/', (req, res) => {
  res.send(`App ejecutándose. Ticks: ${times}`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
