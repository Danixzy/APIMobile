export class JogoNotFoundError extends Error {
  constructor() {
    super('Jogo não encontrado.');
    this.name = 'JogoNotFoundError';
  }
}
