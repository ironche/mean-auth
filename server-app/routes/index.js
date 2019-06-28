import { Router } from 'express';
import { loginGuard } from './guards';
import auth from './api/auth';
import user from './api/user';

export default function() {
  return Router()
    .use('/api/auth', auth())
    .use('/api/user', loginGuard, user())
    .get('/', hello);
}

function hello(req, res) {
  return res.json({
    message: 'Hello from API server'
  });
}
