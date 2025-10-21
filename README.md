# PGATS-02-API

API de exemplo para aprendizado de testes e automação.

Recursos:
- Registrar usuário
- Login (retorna token simples)
- Listar usuários
- Realizar transferências entre usuários com regra de negócio

Regras importantes:
1. Login requer username e password.
2. Não é permitido registrar usuários com username duplicado.
3. Transferências para destinatários que não são `favored` só podem ser realizadas se o valor for menor que R$ 5.000,00.

Banco de dados: em memória (variáveis), basta reiniciar a aplicação para zerar os dados.

Instalação

```powershell
npm install
```

Executar

```powershell
npm start
```

A aplicação será iniciada em `http://localhost:3000`.

Endpoints principais

- GET / -> health
- POST /api/users -> cadastrar usuário
  - body: { username, password, name?, favored? }
- POST /api/auth/login -> login
  - body: { username, password }
  - response: { token, user }
- GET /api/users -> lista usuários (sem senha)
- POST /api/transfers -> realizar transferência
  - header: Authorization: Bearer <token>
  - body: { toUserId, amount, description? }

Swagger UI

A documentação OpenAPI está disponível em `/api-docs`.

Notas

- O token retornado no login é apenas o `id` do usuário para simplificar os testes; não use em produção.
- Projeto organizado em `controllers`, `services`, `models` e `routes` para facilitar leitura e testes.
