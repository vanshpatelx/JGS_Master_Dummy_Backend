import { Response } from 'express';
import { AuthenticatedRequest } from '../middleware/middleware';



/**
{   
    id: 1,
    ticker: 'SENSEX',
    type: 'BSE',
    quantity: 10,
    price: 100,
    todayQuantity: 10,
    todayPrice: 100,
    date:?:12-12-2004,
}
 */

let stocks = [
    { id: 1, ticker: 'SUZLON-EQ', name: 'SUZLON', type: 'BSE', quantity: 10, price: 100, todayQuantity: 10, todayPrice: 100, date: null },
    { id: 2, ticker: 'TATASTEEL-EQ', name: 'TATA STEEL', type: 'BSE', quantity: 12, price: 100, todayQuantity: 0, todayPrice: 0, date: null },
    { id: 3, ticker: 'TATAMOTORS-EQ', name: 'TATA MOTORS', type: 'BSE', quantity: 12, price: 150, todayQuantity: 10, todayPrice: 130, date: null },
    { id: 4, ticker: 'TATAPOWER-EQ', name: 'TATA POWER', type: 'BSE', quantity: 5, price: 1000, todayQuantity: 10, todayPrice: 1000, date: null },
    { id: 5, ticker: 'RELIANCE-EQ', name: 'RELIANCE', type: 'NSE', quantity: 10, price: 200, todayQuantity: 10, todayPrice: 190, date: null },
    { id: 6, ticker: 'NSE:NIFTY20OCT11000CE', name: 'NIFTY 11000 CE', type: 'OPTIONS', quantity: 25, price: 1000, todayQuantity: 10, todayPrice: 1100, date: '2025-10-11' },
    { id: 7, ticker: 'NSE:BANKNIFTY20NOV25000PE', name: 'BANKNIFTY 25000 PE', type: 'OPTINOS', quantity: 11, price: 740, todayQuantity: 3, todayPrice: 1800, date: '2025-11-25' },
    { id: 8, ticker: 'BSE:SENSEX23AUG60400CE', name: 'SENSEX 60400 CE', type: 'OPTINOS', quantity: 18, price: 920, todayQuantity: 0, todayPrice: 0, date: '2025-08-23' },
    { id: 9, ticker: 'NSE:NIFTY20OCT12000CE', name: 'NIFTY 12000 CE', type: 'OPTINOS', quantity: 23, price: 1890, todayQuantity: 0, todayPrice: 0, date: '2025-10-12' },
    { id: 10, ticker: 'NSE:NIFTY20OCT13000PE', name: 'NIFTY 13000 PE', type: 'OPTINOS', quantity: 11, price: 740, todayQuantity: 3, todayPrice: 1800, date: '2025-10-13' },
    { id: 20, ticker: 'NSE:NIFTY20N0912000CE', name: 'NIFTY 12000 CE', type: 'OPTINOS', quantity: 111, price: 40, todayQuantity: 0, todayPrice: 0, date: '2025-09-12' },
    { id: 21, ticker: 'BSE:SENSEX2381155000PE', name: 'SENSEX 55000 PE', type: 'OPTINOS', quantity: 111, price: 70, todayQuantity: 0, todayPrice: 0, date: '2025-08-15' },
    { id: 22, ticker: 'NSE:NIFTY20D1008000PE', name: 'NIFTY 8000 PE', type: 'OPTINOS', quantity: 121, price: 210, todayQuantity: 3, todayPrice: 200, date: '2025-10-08' },
    { id: 23, ticker: 'NSE:NIFTY20N1113000CE', name: 'NIFTY 13000 CE', type: 'OPTINOS', quantity: 121, price: 10, todayQuantity: 3, todayPrice: 12, date: '2025-11-13' },
    { id: 24, ticker: 'NSE:NIFTY20N0920000PE', name: 'NIFTY 20000 PE', type: 'OPTINOS', quantity: 121, price: 40, todayQuantity: 3, todayPrice: 70, date: '2025-09-20' },
    { id: 25, ticker: 'NSE:NIFTY20OCTFUT', name: 'NIFTY OCT', type: "FUTURES", quantity: 189, price: 1003, todayQuantity: 0, todayPrice: 0, date: '2025-10-20' },
    { id: 26, ticker: 'NSE:BANKNIFTY20OCTFUT', name: 'BANKNIFTY OCT', type: "FUTURES", quantity: 10, price: 20, todayQuantity: 10, todayPrice: 20, date: '2025-10-22' },
    { id: 27, ticker: 'NSE:SENSEX20OCTFUT', name: 'SENSEX OCT',  type: "FUTURES", quantity: 1, price: 8999, todayQuantity: 0, todayPrice: 0, date: '2025-10-24' },
    { id: 28, ticker: 'NSE:NIFTY20NOVFUT', name: 'NIFTY NOV',  type: "FUTURES", quantity: 1, price: 233, todayQuantity: -100, todayPrice: 110, date: '2025-11-25' },
    { id: 29, ticker: 'BSE:BANKNIFTY20NOVFUT', name: 'BANKNIFTY NOV',  type: "FUTURES", quantity: 189, price: 103, todayQuantity: 0, todayPrice: 0, date: '2025-11-25' },
    { id: 32, ticker: 'NSE:BANKNIFTY20DECFUT', name: 'BANKNIFTY DEC',  type: "FUTURES", quantity: 8, price: 3, todayQuantity: 2, todayPrice: 3, date: '2025-12-22' },
    { id: 33, ticker: 'NSE:SENSEX20DECFUT', name: 'SENSEX DEC',  type: "FUTURES", quantity: 1, price: 1003, todayQuantity: 0, todayPrice: 0, date: '2025-12-27' },
];

