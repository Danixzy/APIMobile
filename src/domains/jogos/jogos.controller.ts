import { Request, Response } from 'express';
import * as JogoModel from './jogos.model';
import { JogoNotFoundError } from './jogos.errors';

export async function getAll(req: Request, res: Response): Promise<void> {
  const jogos = await JogoModel.findAll();
  res.status(200).json(jogos);
}

export async function getById(req: Request, res: Response): Promise<void> {
  const jogo = await JogoModel.findById(Number(req.params.id));

  if (!jogo) {
    res.status(404).json({ error: new JogoNotFoundError().message });
    return;
  }

  res.status(200).json(jogo);
}

export async function create(req: Request, res: Response): Promise<void> {
  const { nome, tipo, nota, review } = req.body;
  const jogo = await JogoModel.create({ nome, tipo, nota, review });
  res.status(201).json(jogo);
}

export async function update(req: Request, res: Response): Promise<void> {
  const { nome, tipo, nota, review } = req.body;
  const jogo = await JogoModel.update(Number(req.params.id), { nome, tipo, nota, review });

  if (!jogo) {
    res.status(404).json({ error: new JogoNotFoundError().message });
    return;
  }

  res.status(200).json(jogo);
}

export async function remove(req: Request, res: Response): Promise<void> {
  const deleted = await JogoModel.remove(Number(req.params.id));

  if (!deleted) {
    res.status(404).json({ error: new JogoNotFoundError().message });
    return;
  }

  res.status(204).send();
}
