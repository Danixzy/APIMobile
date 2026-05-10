import { Request, Response, NextFunction } from 'express';

export function validateLoginBody(req: Request, res: Response, next: NextFunction): void {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: 'email e password são obrigatórios.' });
    return;
  }

  next();
}
