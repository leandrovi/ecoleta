import express, { Request, Response } from 'express';

const app = express();

app.get(
  '/users',
  (request: Request, response: Response): Response => {
    return response.json({ ok: true });
  },
);

app.listen(3333, () => {
  console.log('🚀 Ecoleta server started on port 3333!');
});
