import { Router } from 'express';
import { authenticateToken } from '../middleware/middleware';
import { watchlistData } from '../controllers/watchlist.controller';

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
 *   - name: Watchlist
 *     description: Endpoints for fetching watchlist data
 */

/**
 * @swagger
 * /api/api/watchlist:
 *   get:
 *     summary: Fetch watchlist stocks for a user based on segment and optional filter.
 *     tags: [Watchlist]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: query
 *         name: segments
 *         required: true
 *         schema:
 *           type: string
 *           enum: [BSE, NSE, OPTIONS, FUTURES]
 *           example: FUTURES
 *       - in: query
 *         name: filter
 *         required: false
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *           example: ["NOV", "DEC"]
 *         style: form
 *         explode: true
 *     responses:
 *       200:
 *         description: Stocks fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Stocks fetched successfully
 *                 stocks:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       ticker:
 *                         type: string
 *                       type:
 *                         type: string
 *                       date:
 *                         type: string
 *                         format: date
 *                         nullable: true
 *       400:
 *         description: Invalid request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get('/watchlist', authenticateToken, watchlistData);

export default router;
