import { Response } from 'express';
import { AuthenticatedRequest } from '../middleware/middleware';


const monthToWeeklyCode: Record<string, string> = {
    JAN: '1', FEB: '2', MAR: '3', APR: '4', MAY: '5', JUN: '6',
    JUL: '7', AUG: '8', SEP: '9', OCT: 'O', NOV: 'N', DEC: 'D'
};


export const watchlistData = (req: AuthenticatedRequest, res: Response) => {
    try {
        const id = req.user?.id;
        if (!id) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }

        const segments = req.query.segments as string;
        const filter = req.query.filter as string[] | string | undefined;

        if (!segments) {
            res.status(400).json({ message: 'Missing segment in query' });
            return;
        }

        const stocks = [];

        switch (segments) {
            case 'BSE':
                stocks.push(
                    { ticker: 'SUZLON-EQ', type: 'BSE' },
                    { ticker: 'TATASTEEL-EQ', type: 'BSE' },
                    { ticker: 'TATAMOTORS-EQ', type: 'BSE' },
                    { ticker: 'TATAPOWER-EQ', type: 'BSE' },
                    { ticker: 'RELIANCE-EQ', type: 'BSE' },
                    { ticker: 'INFY-EQ', type: 'BSE' },
                    { ticker: 'HDFCBANK-EQ', type: 'BSE' },
                    { ticker: 'ICICIBANK-EQ', type: 'BSE' },
                    { ticker: 'SBIN-EQ', type: 'BSE' },
                    { ticker: 'ITC-EQ', type: 'BSE' },
                    { ticker: 'HINDUNILVR-EQ', type: 'BSE' },
                    { ticker: 'BAJFINANCE-EQ', type: 'BSE' },
                    { ticker: 'LT-EQ', type: 'BSE' },
                    { ticker: 'AXISBANK-EQ', type: 'BSE' },
                    { ticker: 'KOTAKBANK-EQ', type: 'BSE' }
                );
                break;

            case 'NSE':
                stocks.push(
                    { ticker: 'RELIANCE-EQ', type: 'NSE' },
                    { ticker: 'INFY-EQ', type: 'NSE' },
                    { ticker: 'TCS-EQ', type: 'NSE' },
                    { ticker: 'WIPRO-EQ', type: 'NSE' },
                    { ticker: 'SBIN-EQ', type: 'NSE' },
                    { ticker: 'ICICIBANK-EQ', type: 'NSE' },
                    { ticker: 'HDFCBANK-EQ', type: 'NSE' },
                    { ticker: 'KOTAKBANK-EQ', type: 'NSE' },
                    { ticker: 'TATAMOTORS-EQ', type: 'NSE' },
                    { ticker: 'TATASTEEL-EQ', type: 'NSE' },
                    { ticker: 'ADANIENT-EQ', type: 'NSE' },
                    { ticker: 'BAJFINANCE-EQ', type: 'NSE' },
                    { ticker: 'MARUTI-EQ', type: 'NSE' },
                    { ticker: 'HINDUNILVR-EQ', type: 'NSE' },
                    { ticker: 'ITC-EQ', type: 'NSE' }
                );
                break;

            case 'OPTIONS':
                if (!filter) {
                    res.status(400).json({ message: 'OPTIONS requires a filter' });
                    return;
                }

                const filterArr = Array.isArray(filter) ? filter : [filter];
                const monthlyCodes = filterArr.map(f => f.toUpperCase());
                const weeklyCodes = monthlyCodes.map(f => monthToWeeklyCode[f]);

                const allOptions = [
                    // Monthly Expiry
                    { ticker: 'NSE:NIFTY20OCT11000CE', type: 'OPTIONS', date: '2025-10-11' },
                    { ticker: 'NSE:BANKNIFTY20NOV25000PE', type: 'OPTIONS', date: '2025-11-25' },
                    { ticker: 'BSE:SENSEX23AUG60400CE', type: 'OPTIONS', date: '2025-08-23' },
                    { ticker: 'NSE:NIFTY20OCT12000CE', type: 'OPTIONS', date: '2025-10-12' },
                    { ticker: 'NSE:NIFTY20OCT13000PE', type: 'OPTIONS', date: '2025-10-13' },
                    { ticker: 'BSE:SENSEX23SEP55000PE', type: 'OPTIONS', date: '2025-09-23' },
                    { ticker: 'NSE:NIFTY20NOV10000CE', type: 'OPTIONS', date: '2025-11-10' },
                    { ticker: 'NSE:BANKNIFTY20DEC20000PE', type: 'OPTIONS', date: '2025-12-20' },
                    { ticker: 'BSE:SENSEX23NOV67500CE', type: 'OPTIONS', date: '2025-11-23' },

                    // Weekly Expiry
                    { ticker: 'NSE:NIFTY2010811000CE', type: 'OPTIONS', date: '2025-08-10' },
                    { ticker: 'NSE:NIFTY20O0811000CE', type: 'OPTIONS', date: '2025-08-01' },
                    { ticker: 'BSE:SENSEX2381161000CE', type: 'OPTIONS', date: '2025-08-16' },
                    { ticker: 'NSE:NIFTY20D1025000CE', type: 'OPTIONS', date: '2025-10-25' },
                    { ticker: 'NSE:NIFTY20O0811000PE', type: 'OPTIONS', date: '2025-08-11' },
                    { ticker: 'NSE:NIFTY20N0912000CE', type: 'OPTIONS', date: '2025-09-12' },
                    { ticker: 'BSE:SENSEX2381155000PE', type: 'OPTIONS', date: '2025-08-15' },
                    { ticker: 'NSE:NIFTY20D1008000PE', type: 'OPTIONS', date: '2025-10-08' },
                    { ticker: 'NSE:NIFTY20N1113000CE', type: 'OPTIONS', date: '2025-11-13' },
                    { ticker: 'NSE:NIFTY20N0920000PE', type: 'OPTIONS', date: '2025-09-20' },
                ];

                const matchedOptions = allOptions.filter(opt =>
                    monthlyCodes.some(code => opt.ticker.includes(code)) ||
                    weeklyCodes.some(code => new RegExp(`\\d{2}${code}\\d{2}`).test(opt.ticker)) // eg. 20O08
                );

                stocks.push(...matchedOptions);
                break;

            case 'FUTURES':
                if (!filter) {
                    res.status(400).json({ message: 'FUTURES requires a filter' });
                    return;
                }

                const filterArray = Array.isArray(filter) ? filter : [filter];

                let temp = [
                    { ticker: 'NIFTY20OCTFUT', date: '2025-10-20', type: 'FUTURES' },
                    { ticker: 'BANKNIFTY20OCTFUT', date: '2025-10-22', type: 'FUTURES' },
                    { ticker: 'SENSEX20OCTFUT', date: '2025-10-24', type: 'FUTURES' },
                    { ticker: 'NIFTY20NOVFUT', date: '2025-11-25', type: 'FUTURES' },
                    { ticker: 'BANKNIFTY20NOVFUT', date: '2025-11-25', type: 'FUTURES' },
                    { ticker: 'SENSEX20NOVFUT', date: '2025-11-21', type: 'FUTURES' },
                    { ticker: 'NIFTY20DECFUT', date: '2025-12-20', type: 'FUTURES' },
                    { ticker: 'BANKNIFTY20DECFUT', date: '2025-12-22', type: 'FUTURES' },
                    { ticker: 'SENSEX20DECFUT', date: '2025-12-27', type: 'FUTURES' },
                ];

                temp = temp.filter(item =>
                    filterArray.some(month => item.ticker.includes(month.toUpperCase()))
                );
                stocks.push(...temp);
                break;

            default:
                res.status(400).json({ message: 'Invalid segment provided' });
                return;
        }

        res.status(200).json({ message: 'Stocks fetched successfully', stocks });
    } catch (err) {
        res.status(500).json({ message: 'An error occurred while fetching stocks' });
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