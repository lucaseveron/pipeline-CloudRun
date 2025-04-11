const express = require('express');
const cron = require('node-cron');

const app = express();
let times = 0;

cron.schedule('*/5 * * * * *', () => {
  times++;
  console.log('Tick cada 5 segundos', times);
});

app.get('/', (req, res) => {
  res.send(`Tics ejecutados: ${times}`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
