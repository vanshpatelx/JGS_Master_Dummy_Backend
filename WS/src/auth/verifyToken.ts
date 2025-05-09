import { IncomingMessage } from 'http';
import jwt from 'jsonwebtoken';

const ACCESS_TOKEN_SECRET = 'helloworld';

export interface Payload {
  username: string;
  type: 'client' | 'master' | 'admin';
  id: string;
}

export function verifyToken(req: IncomingMessage): Payload | null {
  const protocolHeader = req.headers['sec-websocket-protocol'];
  if (!protocolHeader) return null;

  const token = Array.isArray(protocolHeader) ? protocolHeader[0] : protocolHeader;

  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
    if (
      typeof decoded === 'object' &&
      'id' in decoded &&
      'username' in decoded &&
      'type' in decoded
    ) {
      return decoded as Payload;
    }
    return null;
  } catch {
    return null;
  }
}
