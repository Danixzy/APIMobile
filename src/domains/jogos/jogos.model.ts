import db from '../../database/db';

export interface Jogo {
  id: number;
  nome: string;
  tipo: string;
  nota: number;
  review: string;
}

export type JogoInput = Omit<Jogo, 'id'>;

export async function findAll(): Promise<Jogo[]> {
  return db<Jogo>('jogos').select('*');
}

export async function findById(id: number): Promise<Jogo | undefined> {
  return db<Jogo>('jogos').where({ id }).first();
}

export async function create(data: JogoInput): Promise<Jogo> {
  const [id] = await db<Jogo>('jogos').insert(data);
  return findById(id) as Promise<Jogo>;
}

export async function update(id: number, data: JogoInput): Promise<Jogo | undefined> {
  const affected = await db<Jogo>('jogos').where({ id }).update(data);
  if (!affected) return undefined;
  return findById(id);
}

export async function remove(id: number): Promise<boolean> {
  const deleted = await db<Jogo>('jogos').where({ id }).delete();
  return deleted > 0;
}
