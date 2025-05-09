import { Router } from 'express';
import { authenticateToken } from '../middleware/middleware';
import { newsData } from '../controllers/news.controller';

const router = Router();


/**
 * @swagger
 * components:
 *   securitySchemes:
 *     Bearer:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 * tags:
 *   name: News
 *   description: Fetches news data
 */

/**
 * @swagger
 * /api/news:
 *   get:
 *     summary: Get news data
 *     tags: [News]
 *     security:
 *       - Bearer: []  # This applies the bearer token authentication to this route
 *     responses:
 *       200:
 *         description: News data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: News fetched successfully
 *                 news:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       content:
 *                         type: string
 *                         example: 'Sensex surges 400 points led by gains in banking and IT stocks'
 *       401:
 *         description: Unauthorized, no token or invalid token
 *       500:
 *         description: Internal server error
 */

router.get('/news', authenticateToken, newsData);

export default router;
