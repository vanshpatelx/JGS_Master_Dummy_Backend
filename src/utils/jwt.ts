import jwt from 'jsonwebtoken';

const ACCESS_TOKEN_SECRET = "helloworld";
const REFRESH_TOKEN_SECRET = "HelloRefresh";

interface Payload {
  username: string;
  type: 'client' | 'master' | 'admin';
  id: string;
}

export const createAccessToken = (payload: Payload) => {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

export const createRefreshToken = (payload: Payload) => {
  return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, ACCESS_TOKEN_SECRET);
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, REFRESH_TOKEN_SECRET);
};
