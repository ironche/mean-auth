import { sign } from 'jsonwebtoken';
import config from '../../config';
import { User } from '../../models/user';

export default async function(req, res) {
  try {
    const { username, password } = req.body;

    if (username && password) {
      const user = await User.findOne({ username }).exec();

      if (user) {
        if (user.checkPassword(password, user.password)) {
          const token = sign(
            { username },
            config.jwtSecret,
            { expiresIn: config.jwtExpires }
          );

          return res
            .cookie(config.jwtCookie, token, {
              maxAge: config.jwtExpires * 1000,
              httpOnly: true
            })
            .json({
              message: 'ok'
            });
        }

        return res.status(401).json({
          message: 'Username or password are incorrect'
        });
      }
      return res.status(409).json({
        message: 'User does not exist'
      });
    }
    return res.status(400).json({
      message: 'Missing parameters'
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
