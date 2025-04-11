const express = require('express');
const cron = require('node-cron');

const app = express();
let times = 0;

cron.schedule('1-59/5 * * * * *', () => {
  times++;
  console.log('Tick cada 5 segundos', times);
});

// Ruta para que Cloud Run tenga algo que responder
app.get('/', (req, res) => {
  res.send(`Tics ejecutados: ${times}`);
});

// Iniciar servidor en puerto que Cloud Run espera
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

