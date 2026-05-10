import { Request, Response, NextFunction } from 'express';

export function validateJogoBody(req: Request, res: Response, next: NextFunction): void {
  const { nome, tipo, nota, review } = req.body;

  if (!nome || !tipo || nota === undefined || nota === null || !review) {
    res.status(400).json({ error: 'nome, tipo, nota e review são obrigatórios.' });
    return;
  }

  if (typeof nota !== 'number') {
    res.status(400).json({ error: 'nota deve ser um número.' });
    return;
  }

  next();
}
