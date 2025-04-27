import { createAccessToken, createRefreshToken, verifyRefreshToken } from '../utils/jwt';
import { Request, Response } from 'express';

const DbUser = {
    id: '1',
    username: 'client',
    type: 'client' as 'client' | 'master' | 'admin',
    password: 'password',
};

export const loginUser = (req: Request, res: Response) => { 
    const { username, password } = req.body;
  
    const user = DbUser;
  
    if (user.username !== username || user.password !== password) {
        res.status(401).json({ message: 'Invalid credentials' });
        return;
    }
  
    const accessToken = createAccessToken({ username: user.username, type: user.type });
    const refreshToken = createRefreshToken({ username: user.username, type: user.type });
  
    res.status(200).json({
      accessToken,
      refreshToken,
      message: 'Login successful',
    });
    return;
};

export const refreshAccessToken = (req: Request, res: Response) => {
    const { refreshToken } = req.body;
  
    if (!refreshToken) {
        res.status(400).json({ message: 'Refresh token required' });
        return;
    }
  
    try {
      const payload = verifyRefreshToken(refreshToken) as {
        username: string;
        type: 'client' | 'master' | 'admin';
      };
  
      const newAccessToken = createAccessToken({ username: payload.username, type: payload.type });
  
        res.json({ accessToken: newAccessToken });
    } catch (err) {
        res.status(401).json({ message: 'Invalid refresh token' });
    }
    return;
};
