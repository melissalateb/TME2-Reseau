const client = require('prom-client');
   const collectDefaultMetrics = client.collectDefaultMetrics;

   // Start collection of default metrics
   collectDefaultMetrics();

   const httpRequestDurationMicroseconds = new client.Histogram({
     name: 'http_request_duration_ms',
     help: 'Duration of HTTP requests in ms',
     labelNames: ['method', 'route', 'code'],
     buckets: [0.1, 5, 15, 50, 100, 500]
   });
   

   module.exports = {
     httpRequestDurationMicroseconds,
   };