# Como Testar a API — Guia para os Colegas

API hospedada em produção no Railway:

```
https://apimobile-production-aaec.up.railway.app
```

---

## Opção 1 — Swagger (mais fácil, sem instalar nada)

Acesse pelo navegador e teste diretamente pela interface:

```
https://apimobile-production-aaec.up.railway.app/docs/
```

Basta clicar em cada endpoint, preencher os campos e clicar em **Execute**.

---

## Opção 2 — Postman

### Importar a coleção pronta

O repositório já tem uma coleção Postman pronta para importar: **`APIMobile.postman_collection.json`**

1. Abra o Postman
2. Clique em **Import**
3. Selecione o arquivo `APIMobile.postman_collection.json` (na raiz do projeto)
4. Todos os endpoints já estarão configurados com a URL de produção

---

### Ou configure manualmente

- Base URL: `https://apimobile-production-aaec.up.railway.app`
- Content-Type: `application/json`

---

### POST /login

Autentica e retorna um token UUID.

- **Método:** `POST`
- **URL:** `https://apimobile-production-aaec.up.railway.app/login`
- **Body (raw JSON):**

```json
{
  "email": "usuario@esoft.com",
  "password": "Abc123"
}
```

- **Resposta esperada `200 OK`:**

```json
{
  "token": "550e8400-e29b-41d4-a716-446655440000"
}
```

---

### GET /jogos

Retorna todos os jogos cadastrados.

- **Método:** `GET`
- **URL:** `https://apimobile-production-aaec.up.railway.app/jogos`
- **Body:** nenhum

- **Resposta esperada `200 OK`:**

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

Busca um jogo pelo ID.

- **Método:** `GET`
- **URL:** `https://apimobile-production-aaec.up.railway.app/jogos/1`
- **Body:** nenhum

- **Resposta esperada `200 OK`:**

```json
{
  "id": 1,
  "nome": "The Legend of Zelda",
  "tipo": "Aventura",
  "nota": 10,
  "review": "Um clássico absoluto."
}
```

- **Resposta `404`** (se não existir):

```json
{ "error": "Jogo não encontrado." }
```

---

### POST /jogos

Cadastra um novo jogo.

- **Método:** `POST`
- **URL:** `https://apimobile-production-aaec.up.railway.app/jogos`
- **Body (raw JSON):**

```json
{
  "nome": "Elden Ring",
  "tipo": "RPG",
  "nota": 9,
  "review": "Desafiador e visualmente impecável."
}
```

- **Resposta esperada `201 Created`:**

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

- **Método:** `PUT`
- **URL:** `https://apimobile-production-aaec.up.railway.app/jogos/1`
- **Body (raw JSON):**

```json
{
  "nome": "The Legend of Zelda: Tears of the Kingdom",
  "tipo": "Aventura",
  "nota": 10,
  "review": "Melhor jogo da geração."
}
```

- **Resposta esperada `200 OK`:**

```json
{
  "id": 1,
  "nome": "The Legend of Zelda: Tears of the Kingdom",
  "tipo": "Aventura",
  "nota": 10,
  "review": "Melhor jogo da geração."
}
```

---

### DELETE /jogos/:id

Remove um jogo pelo ID.

- **Método:** `DELETE`
- **URL:** `https://apimobile-production-aaec.up.railway.app/jogos/1`
- **Body:** nenhum

- **Resposta esperada `204 No Content`:** *(sem corpo)*

- **Resposta `404`** (se não existir):

```json
{ "error": "Jogo não encontrado." }
```
