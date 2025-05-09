import WebSocket from 'ws';

export class Client{
    ws: WebSocket;
    tickers: Set<string> = new Set();


    constructor(ws: WebSocket){
        this.ws = ws;
    }

    subscribe(ticker: string){
        this.tickers.add(ticker);
    }

    unsubscribe(ticker: string){
        this.tickers.delete(ticker);
    }

    send(t: string, b: number, s: number, l: number, ltp: number, h: number){
        if(this.tickers.has(t)){
            this.ws.send(JSON.stringify({ t, b, s, l, ltp, h }));
        }
    }
}