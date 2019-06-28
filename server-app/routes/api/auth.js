import { Router } from 'express';
import loginController from '../../controllers/auth/login';
import logoutController from '../../controllers/auth/logout';
import registerController from '../../controllers/auth/register';

export default function() {
  return Router()
    .post('/register', registerController)
    .post('/login', loginController)
    .get('/logout', logoutController);
}