export const portfolioData = (req: AuthenticatedRequest, res: Response) => {
    try {
        const id = req.user?.id;
        if (Number(id) !== 1) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }        

        const portfolio = stocks;
        
        res.status(200).json({ message: 'Portfolio fetched successfully', portfolio });
        return;
    } catch (err) {
        res.status(500).json({ message: 'An error occurred while fetching portfolio' });
        return;
    }
};


interface TradeRequestBody {
  quantity: number;
  orderType: 'BUY' | 'SELL';
  tickerId: string;
  executionType: 'INSTANT' | 'LIMIT';
  limitPrice?: number;
}

export const tradeFun = (req: AuthenticatedRequest, res: Response) => {
  try {
    const id = req.user?.id;
    if (Number(id) !== 1) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }        

    const {
      quantity,
      orderType,
      tickerId,
      executionType,
      limitPrice,
    } = req.body as TradeRequestBody;

    console.log(quantity, orderType, tickerId, executionType);

    // Validate required fields
    if (!quantity || !orderType || !tickerId || !executionType) {
       res.status(400).json({ message: 'Missing required fields' });
       return;
    }

    // Validate enum values
    if (!['BUY', 'SELL'].includes(orderType)) {
        res.status(400).json({ message: 'Invalid orderType' });
        return;
    }

    if (!['INSTANT', 'LIMIT'].includes(executionType)) {
        res.status(400).json({ message: 'Invalid executionType' });
        return;
    }

    // Validate limit price if executionType is LIMIT
    if (executionType === 'LIMIT' && typeof limitPrice !== 'number') {
        res.status(400).json({ message: 'limitPrice is required for LIMIT orders' });
        return;
    }


    res.status(200).json({ message: 'Trade placed successfully' });
    return;
  } catch (err) {
    res.status(500).json({ message: 'An error occurred while placing trade' });
    return;
  }
};


export const rollOver = (req: AuthenticatedRequest, res: Response) => {
    try {
        const id = req.user?.id;
        if (Number(id) !== 1) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }     
        
        res.status(200).json({ message: 'RollOver successfully' });
        return;
    } catch (err) {
        res.status(500).json({ message: 'An error occurred while RollOver' });
        return;
    }
};

export const closeAll = (req: AuthenticatedRequest, res: Response) => {
    try {
        const id = req.user?.id;
        if (Number(id) !== 1) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }     

        res.status(200).json({ message: 'closeAll successfully' });
        return;
    } catch (err) {
        res.status(500).json({ message: 'An error occurred while closeAll' });
        return;
    }
};
