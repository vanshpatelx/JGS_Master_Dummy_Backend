import { Client } from './client';
import { STOCKS } from '../data/stocks';

const clients = new Set<Client>();
const prices: Record<string, number> = {};

// Initialize prices for each stock
for (const stock of STOCKS) {
    prices[stock.ticker] = 100 + Math.random() * 100;
}

export function addClient(client: Client) {
    clients.add(client);
    client.ws.on('close', () => clients.delete(client));
}

export function broadcast(
    ticker: string,
    buyPrice: number,
    sellPrice: number,
    low: number,
    ltp: number,
    high: number
) {
    for (const client of clients) {
        client.send(ticker, buyPrice, sellPrice, low, ltp, high);
    }
}

export function startPriceSimulation() {
    setInterval(() => {
        for (const ticker in prices) {
            const delta = (Math.random() - 0.5) * 2; // small price movement
            prices[ticker] = +(prices[ticker] + delta).toFixed(2);

            const ltp = prices[ticker];
            const buyPrice = +(ltp - Math.random()).toFixed(2);
            const sellPrice = +(ltp + Math.random()).toFixed(2);
            const low = +(ltp - Math.random() * 5).toFixed(2);
            const high = +(ltp + Math.random() * 5).toFixed(2);

            broadcast(ticker, buyPrice, sellPrice, low, ltp, high);
        }
    }, 500);
}
