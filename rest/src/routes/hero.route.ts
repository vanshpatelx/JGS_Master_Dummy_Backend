import { Router } from 'express';
import { authenticateToken } from '../middleware/middleware';
import { heroData } from '../controllers/hero.controller';

const router = Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 * tags:
 *   - name: Hero
 *     description: Fetches hero stock data
 */

/**
 * @swagger
 * /api/hero:
 *   get:
 *     summary: Get hero stock data
 *     tags: [Hero]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Hero stocks fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hero Stocks fetched successfully
 *                 heroStocks:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                         example: 1
 *                       ticker:
 *                         type: string
 *                         example: SENSEX
 *                       tickerId:
 *                         type: array
 *                         items:
 *                           type: string
 *                           example: SENSEX-SPOT
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.get('/hero', authenticateToken, heroData);

export default router;
