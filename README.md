# symphony-demo

Toy Express API for Symphony + ...

## Setup

```bash
npm install
npm test    # 1 failing test out of the box
npm start   # runs on port 3000
```

## Endpoints

- `GET /health` — health check
- `GET /users` — list users
- `POST /users` — create user (body: `{ username, email }`)
- `GET /tasks` — list incomplete tasks (has a bug!)
- `GET /tasks/:id` — get task by id

## Known Issues

- `GET /tasks` throws a ReferenceError (deliberate — for demo)
- `validateUsername` is imported but not yet implemented
- No `DELETE /users/:id` endpoint
