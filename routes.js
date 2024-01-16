const express = require('express');
   const router = express.Router();
   const metrics = require('./metrics'); // importer les mertics
   const start = process.hrtime();  // constante start
   const client = require('prom-client');

   // Import controllers here

   // Define endpoints
    router.get('/endpoint', (req, res) => {
       // Logic for the endpoint
       const end = metrics.httpRequestDurationMicroseconds.startTimer();
       end({ route: '/endpoint', method: 'GET', code: 200 }); // Marquez la fin de la mesure
       res.send('Response');
    });
    router.get('/', (req, res) => {
        res.send('Bienvenue sur mon serveur Express!');
    });

    router.get('/salut', (req, res) => {
        res.send('Bienvenue ------');
    });
    // Metrics endpoint
    router.get('/metrics', async (req, res) => {
        res.set('Content-Type', client.register.contentType);
        res.end(await client.register.metrics());
    });

   module.exports = router;