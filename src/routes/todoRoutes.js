import {Router} from 'express';
import * as todoController from '../controllers/todo.js';

const router  = Router();

router.get('/all',todoController.fetch);

router.post('/create',todoController.create);

router.put('/:id',todoController.update);

router.delete('/:id',todoController.remove);

export default router;