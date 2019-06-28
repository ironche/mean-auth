import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'express-jwt';
import config from './config';
import routes from './routes';

express()
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(cookieParser())
  .use(configureJwt(), handleJwtError)
  .use(log)
  .use('/', routes())
  .listen(config.appPort, () => {
    console.log(`Server is up and running on port ${config.appPort}`);
    mongoose.Promise = global.Promise;
    mongoose.connect(config.dbUrl, { useNewUrlParser: true });
  });

function log(req, res, next) {
  const d = new Date();
  const time = [d.getHours(), d.getMinutes(), d.getSeconds()]
    .map(val => `${val}`.padStart(2, '0'))
    .join(':');
  const { user, url, method } = req;
  console.log({ time, user, url, method });
  next();
}

function configureJwt() {
  return jwt({
    secret: config.jwtSecret,
    credentialsRequired: false,
    getToken: (req) => req.cookies[config.jwtCookie] || null
  });
}

function handleJwtError(err, req, res, next) {
  const { name, message, code, status } = err;
  const error = { name, message, code };
  console.log('JWT', error);
  return res.status(status).json(error);
}
