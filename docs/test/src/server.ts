// import WebSocket from 'ws';

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNsaWVudCIsInR5cGUiOiJjbGllbnQiLCJpZCI6IjEiLCJpYXQiOjE3NDY4MTU2ODgsImV4cCI6MTc0NjgxNjU4OH0.toQHk_xPSXJ2W8N7en5gViyIc9cU3ZrRStDwTgfAoRM';
// const ws = new WebSocket('ws://localhost:8080', token);

// ws.on('open', () => {
//   console.log('Connected!');
//   ws.send(JSON.stringify({ type: 'subscribe', ticker: 'TATASTEEL-EQ' }));
// });

// ws.on('message', (data) => {
//   console.log('Received:', data.toString());
// });


// import WebSocket from 'ws';

// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNsaWVudCIsInR5cGUiOiJjbGllbnQiLCJpZCI6IjEiLCJpYXQiOjE3NDY4MTQ0OTksImV4cCI6MTc0NjgxNTM5OX0.nAo9hTxHPXEjbxvpcpHRCCVcS1WPFFgNSnZ9wI0xX90';

// const ws = new WebSocket('ws://localhost:8080', token);

// ws.on('open', () => {
//   console.log('Connected to WebSocket server!');

//   // Subscribe to multiple stocks
//   const stocksToSubscribe = ['TATASTEEL-EQ', 'RELIANCE-EQ', 'INFY-EQ'];
//   stocksToSubscribe.forEach((ticker) => {
//     ws.send(JSON.stringify({ type: 'subscribe', ticker }));
//     console.log(`Subscribed to ${ticker}`);
//   });

//   // Unsubscribe from one stock after 5 seconds
//   setTimeout(() => {
//     const tickerToUnsubscribe = 'TATASTEEL-EQ';
//     ws.send(JSON.stringify({ type: 'unsubscribe', ticker: tickerToUnsubscribe }));
//     console.log(`Unsubscribed from ${tickerToUnsubscribe}`);
//   }, 5000);

//   // Re-subscribe to the stock after another 5 seconds
//   setTimeout(() => {
//     const tickerToResubscribe = 'TATASTEEL-EQ';
//     ws.send(JSON.stringify({ type: 'subscribe', ticker: tickerToResubscribe }));
//     console.log(`Re-subscribed to ${tickerToResubscribe}`);
//   }, 10000);
// });

// ws.on('message', (data) => {
//   try {
//     const msg = JSON.parse(data.toString());

//     if (msg.type === 'stock-update') {
//       const { ticker, buyPrice, sellPrice, low, ltp, high } = msg;
//       console.log(`Stock Update - ${ticker}:`);
//       console.log(`  Buy: ${buyPrice}, Sell: ${sellPrice}`);
//       console.log(`  Low: ${low}, High: ${high}, LTP: ${ltp}`);
//     } else {
//       console.log('Received message:', msg);
//     }
//   } catch (err) {
//     console.error('Invalid message format:', data.toString());
//   }
// });

// ws.on('close', () => {
//   console.log('Disconnected from WebSocket server.');
// });


import WebSocket from 'ws';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNsaWVudCIsInR5cGUiOiJjbGllbnQiLCJpZCI6IjEiLCJpYXQiOjE3NDY4MTY3NTEsImV4cCI6MTc0NjgzNDc1MX0.FEOWTX8bKh12XMRz3iTiYdpEPPh8UdPGhHeAGGg0V9A';

const ws = new WebSocket('ws://localhost:8080', token);

ws.on('open', () => {
  console.log('Connected to WebSocket server!');

  const stocksToSubscribe = ['TATASTEEL-EQ', 'RELIANCE-EQ', 'INFY-EQ'];
  stocksToSubscribe.forEach((ticker) => {
    ws.send(JSON.stringify({ type: 'subscribe', ticker }));
    console.log(`Subscribed to ${ticker}`);
  });

  setTimeout(() => {
    const ticker = 'TATASTEEL-EQ';
    ws.send(JSON.stringify({ type: 'unsubscribe', ticker }));
    console.log(`Unsubscribed from ${ticker}`);
  }, 5000);

  setTimeout(() => {
    const ticker = 'TATASTEEL-EQ';
    ws.send(JSON.stringify({ type: 'subscribe', ticker }));
    console.log(`Re-subscribed to ${ticker}`);
  }, 10000);
});

ws.on('message', (data) => {
  console.log('Received:', data.toString());
});

ws.on('close', () => {
  console.log('Disconnected from WebSocket server.');
});
