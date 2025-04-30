import { Router } from 'express';
import { authenticateToken } from '../middleware/middleware';
import { watchlistData } from '../controllers/watchlist.controller';

const router = Router();

router.get('/watchlist', authenticateToken, watchlistData);

export default router;
