import { Response } from 'express';
import { AuthenticatedRequest } from '../middleware/middleware';

export const watchlistData = (req: AuthenticatedRequest, res: Response) => {
    try {
        const id = req.user?.id;
        if (!id) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }

        const { segments } = req.body;
        const { filter } = req.body;

        // Segments: BSE, NSE, Options, Futures
        const stocks = [];

        switch (segments) {
            case 'BSE':
                stocks.push(
                    { ticker: 'SUZLON', type: 'BSE' },
                    { ticker: 'TATASTEEL', type: 'BSE' },
                    { ticker: 'TATAMOTORS', type: 'BSE' },
                    { ticker: 'TATAPOWER', type: 'BSE' },
                    { ticker: 'RELIANCE', type: 'BSE' },
                    { ticker: 'INFY', type: 'BSE' },
                    { ticker: 'HDFCBANK', type: 'BSE' },
                    { ticker: 'ICICIBANK', type: 'BSE' },
                    { ticker: 'SBIN', type: 'BSE' },
                    { ticker: 'ITC', type: 'BSE' },
                    { ticker: 'HINDUNILVR', type: 'BSE' },
                    { ticker: 'BAJFINANCE', type: 'BSE' },
                    { ticker: 'LT', type: 'BSE' },
                    { ticker: 'AXISBANK', type: 'BSE' },
                    { ticker: 'KOTAKBANK', type: 'BSE' }
                )                
                break;
            case 'NSE':
                stocks.push(
                    { ticker: 'RELIANCE', type: 'NSE' },
                    { ticker: 'INFY', type: 'NSE' },
                    { ticker: 'TCS', type: 'NSE' },
                    { ticker: 'WIPRO', type: 'NSE' },
                    { ticker: 'SBIN', type: 'NSE' },
                    { ticker: 'ICICIBANK', type: 'NSE' },
                    { ticker: 'HDFCBANK', type: 'NSE' },
                    { ticker: 'KOTAKBANK', type: 'NSE' },
                    { ticker: 'TATAMOTORS', type: 'NSE' },
                    { ticker: 'TATASTEEL', type: 'NSE' },
                    { ticker: 'ADANIENT', type: 'NSE' },
                    { ticker: 'BAJFINANCE', type: 'NSE' },
                    { ticker: 'MARUTI', type: 'NSE' },
                    { ticker: 'HINDUNILVR', type: 'NSE' },
                    { ticker: 'ITC', type: 'NSE' }                
                )
                break;
            case 'Options':
                stocks.push(
                    {ticker: 'BSE'}
                )
                break;
            case 'Futures':
                break;
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




// Segment	Format	Examples
// Equity	{Ex}:{Ex_Symbol}-{Series}	NSE:SBIN-EQ, NSE:ACC-EQ,
// NSE:MODIRUBBER-BE
// BSE:SBIN-A, BSE:ACC-A,
// BSE:MODIRUBBER-T
// Equity Futures	{Ex}:{Ex_UnderlyingSymbol}{YY}{MMM}FUT	NSE:NIFTY20OCTFUT,
// NSE:BANKNIFTY20NOVFUT,
// BSE:SENSEX23AUGFUT
// Equity Options (Monthly Expiry)	{Ex}:{Ex_UnderlyingSymbol}{YY}{MMM}{Strike}{Opt_Type}	NSE:NIFTY20OCT11000CE,
// NSE:BANKNIFTY20NOV25000PE ,
// BSE:SENSEX23AUG60400CE
// Equity Options (Weekly Expiry)	{Ex}:{Ex_UnderlyingSymbol}{YY}{M}{dd}{Strike}{Opt_Type}
// refer here for possible values of {M}	NSE:NIFTY2010811000CE,
// NSE:NIFTY20O0811000CE,
// BSE:SENSEX2381161000CE,
// NSE:NIFTY20D1025000CE
// Currency Futures	{Ex}:{Ex_CurrencyPair}{YY}{MMM}FUT	NSE:USDINR20OCTFUT,
// NSE:GBPINR20NOVFUT
// Currency Options (Monthly Expiry)	Ex}:{Ex_CurrencyPair}{YY}{MMM}{Strike}{Opt_Type}	NSE:USDINR20OCT75CE,
// NSE:GBPINR20NOV80.5PE
// Currency Options (Weekly Expiry)	{Ex}:{Ex_CurrencyPair}{YY}{M}{dd}{Strike}{Opt_Type}	NSE:USDINR20O0875CE,
// NSE:GBPINR20N0580.5PE
// NSE:USDINR20D1075CE
// Commodity Futures	{Ex}:{Ex_Commodity}{YY}{MMM}FUT	MCX:CRUDEOIL20OCTFUT,
// MCX:GOLD20DECFUT
// Commodity Options (Monthly Expiry)	{Ex}:{Ex_Commodity}{YY}{MMM}{Strike}{Opt_Type}	MCX:CRUDEOIL20OCT4000CE,
// MCX:GOLD20DEC40000PE