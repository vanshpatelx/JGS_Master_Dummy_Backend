import express from 'express';
import http from 'http';
import path from 'path';
import { initWSS } from './socket/wsServer';
import { startPriceSimulation } from './socket/stockBroadcast';

const app = express();
const server = http.createServer(app);


app.use('/docs', express.static(path.join(__dirname, '../docs')));

app.get('/', (req, res) => {
  res.send('WebSocket stock server running! Visit /docs for API documentation.');
});

initWSS(server);
startPriceSimulation();

server.listen(8080, () => {
  console.log('WebSocket stock server running on port 8080');
});
