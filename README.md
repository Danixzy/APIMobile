# API Mobile — Biblioteca de Jogos

API REST para gerenciar uma biblioteca pessoal de jogos e avaliações.

## Stack

- Node.js + Express + TypeScript
- MySQL (via Docker)
- Knex (migrations)

## Como rodar

### 1. Instalar dependências

```bash
yarn
```

### 2. Configurar o `.env`

Copie o `.env.example` ou crie um `.env` na raiz:

```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_NAME=apimobile
PORT=3000
```

### 3. Subir o banco de dados

```bash
yarn docker:up
```

### 4. Rodar o projeto

```bash
yarn dev
```

As migrations são executadas automaticamente ao iniciar. A API estará disponível em `http://localhost:3000`.

---

## Documentação interativa (Swagger)

Prefere não configurar o Postman? Acesse a documentação interativa no navegador:

```
http://localhost:3000/docs
```

Todos os endpoints estão documentados e podem ser testados diretamente pelo Swagger UI.

---

## Endpoints

### POST /login

Autentica o usuário e retorna um token UUID.

**Request:**
```json
{
  "email": "usuario@esoft.com",
  "password": "Abc123"
}
```

**Response `200 OK`:**
```json
{
  "token": "550e8400-e29b-41d4-a716-446655440000"
}
```

---

### GET /jogos

Retorna todos os jogos cadastrados.

**Response `200 OK`:**
```json
[
  {
    "id": 1,
    "nome": "The Legend of Zelda",
    "tipo": "Aventura",
    "nota": 10,
    "review": "Um clássico absoluto."
  }
]
```

---

### GET /jogos/:id

Retorna um jogo pelo ID.

**Response `200 OK`:**
```json
{
  "id": 1,
  "nome": "The Legend of Zelda",
  "tipo": "Aventura",
  "nota": 10,
  "review": "Um clássico absoluto."
}
```

**Response `404 Not Found`:**
```json
{ "error": "Jogo não encontrado." }
```

---

### POST /jogos

Cadastra um novo jogo.

**Request:**
```json
{
  "nome": "Elden Ring",
  "tipo": "RPG",
  "nota": 9,
  "review": "Desafiador e visualmente impecável."
}
```

**Response `201 Created`:**
```json
{
  "id": 3,
  "nome": "Elden Ring",
  "tipo": "RPG",
  "nota": 9,
  "review": "Desafiador e visualmente impecável."
}
```

---

### PUT /jogos/:id

Atualiza todos os dados de um jogo. Todos os campos são obrigatórios.

**Request:**
```json
{
  "nome": "Elden Ring",
  "tipo": "RPG",
  "nota": 10,
  "review": "Obra-prima."
}
```

**Response `200 OK`:**
```json
{
  "id": 3,
  "nome": "Elden Ring",
  "tipo": "RPG",
  "nota": 10,
  "review": "Obra-prima."
}
```

**Response `404 Not Found`:**
```json
{ "error": "Jogo não encontrado." }
```

---

### DELETE /jogos/:id

Remove um jogo pelo ID.

**Response `204 No Content`:** *(sem corpo)*

**Response `404 Not Found`:**
```json
{ "error": "Jogo não encontrado." }
```

---

## Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `yarn dev` | Roda migrations e sobe o servidor com hot reload |
| `yarn start` | Roda migrations e sobe o servidor em produção |
| `yarn build` | Compila o TypeScript para JavaScript |
| `yarn migrate:latest` | Roda as migrations pendentes |
| `yarn migrate:rollback` | Desfaz a última migration |
| `yarn docker:up` | Sobe o banco MySQL via Docker |
| `yarn docker:down` | Derruba o container do banco |
