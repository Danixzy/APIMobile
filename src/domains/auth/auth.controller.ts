import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { InvalidCredentialsError } from './auth.errors';

export function login(req: Request, res: Response): void {
  const { email, password } = req.body;

  if (email === 'usuario@esoft.com' && password === 'Abc123') {
    res.status(200).json({ token: uuidv4() });
    return;
  }

  const error = new InvalidCredentialsError();
  res.status(401).json({ error: error.message });
}
