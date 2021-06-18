import { Router } from 'express';

import checkAuth from '../middlewares/auth.js';
import userRoutes from './userRoutes.js';
import todoRoutes from './todoRoutes.js';

/**
 * Contains all API routes for the application.
 */
const router = Router();
/**
 * GET /api
 */

router.use('/users',userRoutes);
router.use('/todo',checkAuth,todoRoutes);

export default router;
