import { Router } from 'express';
import { authenticateToken } from '../middleware/middleware';
import { portfolioData, tradeFun, rollOver, closeAll } from '../controllers/portfolio.controller';

const router = Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     Bearer:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * tags:
 *   - name: Portfolio
 *     description: Endpoints for portfolio management
 */

/**
 * @swagger
 * /api/api/portfolio:
 *   get:
 *     summary: Get user portfolio
 *     tags: [Portfolio]
 *     security:
 *       - Bearer: []
 *     responses:
 *       200:
 *         description: Portfolio fetched successfully
 *       401:
 *         description: Unauthorized
 */
router.get('/portfolio', authenticateToken, portfolioData);

/**
 * @swagger
 * /api/api/trade:
 *   post:
 *     summary: Place a trade order
 *     tags: [Portfolio]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quantity
 *               - orderType
 *               - tickerId
 *               - executionType
 *             properties:
 *               quantity:
 *                 type: number
 *               orderType:
 *                 type: string
 *                 enum: [BUY, SELL]
 *               tickerId:
 *                 type: string
 *               executionType:
 *                 type: string
 *                 enum: [INSTANT, LIMIT]
 *               limitPrice:
 *                 type: number
 *     responses:
 *       200:
 *         description: Trade placed successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */

router.post('/trade', authenticateToken, tradeFun);

/**
 * @swagger
 * /api/api/rollOver:
 *   get:
 *     summary: Roll over all eligible positions
 *     tags: [Portfolio]
 *     security:
 *       - Bearer: []
 *     responses:
 *       200:
 *         description: RollOver successfully
 *       401:
 *         description: Unauthorized
 */

router.get('/rollOver', authenticateToken, rollOver);

/**
 * @swagger
 * /api/api/closeAll:
 *   get:
 *     summary: Close all open positions
 *     tags: [Portfolio]
 *     security:
 *       - Bearer: []
 *     responses:
 *       200:
 *         description: closeAll successfully
 *       401:
 *         description: Unauthorized
 */
router.get('/closeAll', authenticateToken, closeAll);

export default router;
