# PGATS-02 API

API em memória para aprendizado de testes e automação. Implementa registro, login, listagem de usuários e transferências com regras simples.

Regras principais:
- É necessário informar email e password para logar.
- Não é permitido registrar usuários com o mesmo email.
- Transferências para destinatários que não são marcados como `favored` só podem ser realizadas se o valor for menor que R$ 5.000,00.

Estrutura:
- `app.js` - instancia o Express e exporta o app (sem listen) para facilitar testes.
- `server.js` - importa `app` e chama `listen`.
- `controller/` - rotas HTTP.
- `service/` - lógica de negócio.
- `model/` - armazenamento em memória.

Instalação

1. Instale dependências:

```powershell
npm install
```

2. Inicie a API:

```powershell
npm start
```

A API será exposta em `http://localhost:3000` por padrão.

Swagger

Abra `http://localhost:3000/api-docs` para ver a documentação interativa.

Exemplos de uso

- Registrar:

  POST /users/register
  Body: { "name": "Ana", "email": "a@a.com", "password": "123", "favored": true, "balance": 10000 }

- Login:

  POST /users/login
  Body: { "email": "a@a.com", "password": "123" }

- Transferir:

  POST /transfers
  Body: { "fromId": "1", "toId": "2", "amount": 3000 }

Notas

- Banco em memória: os dados são perdidos ao reiniciar o processo.
- Projeto pensado para facilitar testes com Supertest: importe `app.js` nos testes.
# pgtas-02-api
