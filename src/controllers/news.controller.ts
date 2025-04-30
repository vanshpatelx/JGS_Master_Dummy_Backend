import { Request, Response } from 'express';
import { AuthenticatedRequest } from '../middleware/middleware';

let newsToggle = true; 
export const newsData = (req: AuthenticatedRequest, res: Response) => {
    try {
        const id = req.user?.id;
        if (!id) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }

        const news = [
            { content: 'Sensex surges 400 points led by gains in banking and IT stocks' },
            { content: 'Nifty slips below 22,400 as FMCG and pharma stocks weigh down the market' },
            { content: 'Reliance Industries hits 52-week high, boosts market sentiment'},
        ];

        const news2 = [
            { content: 'HDFC Bank gains 2% after reporting strong Q4 earnings'},
            { content: 'Auto stocks rally as April sales data beats expectations'},
            { content: 'Metal stocks drag Nifty lower amid global commodity weakness'}, 
            { content: 'Rupee stabilizes near 83.2/USD, supporting foreign inflows into equities'},
        ];

        const selectedNews = newsToggle ? news : news2;
        newsToggle = !newsToggle;

        res.status(200).json({ message: 'News fetched successfully', news: selectedNews });
    } catch (err) { 
        res.status(500).json({ message: 'An error occurred while fetching the news' });
    }
};
