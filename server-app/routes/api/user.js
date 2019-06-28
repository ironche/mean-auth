import { Router } from 'express';
import welcomeController from '../../controllers/user/welcome';
import updateController from '../../controllers/user/update'

export default function() {
  return Router()
    .get('/welcome', welcomeController)
    .post('/update', updateController);
}
