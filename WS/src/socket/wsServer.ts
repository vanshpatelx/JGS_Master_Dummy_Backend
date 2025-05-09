import WebSocket from 'ws';
import { Client } from './client';
import { addClient } from './stockBroadcast';
import { verifyToken } from '../auth/verifyToken';
import { IncomingMessage } from 'http';
import { Socket } from 'net';

export function initWSS(server: any) {
    const wss = new WebSocket.Server({ noServer: true });

    server.on('upgrade', (req: IncomingMessage, socket: Socket, head: Buffer) => {
        const user = verifyToken(req);
        if (!user) {
            socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
            socket.destroy();
            return;
        }

        wss.handleUpgrade(req, socket, head, (ws) => {
            const client = new Client(ws);
            addClient(client);

            ws.on('message', (msg) => {
                try {
                    const data = JSON.parse(msg.toString());
                    if (data.type === 'subscribe') {
                        client.subscribe(data.ticker);
                    }
                    else if (data.type === 'unsubscribe') {
                        client.unsubscribe(data.ticker);
                    }
                } catch (err) {
                    console.error('Invalid', err);
                }
            })
        });
    })
}