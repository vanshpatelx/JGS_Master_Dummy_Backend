export interface Stock {
    ticker: string;
    type: 'BSE' | 'NSE' | 'OPTIONS' | 'FUTURES' | 'None';
    name?: string;
    date?: string;
}

export const STOCKS: Stock[] = [
    // BSE stocks
    { ticker: 'SUZLON-EQ', type: 'BSE', name: 'SUZLON' },
    { ticker: 'TATASTEEL-EQ', type: 'BSE', name: 'TATA STEEL' },
    { ticker: 'TATAMOTORS-EQ', type: 'BSE', name: 'TATA MOTORS' },
    { ticker: 'TATAPOWER-EQ', type: 'BSE', name: 'TATA POWER' },
    { ticker: 'RELIANCE-EQ', type: 'BSE', name: 'RELIANCE' },
    { ticker: 'INFY-EQ', type: 'BSE', name: 'INFY' },
    { ticker: 'HDFCBANK-EQ', type: 'BSE', name: 'HDFC BANK' },
    { ticker: 'ICICIBANK-EQ', type: 'BSE', name: 'ICICI BANK' },
    { ticker: 'SBIN-EQ', type: 'BSE', name: 'STATE BANK OF INDIA' },
    { ticker: 'ITC-EQ', type: 'BSE', name: 'ITC' },
    { ticker: 'HINDUNILVR-EQ', type: 'BSE', name: 'HINDUNILVER' },
    { ticker: 'BAJFINANCE-EQ', type: 'BSE', name: 'BAJAJ FINANCE' },
    { ticker: 'LT-EQ', type: 'BSE', name: 'LARSEN & TOUBRO' },
    { ticker: 'AXISBANK-EQ', type: 'BSE', name: 'AXIS BANK' },
    { ticker: 'KOTAKBANK-EQ', type: 'BSE', name: 'KOTAK BANK' },

    // NSE stocks
    { ticker: 'RELIANCE-EQ', type: 'NSE', name: 'RELIANCE' },
    { ticker: 'INFY-EQ', type: 'NSE', name: 'INFY' },
    { ticker: 'TCS-EQ', type: 'NSE', name: 'TCS' },
    { ticker: 'WIPRO-EQ', type: 'NSE', name: 'WIPRO' },
    { ticker: 'SBIN-EQ', type: 'NSE', name: 'STATE BANK OF INDIA' },
    { ticker: 'ICICIBANK-EQ', type: 'NSE', name: 'ICICI BANK' },
    { ticker: 'HDFCBANK-EQ', type: 'NSE', name: 'HDFC BANK' },
    { ticker: 'KOTAKBANK-EQ', type: 'NSE', name: 'KOTAK BANK' },
    { ticker: 'TATAMOTORS-EQ', type: 'NSE', name: 'TATA MOTORS' },
    { ticker: 'TATASTEEL-EQ', type: 'NSE', name: 'TATA STEEL' },
    { ticker: 'ADANIENT-EQ', type: 'NSE', name: 'ADANI ENTERPRISES' },
    { ticker: 'BAJFINANCE-EQ', type: 'NSE', name: 'BAJAJ FINANCE' },
    { ticker: 'MARUTI-EQ', type: 'NSE', name: 'MARUTI SUZUKI' },
    { ticker: 'HINDUNILVR-EQ', type: 'NSE', name: 'HINDUNILVER' },
    { ticker: 'ITC-EQ', type: 'NSE', name: 'ITC' },

    // Options
    { ticker: 'NSE:NIFTY20OCT11000CE', type: 'OPTIONS', date: '2025-10-11' },
    { ticker: 'NSE:BANKNIFTY20NOV25000PE', type: 'OPTIONS', date: '2025-11-25' },
    { ticker: 'BSE:SENSEX23AUG60400CE', type: 'OPTIONS', date: '2025-08-23' },
    { ticker: 'NSE:NIFTY20OCT12000CE', type: 'OPTIONS', date: '2025-10-12' },
    { ticker: 'NSE:NIFTY20OCT13000PE', type: 'OPTIONS', date: '2025-10-13' },
    { ticker: 'BSE:SENSEX23SEP55000PE', type: 'OPTIONS', date: '2025-09-23' },
    { ticker: 'NSE:NIFTY20NOV10000CE', type: 'OPTIONS', date: '2025-11-10' },
    { ticker: 'NSE:BANKNIFTY20DEC20000PE', type: 'OPTIONS', date: '2025-12-20' },
    { ticker: 'BSE:SENSEX23NOV67500CE', type: 'OPTIONS', date: '2025-11-23' },
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

    // Futures
    { ticker: 'NSE:NIFTY20OCTFUT', type: 'FUTURES', date: '2025-10-20' },
    { ticker: 'NSE:BANKNIFTY20OCTFUT', type: 'FUTURES', date: '2025-10-22' },
    { ticker: 'NSE:SENSEX20OCTFUT', type: 'FUTURES', date: '2025-10-24' },
    { ticker: 'NSE:NIFTY20NOVFUT', type: 'FUTURES', date: '2025-11-25' },
    { ticker: 'BSE:BANKNIFTY20NOVFUT', type: 'FUTURES', date: '2025-11-25' },
    { ticker: 'BSE:SENSEX20NOVFUT', type: 'FUTURES', date: '2025-11-21' },
    { ticker: 'BSE:NIFTY20DECFUT', type: 'FUTURES', date: '2025-12-20' },
    { ticker: 'NSE:BANKNIFTY20DECFUT', type: 'FUTURES', date: '2025-12-22' },
    { ticker: 'NSE:SENSEX20DECFUT', type: 'FUTURES', date: '2025-12-27' },

    { ticker: 'SENSEX-SPOT', type: 'None' },
    { ticker: 'SENSEX-FUTURE' , type: 'None' },
    { ticker: 'BANKNIFTY-SPOT', type: 'None' },
    { ticker: 'BANKNIFTY-FUTURE' , type: 'None' },
    { ticker: 'NIFTY-SPOT', type: 'None' },
    { ticker: 'NIFTY-FUTURE' , type: 'None' },


];
