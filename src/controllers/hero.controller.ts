import { Response } from 'express';
import { AuthenticatedRequest } from '../middleware/middleware';

export const heroData = (req: AuthenticatedRequest, res: Response) => {
    try {
        const id = req.user?.id;
        if (!id) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }

        const hero = [
            {
                id: 1,
                ticker: 'SENSEX',
                tickerId: [
                    'SENSEX-SPOT',
                    'SENSEX-FUTURE'
                ]
            },
            {
                id: 2,
                ticker: 'BANKNIFTY',
                tickerId: [
                    'BANKNIFTY-SPOT',
                    'BANKNIFTY-FUTURE'
                ]
            },
            {
                id: 3,
                ticker: 'NIFTY',
                tickerId: [
                    'NIFTY-SPOT',
                    'NIFTY-FUTURE'
                ]
            },
        ];

        res.status(200).json({ message: 'Hero Stocks fetched successfully', heroStocks: hero });
    } catch (err) {
        res.status(500).json({ message: 'An error occurred while fetching Hero Stocks' });
    }
};
