import { Router } from 'express';
import { authenticateToken } from '../middleware/middleware';
import { portfolioData, trade, rollOver, closeAll } from '../controllers/portfolio.controller';

const router = Router();


router.get('/portfolio', authenticateToken, portfolioData);

router.post('/trade', authenticateToken, trade);

router.get('/rollOver', authenticateToken, rollOver);

router.get('/closeAll', authenticateToken, closeAll);

export default router;
