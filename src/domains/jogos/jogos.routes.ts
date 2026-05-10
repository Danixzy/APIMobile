import { Router } from 'express';
import { validateJogoBody } from './jogos.validators';
import * as JogoController from './jogos.controller';

const router = Router();

router.get('/jogos', JogoController.getAll);
router.get('/jogos/:id', JogoController.getById);
router.post('/jogos', validateJogoBody, JogoController.create);
router.put('/jogos/:id', validateJogoBody, JogoController.update);
router.delete('/jogos/:id', JogoController.remove);

export default router;
