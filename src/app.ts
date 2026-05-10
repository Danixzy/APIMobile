import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import authRoutes from './domains/auth/auth.routes';
import jogosRoutes from './domains/jogos/jogos.routes';
import { jogosPaths, jogoSchema, jogoInputSchema } from './domains/jogos/jogos.swagger';

const app = express();

app.use(cors());
app.use(express.json());

const swaggerSpec = {
  openapi: '3.0.0',
  info: { title: 'API Mobile - Biblioteca de Jogos', version: '1.0.0' },
  paths: {
    '/login': {
      post: {
        tags: ['Auth'],
        summary: 'Realiza login',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                  email: { type: 'string', example: 'usuario@esoft.com' },
                  password: { type: 'string', example: 'Abc123' },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Token UUID gerado',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: { token: { type: 'string', example: '550e8400-e29b-41d4-a716-446655440000' } },
                },
              },
            },
          },
          401: { description: 'Credenciais inválidas' },
        },
      },
    },
    ...jogosPaths,
  },
  components: {
    schemas: {
      Jogo: jogoSchema,
      JogoInput: jogoInputSchema,
    },
  },
};

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(authRoutes);
app.use(jogosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Documentação: http://localhost:${PORT}/docs`);
});
