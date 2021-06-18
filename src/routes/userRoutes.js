import { Router } from 'express';

import * as userController from '../controllers/users.js';
import { findUser, userValidator,registerValidator } from '../validators/userValidator.js';
import checkAuth from '../middlewares/auth.js';

const router = Router();

/**
 * GET /api/users
 */
router.get('/me',checkAuth, userController.fetch);

/**
 * POST /api/users/login
 */
router.post('/login', userValidator, userController.login);

/**
 * POST /api/users/register
 */
 router.post('/register', registerValidator, userController.register);

/**
 * PUT /api/users/:id
 */
router.put('/:id', findUser, userValidator, userController.update);


export default router;
