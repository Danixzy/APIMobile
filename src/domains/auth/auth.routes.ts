import { Router } from 'express';
import { validateLoginBody } from './auth.validators';
import { login } from './auth.controller';

const router = Router();

router.post('/login', validateLoginBody, login);

export default router;
