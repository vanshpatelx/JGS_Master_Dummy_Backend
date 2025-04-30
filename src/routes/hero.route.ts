import { Router } from 'express';
import { authenticateToken } from '../middleware/middleware';
import { heroData } from '../controllers/hero.controller';

const router = Router();


router.get('/hero', authenticateToken, heroData);

export default router;
