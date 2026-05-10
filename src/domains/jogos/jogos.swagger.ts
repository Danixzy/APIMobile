export const jogoSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer', example: 1 },
    nome: { type: 'string', example: 'The Legend of Zelda' },
    tipo: { type: 'string', example: 'Aventura' },
    nota: { type: 'integer', example: 10 },
    review: { type: 'string', example: 'Um clássico absoluto.' },
  },
};

export const jogoInputSchema = {
  type: 'object',
  required: ['nome', 'tipo', 'nota', 'review'],
  properties: {
    nome: { type: 'string', example: 'Elden Ring' },
    tipo: { type: 'string', example: 'RPG' },
    nota: { type: 'integer', example: 9 },
    review: { type: 'string', example: 'Desafiador e visualmente impecável.' },
  },
};

export const jogosPaths = {
  '/jogos': {
    get: {
      tags: ['Jogos'],
      summary: 'Lista todos os jogos',
      responses: {
        200: {
          description: 'Lista de jogos',
          content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/Jogo' } } } },
        },
      },
    },
    post: {
      tags: ['Jogos'],
      summary: 'Cadastra um novo jogo',
      requestBody: {
        required: true,
        content: { 'application/json': { schema: { $ref: '#/components/schemas/JogoInput' } } },
      },
      responses: {
        201: {
          description: 'Jogo criado',
          content: { 'application/json': { schema: { $ref: '#/components/schemas/Jogo' } } },
        },
      },
    },
  },
  '/jogos/{id}': {
    get: {
      tags: ['Jogos'],
      summary: 'Busca jogo por ID',
      parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
      responses: {
        200: { description: 'Jogo encontrado', content: { 'application/json': { schema: { $ref: '#/components/schemas/Jogo' } } } },
        404: { description: 'Jogo não encontrado' },
      },
    },
    put: {
      tags: ['Jogos'],
      summary: 'Atualiza todos os dados de um jogo',
      parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
      requestBody: {
        required: true,
        content: { 'application/json': { schema: { $ref: '#/components/schemas/JogoInput' } } },
      },
      responses: {
        200: { description: 'Jogo atualizado', content: { 'application/json': { schema: { $ref: '#/components/schemas/Jogo' } } } },
        404: { description: 'Jogo não encontrado' },
      },
    },
    delete: {
      tags: ['Jogos'],
      summary: 'Remove um jogo',
      parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
      responses: {
        204: { description: 'Jogo removido com sucesso' },
        404: { description: 'Jogo não encontrado' },
      },
    },
  },
};
