npx @asyncapi/generator@latest ./asyncapi.yaml @asyncapi/html-template -o ./docs



```
import express from 'express';
import http from 'http';
import path from 'path';
import { initWSS } from './socket/wsServer';
import { startPriceSimulation } from './socket/stockBroadcast';

const app = express();
const server = http.createServer(app);

// Serve generated AsyncAPI docs
app.use('/docs', express.static(path.join(__dirname, '../docs')));

app.get('/', (req, res) => {
  res.send('WebSocket stock server running! Visit /docs for API documentation.');
});

initWSS(server);
startPriceSimulation();

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080');
  console.log('Docs available at http://localhost:8080/docs');
});
```